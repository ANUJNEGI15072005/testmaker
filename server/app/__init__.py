from flask import Flask
from flask_cors import CORS
import os


def create_app():
    app = Flask(__name__)

    os.makedirs("uploads", exist_ok=True)
    os.makedirs("generated", exist_ok=True)

    CORS(
        app,
        origins=[
            "http://localhost:5173",
            "http://192.168.29.54:5173",
            "https://testmakerai.vercel.app"
        ],
        supports_credentials=True
    )

    from .routes import api
    app.register_blueprint(api)

    return app
