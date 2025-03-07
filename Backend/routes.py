from flask import request, send_from_directory, jsonify
from app import db, app
from db_models import User, Message
from Gemini import Gemini
from api_loader import api_key
from uuid import uuid4
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
model = Gemini(api_key)

SECRET_KEY = str(uuid4())

app.config["JWT_SECRET_KEY"] = SECRET_KEY
jwt = JWTManager(app)

@app.route("/", methods=["GET"])
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/<path:subpath>",methods=["GET"])
def getResource(subpath):
    if not subpath: return jsonify({"error: resource not found"}),404
    return send_from_directory(app.static_folder, subpath)

@app.route("/create-account", methods=["POST"])
def signup():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    fname = data.get("fName")
    lname = data.get("lName")
    password = data.get("password")
    userType =data.get("userType")
    
    user = User(username= username,
                first_name = fname, 
                last_name = lname,
                email= email,
                password =password,
                user_type = userType
                )
    
    #verifying no double user with same email, and username too
    if User.query.filter_by(email=email).first() :
        return jsonify({'error': 'User already exists'}), 400
    if User.query.filter_by(username=username).first():
        return jsonify({'error': "username already exist please choose another"}), 400
    db.session.add(user)
    db.session.commit()
    user = User.query.filter_by(email=email).first()
    access_token = create_access_token(identity=username)
    return jsonify({'message': 'Account has been created successfully!',"access_token":access_token}), 201

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Query the user by email
    user_by_email = User.query.filter_by(email=email).first()

    if not user_by_email:
        return jsonify({"error": "User not found"}), 404

    # Verify password (assuming you have a check_password_hash method)
    if not (user_by_email.password == password):
        return jsonify({"error": "Invalid password"}), 401

    # Ensure the username is a string
    username = str(user_by_email.username)  # Convert to string explicitly

    # Generate JWT token with string identity
    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token), 200

@app.route("/chat-service", methods=["POST"])
def ask_model():
    question = request.json
    if not question or "parts" not in question:
        return jsonify({"error":"missing part value"}),400
    currentUser = get_identity_from_token()
    response = model.ask_gemini_text(question.get('parts'))
    if(currentUser):
        user = User.query.filter_by(username=currentUser)
        user_question = Message(content=str(question), user_id=user.id)
        model_response = Message(content=str(response), user_id=user.id)
        db.session.add(user_question)
        db.session.add(model_response)
        db.session.commit()        
    return jsonify(response)

def get_identity_from_token():
    auth_header = request.headers.get("Authorization")
    if not auth_header or "Bearer " not in auth_header:
        return None
    token = auth_header.split("Bearer ")[1]  # Extract token
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])  # Decode JWT
        return payload.get("sub") 
    except Exception:
        return None
    
@app.route("/get-messages",methods=["GET"])
@jwt_required()
def get_messages():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first
    messages = Message.query.filter_by(user_id = user.id).all

    return jsonify([message.to_json() for message in messages])

@app.route("/get-user",methods=["GET"])
@jwt_required()
def get_user():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()
    return jsonify(user.to_json())