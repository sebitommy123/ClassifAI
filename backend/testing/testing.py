import sys
sys.path.insert(0, '..')
import serveUnit

def classify(image):
    return [1, 0]

serveUnit.subscribe(classify)

serveUnit.start(port=5003, debug=False)