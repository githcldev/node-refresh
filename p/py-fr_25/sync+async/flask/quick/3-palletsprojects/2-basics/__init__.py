
from flask import Flask, url_for, render_template, flash 
from flask import request, abort, redirect, make_response
from flask import session

app = Flask(__name__) 
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

app.logger.debug('A value for debugging')
app.logger.warning('A warning occurred (%d apples)', 42)
app.logger.error('An error occurred')

@app.route("/plain")
def plain():
    return """
        <h1>Plain text</h1>
    """

@app.route("/j1")
def j1():
    return {
        "username": "username",
        "theme": "theme",
        "image": "image",
    }

@app.route('/err1')
def err1():
    abort(401)
    print('this_is_never_executed()')

@app.route('/err2')
def err2():
    abort(404)
    print('this_is_never_executed()')

@app.route('/401')
def err401():
    return redirect(url_for('err1'))

@app.route('/404')
def err404():
    return redirect(url_for('err2'))

@app.errorhandler(401)
def page_not_found(error):
    return render_template('msg.html', msg="401 server_down"), 401

@app.errorhandler(404)
def server_down(error):
    return render_template('msg.html', msg="404 page_not_found"), 404

@app.route('/srem')
def srem():
    session.pop('username', None)
    return render_template('msg.html', msg='Session var removed')

@app.route('/sset')
def sset():
    session['username'] = 'asdf'
    return render_template('msg.html', msg='Session var set')

@app.route('/sget')
def sget():
    username = 'not-found'
    if 'username' in session:
        username = session["username"]
    print(username)
    return render_template('msg.html', msg=f'Session var get : {username}')

@app.route('/cset')
def cset():
    resp = make_response(render_template('msg.html', msg=None))
    resp.set_cookie('username', 'asdf')
    return resp

@app.route('/cget')
def cget():
    username = request.cookies.get('username')  # 
    print(username)
    return render_template('msg.html', msg=username)

@app.route('/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['f1']
        f.save('./uploaded_file.txt')
        return render_template('msg.html', msg='Success file write')
    else:
        return render_template('msg.html', msg='Post method dt not found')

@app.route('/urlparams')
def urlparams():
    a = request.args.get('a')
    b = request.args.get('b')
    searchword = a + b
    return render_template('msg.html', msg=searchword)

@app.route('/login', methods=['POST', 'GET'])
def login():
    msg = None
    if request.method == 'POST':
        if (request.form.get('us') is not None) & (request.form.get('ps') is not None):
            msg = request.form['us'] + " " + request.form['ps']
        else:
            msg = 'Invalid us/ps'
    else:
        msg = 'Not a post request'
    return render_template('msg.html', msg=msg)

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    style = url_for('static', filename='style.css')
    return render_template('hello.html', person=name, style=style)

@app.route('/tf1/<msg>')
def tf1(msg=None):
    print(msg, end="_?__")
    flash(msg, category='tf1')
    return render_template('tf1.html', name='test')

if __name__ == '__main__':
    app.run(debug =True)
