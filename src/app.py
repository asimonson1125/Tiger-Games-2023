import flask
import json
import os
try:
    __import__('envs.py')
except ImportError:
    pass
from flask_cors import CORS
from gptInterface import gptDefines, gptCodes

app = flask.Flask(__name__)
CORS(app)
app.config.from_pyfile(os.path.join(os.getcwd(), "config.py"))
openAI_key = app.config.get("chatGPT_API_Key")

termfile = None
try:
    termfile = open("./static/json/balls.json")
except:
    termfile = open("./src/static/json/balls.json")
reviewedTerms = json.load(termfile)['terms']

termlist = []
for i in reviewedTerms:
    termlist.append((i['term']))

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
    return definitions

@app.route('/code')
def getCode():
    term = None
    dat = json.loads(flask.request.data)
    try:
        term = dat['term']
    except:
        return "No term!", 400
    if term == None:
        return "No term!", 400
    code = gptDefines(term)
    
    return json.dumps({"code": code})

@app.route('/combined', methods=['POST'])
def getAll():
    term = None
    dat = json.loads(flask.request.data)
    try:
        term = dat['term']
    except:
        return "No term!", 400
    if term == None:
        return "No term!", 400
    results = combineCards(term)
    return json.dumps(results)

@app.route("/reviewed/<termID>")
def getReviewed(termID):
    try:
        termID = int(termID)
        return json.dumps(reviewedTerms[termID])
    except:
            return "Invalid ID!", 404

def combineCards(term):
    code = gptCodes(term)
    definitions = gptDefines(term)
    results = json.loads(definitions)
    results['code'] = code
    return results
    
@app.route("/terms")
def getTerms():
    return termlist

if __name__ == '__main__':
    app.run()
