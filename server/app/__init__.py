from flask import Flask
from flask_cors import CORS
import os

def create_app():
    app = Flask(__name__)

    os.makedirs("uploads", exist_ok=True)
    os.makedirs("generated", exist_ok=True)

    # Correct way to enable CORS
    CORS(app, resources={r"/*": {"origins": ["https://testmakerai.vercel.app"]}})

    # Register routes
    from .routes import api
    app.register_blueprint(api)

    return app
