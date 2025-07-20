import os
import uuid
from flask import Blueprint, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename

from .pdf_reader import extract_text_from_pdf
from .test_generator import generate_questions_from_text
from .pdf_writer import create_test_pdf

api = Blueprint("api", __name__)

UPLOAD_FOLDER = "uploads"
GENERATED_FOLDER = os.path.join(os.getcwd(), "generated")

@api.route("/upload", methods=["POST"])
def upload_and_generate():
    try:
        os.makedirs(UPLOAD_FOLDER, exist_ok=True)
        os.makedirs(GENERATED_FOLDER, exist_ok=True)

        if 'file' not in request.files:
            return jsonify({"error": "No file part"}), 400

        file = request.files['file']
        if file.filename == '':
            return jsonify({"error": "No selected file"}), 400

        # Save the uploaded file
        unique_id = str(uuid.uuid4())
        filename = secure_filename(file.filename)
        saved_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_{filename}")
        file.save(saved_path)

        # Extract question counts from form
        mcq = int(request.form.get('mcq', 0))
        fillups = int(request.form.get('fillups', 0))
        oneword = int(request.form.get('oneword', 0))
        short = int(request.form.get('short', 0))
        longq = int(request.form.get('longq', 0))

        # Extract text from the uploaded PDF
        text = extract_text_from_pdf(saved_path)

        # Generate questions
        questions = generate_questions_from_text(text, mcq, fillups, oneword, short, longq)

        # Create PDF
        test_pdf_name = f"test_{unique_id}.pdf"
        test_pdf_path = os.path.join(GENERATED_FOLDER, test_pdf_name)
        create_test_pdf(questions, test_pdf_path)

        return jsonify({
            "message": "Test paper generated successfully.",
            "download_url": f"/download/{test_pdf_name}"
        })

    except Exception as e:
        print("Exception:", str(e))
        return jsonify({"error": str(e)}), 500

@api.route("/download/<filename>", methods=["GET"])
def download_file(filename):
    return send_from_directory(GENERATED_FOLDER, filename, as_attachment=True)
