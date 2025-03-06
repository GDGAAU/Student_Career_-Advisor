from flask import request, send_from_directory, jsonify
from app import db, app
from db_models import User, Message
from Gemini import Gemini
from api_loader import api_key

model = Gemini(api_key)

@app.route("/", methods=["GET"])
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/<path:subpath>",methods=["GET"])
def getResource(subpath):
    if not subpath: return jsonify({"error: resource not found"}),404
    return send_from_directory(app.static_folder, subpath)

@app.route("/create-account")
def signup():
    data = request.json()
    username = data.get("username")
    email = data.get("email")
    fname = data["fName"]
    lname = data["lName"]
    password = data["password"]
    userType =data.get("userType")
    
    user = User(username= username,
                firstName = fname, 
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
    return jsonify({"user":user.to_json(),'message': 'Account has been created successfully!'}), 201
@app.route("/login")
def login():
    email = request.args.get("email")
    password = request.args.get("password")

    user_by_email = User.query.filter_by(email=email,password=password)
    user_by_username = User.query.filter_by(username = email, password= password)
    user = user_by_email or user_by_username
    
    return (jsonify(user.to_json()), 200) if user else jsonify({"error":"wrong credentials",}),401


@app.route("/chat-service", methods=["POST"])
def ask_model():
    question = request.json
    if not question or "parts" not in question:
        return jsonify({"error":"missing part value"}),400
    return jsonify(model.ask_gemini_text(question.get('parts')))
