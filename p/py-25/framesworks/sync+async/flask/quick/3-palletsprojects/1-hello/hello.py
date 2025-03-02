from markupsafe import escape
from flask import Flask, url_for, request
app = Flask(__name__) 

@app.get('/product')
def product_get():
    return 'show product'

@app.post('/product')
def product_post():
    return 'add new product'

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return 'do the login'
        return do_the_login()
    else:
        return 'show login form'
        return show_the_login_form()

@app.route('/')
def index():
    return 'Pallet projects hello /'

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return f'User {escape(username)}'

@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return f'Post {post_id}'

@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    # show the subpath after /path/
    return f'Subpath {escape(subpath)}'

@app.route('/projects/')
def projects():
    return 'The project page'

@app.route('/about')
def about():
    return 'The about page'

with app.test_request_context():
    print(url_for('index'))
    print(url_for('about'))
    print(url_for('projects', next='/'))
    print(url_for('show_user_profile', username='John Doe'))

if __name__ == '__main__':
    app.run(debug =True)

# set FLASK_APP=hello.py
# Externally vissible host for all network
# flask run --host=0.0.0.0 --port=80

