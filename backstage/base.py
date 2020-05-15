from flask import Flask,request
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello!'

@app.route('/upload',methods=['GET','POST'])
def upload_file():
    if request.method=='POST':
        f = request.files['file']
        f.save('./files/'+secure_filename(f.filename))

