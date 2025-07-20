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
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Save uploaded PDF
    filename = secure_filename(file.filename)
    unique_id = str(uuid.uuid4())
    saved_path = os.path.join(UPLOAD_FOLDER, unique_id + "_" + filename)
    file.save(saved_path)

    # Get question parameters
    mcq = int(request.form.get("mcq") or 0)
    fillups = int(request.form.get("fillups") or 0)
    oneword = int(request.form.get("oneword") or 0)
    short = int(request.form.get("short") or 0)
    longq = int(request.form.get("longq") or 0)

    print("Received inputs:")
    print("MCQ:", mcq)
    print("Fillups:", fillups)
    print("One-word:", oneword)
    print("Short:", short)
    print("Long:", longq)

    # Extract text from PDF
    chapter_text = extract_text_from_pdf(saved_path)

    # Generate questions using LLM API
    questions = generate_questions_from_text(
    chapter_text,
    mcq=mcq,
    fillups=fillups,
    oneword=oneword,
    short=short,
    longq=longq
)


    # Generate PDF
    test_pdf_name = f"test_{unique_id}.pdf"
    test_pdf_path = os.path.join(GENERATED_FOLDER, test_pdf_name)
    create_test_pdf(questions, test_pdf_path)

    return jsonify({
        "message": "Test paper generated successfully.",
        "download_url": f"/download/{test_pdf_name}"
    })

@api.route("/download/<filename>", methods=["GET"])
def download_file(filename):
    print("Attempting to send:", os.path.join(GENERATED_FOLDER, filename))
    return send_from_directory(GENERATED_FOLDER, filename, as_attachment=True)