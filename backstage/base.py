# charset utf-8

from flask import Flask,request,Response,url_for, jsonify
import os
from flask_cors import *
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app,supports_credentials=True)

DIRECTORY = os.getcwd()

HOST = 'http://192.168.45.121:5000'

@app.route('/')
def index():
    return 'Hello!'

@app.route('/upload',methods=['GET','POST'])
def upload_file():
    if request.method=='POST':
        f = request.files.getlist('file[]')
        print(f)
        url = []
        for file in f:
            file.save('./static/files/'+file.filename)
            url.append(HOST+url_for(r"static",filename='files/'+file.filename))
        response = {}
        response['url'] = url
        response['status_code'] = 200
        response['status'] = 'success'

        return jsonify(response)


if __name__ == '__main__':
    app.run(host="0.0.0.0",debug=True)