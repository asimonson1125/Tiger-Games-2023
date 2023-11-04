import flask
import json
from gptInterface import gptDefines

app = flask.Flask(__name__)

@app.route('/')
def home():
    return flask.render_template('index.html')

@app.route('/define', methods=["POST"])
def getDefinitions():
    term = None
    dat = json.loads(flask.request.data)
    try:
        term = dat['term']
    except:
        return "No term!", 400
    if term == None:
        return "No term!", 400
    definitions = gptDefines(term)
    print(definitions)
    return definitions

if __name__ == '__main__':
    app.run()