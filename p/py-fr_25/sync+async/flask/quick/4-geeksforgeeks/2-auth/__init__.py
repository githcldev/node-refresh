from flask import Flask, url_for, render_template, flash, jsonify
from flask import request, abort, redirect, make_response, session
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user
from flask_bcrypt import Bcrypt 

app = Flask(__name__)
# csrf = CSRFProtect(app)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
# app.config['SECRET_KEY'] = ...
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
# app.config["SECRET_KEY"] = "abc"

try:
    db = SQLAlchemy()

    login_manager = LoginManager()
    login_manager.init_app(app)

    class Users(UserMixin, db.Model):
        id = db.Column(db.Integer, primary_key=True)
        username = db.Column(db.String(250), unique=True, nullable=False)
        password = db.Column(db.String(250), nullable=False)

    db.init_app(app)

    with app.app_context():
        db.create_all()

    @login_manager.user_loader
    def loader_user(user_id):
        return Users.query.get(user_id)

except Exception as excep:
    print(2, excep)

bcrypt = Bcrypt(app)
@app.route("/bcp")
def bcp():
    password = 'pass2word2'
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8') 
    is_valid = bcrypt.check_password_hash(hashed_password, password) 
    return render_template('msg.html', msg=f"Password: {password} Hashed Password: {hashed_password}<br>Is Valid: {is_valid}")

@app.route('/register', methods=["GET", "POST"])
def register():
    if request.method == "POST":
        user = Users(username=request.form.get("username"),
                     password=request.form.get("password"))
        db.session.add(user)
        db.session.commit()
        return redirect(url_for("login"))
    return render_template("sign_up.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        user = Users.query.filter_by(
            username=request.form.get("username")).first()
        if user.password == request.form.get("password"):
            login_user(user)
            return redirect(url_for("home"))
    return render_template("login.html")

@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for("home"))

@app.route("/frm", methods=["GET", "POST"]) 
def frm(): 
    return render_template('msg.html', msg="username")

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/msg") 
def msg(): 
    return render_template('msg.html', msg="msg home")

if __name__ == '__main__':
    app.run(debug =True)
