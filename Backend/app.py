from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from api_loader import DB_uri

app = Flask(__name__, static_folder="../Frontend/react/build")

app.config['SQLALCHEMY_DATABASE_URI'] = DB_uri 


db = SQLAlchemy(app)
CORS(app)

import routes

with app.app_context():
    db.create_all()