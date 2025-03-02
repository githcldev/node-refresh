# https://stackoverflow.com/questions/65366164/how-do-i-stream-large-videos-in-flask
from flask import Flask, render_template, Response, request
import cv2, os, re
app = Flask(__name__)

def gen_frames():
    filename = './static_assets/mp4.mp4'
    vidObj = cv2.VideoCapture(filename)
    # Used as counter variable 
    count = 0
    # checks whether frames were extracted 
    success = 1
    while success: 
        # vidObj object calls read 
        # function extract frames 
        success, buffer = vidObj.read() 
        # Saves the frames with frame-count 
        # cv2.imwrite("frame%d.jpg" % count, image) 
        count += 1
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + buffer + b'\r\n')
        # yield (b'--frame\r\n'
        #     b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # concat frame one by one and show result


@app.route('/vid')
def get_file():
    return Response(gen_frames(), status=200, mimetype='multipart/x-mixed-replace; boundary=frame')

@app.after_request
def after_request(response):
    response.headers.add('Accept-Ranges', 'bytes')
    return response

@app.route('/')
def index():
    return render_template('index.html')

# https://stackoverflow.com/questions/65366164/how-do-i-stream-large-videos-in-flask
