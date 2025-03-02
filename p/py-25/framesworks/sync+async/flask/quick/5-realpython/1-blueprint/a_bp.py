from flask import Blueprint

a_bp = Blueprint('a_bp', __name__)

@a_bp.route('/str/<name>')
def hello_name(name):
   return 'Hello %s  %d  %f' % (name, 1, 33.33)

@a_bp.route('/int/<int:postID>')
def show_blog(postID):
   return 'Blog Number %d' % postID

@a_bp.route('/flt/<float:revNo>')
def revision(revNo):
   return 'Revision Number %f' % revNo

@a_bp.route('/')
def index():
    return "This is an example from a_bp"