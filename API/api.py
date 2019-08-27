import urllib2
import json
import os
import pickle
from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)
api = Api(app)

parser = reqparse.RequestParser()

class getCurr(Resource):
    def __call_api():
        request = urllib2.Request('https://api.exchangeratesapi.io/latest?')
        response = urllib2.urlopen(request)
        return json.loads(response.read())
api.add_resource(getCurr, "/getCurr")

if __name__ == "__main__":
  app.run(debug=True)



