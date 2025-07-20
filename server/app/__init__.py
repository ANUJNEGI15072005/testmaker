from flask import Flask
from flask_cors import CORS
import os

def create_app():
    app = Flask(__name__)

    # Create folders if they don't exist
    os.makedirs("uploads", exist_ok=True)
    os.makedirs("generated", exist_ok=True)

    # Enable CORS for frontend running on Vite (port 5173)
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

    # Register routes
    from .routes import api
    app.register_blueprint(api)

    return app