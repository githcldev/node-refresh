from flask import Flask, render_template, request
from flask_socketio import SocketIO, Namespace, send, emit, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

# socketio.on_event('message', lambda data : print('received message: ' + data))
        # OR
@socketio.on('message')
def handle_message(data):
    print('received message: ' + data)

@socketio.on('json')
def handle_json(json):
    print('received json: ' + str(json))

@socketio.on('my event')
def handle_my_custom_event(json):
    print('received my event json: ' + str(json))

@socketio.on('my event', namespace='/test')
def handle_my_custom_namespace_event(json):
    print('received my event json for ns test: ' + str(json))

@socketio.on('connect')
def test_connect(auth):
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

@socketio.on_error_default
def default_error_handler(e):
    print(request.event["message"]) # "my error event"
    print(request.event["args"])    # (data,

@socketio.on('join')
def on_join(data):
    username = data['username']
    room = data['room']
    join_room(room)
    send(username + ' has entered the room.', to=room)

@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)
    send(username + ' has left the room.', to=room)

@app.route('/s1')
def s1():
    return render_template('s1.html', msg="flask socketio -> 1 -> s1 page")

@app.route('/')
def index():
    return render_template('msg.html', msg="flask socketio -> 1 -> index page")

if __name__ == '__main__':
    socketio.run(app)