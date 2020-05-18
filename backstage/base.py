from flask import Flask,request,Response,url_for, jsonify
import os
from flask_cors import *
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app,supports_credentials=True)

DIRECTORY = os.getcwd()

HOST = 'http://localhost:5000'

@app.route('/')
def index():
    return 'Hello!'

@app.route('/upload',methods=['GET','POST'])
def upload_file():
    if request.method=='POST':
        print(request.files)
        f = request.files.getlist('file[]')
        for file in f:
            file.save('./static/files/'+f.filename)
        response = {}
        response['url'] = HOST+url_for(r"static",filename='files/'+f.filename)
        response['status_code'] = 200
        response['status'] = 'success'

        return jsonify(response)