# serve.py

from threading import Thread
from flask import Flask, request
from flask_cors import CORS, cross_origin
import json

subscribed = None

# creates a Flask application, named app
app = Flask(__name__)
CORS(app)

@app.route("/", methods=['POST'])
def pushMatrix():
    
    try:
        matrix = json.loads(request.args["matrix"])

        if (subscribed is not None):
            res = subscribed(matrix)
            if (res != None):
                result = str(res)
                return '{"status": "success", "result": ' + result + '}'
            else:
                return '{"status": "internal error", "reason": "The script subscribed, but didn\'t return from the function that subscribed!" }'
        else:
            return '{"status": "internal error", "reason": "The script did not subscribe to the server!"}'
    except ValueError as e:
        print(e)
        return '{"status": "error", "reason": "Please provide a valid matrix"}'

def subscribe(func):
    global subscribed
    subscribed = func

def appRun(port):
    app.run(port=port, debug=False, host="0.0.0.0")


def start(port=5000, sync=False, debug=False):

    print("Preparing to serve on localhost:" + str(port))

    if not debug:
        import logging
        log = logging.getLogger('werkzeug')
        log.setLevel(logging.ERROR)
    
    if (sync):
        thread = Thread(target = (lambda: appRun(port)))
        thread.daemon = True
        thread.start()
    else:
        appRun(port)

    

