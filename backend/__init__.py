import flask


app = flask.Flask(__name__)
app.config.from_object('backend.config')

import backend.transcribe