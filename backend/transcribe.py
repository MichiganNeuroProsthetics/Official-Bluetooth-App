import os
import tempfile
import flask
from flask import request, jsonify
from flask_cors import CORS
import whisper
import json

app = flask.Flask(__name__)
CORS(app)

# endpoint for handling the transcribing of audio inputs
@app.route('/')
def show_index():
    print("hello world")
    return "hello world"

@app.route('/hello/')
def hello():
    hello = {
        "message": "hello world"
    }
    return json.dumps(hello)

@app.route('/transcribe/', methods=['POST'])
def transcribe():
    print("inside transcribe endpoint")
    if request.method == 'POST':
        # language = request.form['language']
        # model = request.form['model_size']

        # # there are no english models for large
        # if model != 'large' and language == 'english':
        #     model = model + '.en'
        # audio_model = whisper.load_model(model)
        print("setting model")
        model = whisper.load_model("base")

        print("making temporary dir")
        temp_dir = tempfile.mkdtemp()
        save_path = os.path.join(temp_dir, 'temp.wav')

        print("getting wav file")
        wav_file = request.files['audio']
        wav_file.save(save_path)

        print("transcribing")
        # if language == 'english':
        result = model.transcribe(save_path, language='english')
        # else:
        #     result = audio_model.transcribe(save_path)
        print(result['text'])
        output = {
            "transcription": result['text']
        }
        return jsonify(output) # TODO: fix this to be more useful
    else:
        return "This endpoint only processes POST wav blob"
    
if __name__ == "__main__":
    app.run(debug=True)