import flask


# TODO: figure out flask setup
app = flask.Flask(__name__)
app.config.from_object(Config)
return app