from flask import Flask, url_for, render_template, flash, jsonify
from flask import request, abort, redirect, make_response, session

from flask_wtf import CSRFProtect, FlaskForm 
from wtforms import StringField, validators, PasswordField, SubmitField 
from wtforms.validators import DataRequired, Email 
import email_validator

app = Flask(__name__)
# csrf = CSRFProtect(app)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
# app.config['SECRET_KEY'] = ...

class contactForm(FlaskForm): 
    name = StringField(label='Name', validators=[DataRequired()]) 
    email = StringField(label='Email', validators=[ 
        DataRequired()]) 
    message= StringField(label='Message') 
    submit = SubmitField(label="Log In")

@app.route("/frm", methods=["GET", "POST"]) 
def frm(): 
    cform=contactForm()
    if cform.validate_on_submit():
        print("Name:{0}, E-mail:{1}, message:{2}"
              .format(cform.name.data, cform.email.data, cform.message.data))
    return render_template("form.html",form=cform)

@app.route('/upm', methods=['GET', 'POST'])
def upload_multiple(): 
    if request.method == 'POST': 
        # Get the list of files from webpage 
        files = request.files.getlist("file")
        if files[0].filename == '':
            return render_template('multiFileUploader.html')
        # Iterate for each file in the files List, and Save them 
        for file in files: 
            file.save(file.filename) 
        return "<h1>Files Uploaded Successfully.!</h1>"
    else:
        return render_template('multiFileUploader.html')

@app.route("/vid") 
def serve_video(): 
    return render_template('vid.html')

@app.route("/img/<string:name>") 
def serve_image(name): 
    return render_template('img.html', imgName=name)

@app.route("/csf")
def csf():
    return render_template('csrfForm.html')

@app.route("/protected_form", methods=['GET', 'POST'])
def protected_form():
    if request.method == 'POST':
        name = request.form['Name']
        return (' Hello ' + name + '!!!')
    return render_template('csrfForm.html')

@app.route("/unprotected_form", methods=['GET', 'POST'])
def unprotected_form():
    if request.method == 'POST':
        name = request.form['Name']
        return (' Hello ' + name + '!!!')
    return render_template('csrfForm.html')

@app.route('/j2')
def j2():
    return jsonify({"message": "Hello, JSON!"})

@app.route('/j1')
def j1():
    return jsonify([1, 2, 3])

@app.route('/end')
def end():
    print(request.args)
    return 'end'

def gfg():
   print(request.args)
   return 'geeksforgeeks'

app.add_url_rule('/', 'index', gfg)

if __name__ == '__main__':
    app.run(debug =True)
