from flask import Flask
app = Flask(__name__) 

@app.route("/")
def home():
    return "Medium 1 => index route /!"


if __name__ == '__main__':
    app.run(debug =True)