from app import db
from sqlalchemy.dialects.postgresql import JSONB
import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    first_name = db.Column(db.String(50),nullable=False)
    last_name = db.Column(db.String(50), nullable=True)
    password = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_type= db.Column(db.String(30), nullable=False)

    def to_json(self):
        return {
            "id":self.id,
            "username":self.username,
            "fName":self.first_name,
            "lName": self.last_name,
            "email":self.email,
            "userType":self.user_type,
        }    

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    content = db.Column(db.String(200), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.datetime.now())

    def to_json(self):
        return self.content