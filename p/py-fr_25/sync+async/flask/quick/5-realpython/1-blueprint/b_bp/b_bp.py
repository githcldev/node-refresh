from flask import Blueprint

b_bp = Blueprint('b_bp', __name__)

@b_bp.route('/')
def index():
    return "This is an example from b_bp"