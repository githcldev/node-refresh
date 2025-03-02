from flask import Flask, url_for, render_template, flash, jsonify
from flask import request, abort, redirect, make_response, session

from .a_bp import a_bp
from .api_bp import api_bp
from .b_bp import b_bp
from .helper import one


app = Flask(__name__)
# csrf = CSRFProtect(app)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
# app.config['SECRET_KEY'] = ...

app.register_blueprint(a_bp)
app.register_blueprint(api_bp, url_prefix='/api')
app.register_blueprint(b_bp.b_bp, url_prefix='/b')

print(one())


if __name__ == '__main__':
    app.run(debug =True)
