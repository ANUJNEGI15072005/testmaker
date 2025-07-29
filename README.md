
# 🧠 TestMaker

AI-powered Test Paper Generator – Your AI Co-Teacher for Test Papers.

## 📌 Overview

**TestMaker** is a smart web application that allows users to generate customized test papers by simply uploading a chapter-based **text PDF**. The app extracts questions and organizes them into categories like:

- Multiple Choice Questions (MCQs)
- Fill in the Blanks
- One Word Answers
- Short Questions
- Long Questions

> ❗ Note: Currently supports **only text-based PDFs** (not scanned/image PDFs).

---

## 🛠 Tech Stack

**Frontend**: React, Tailwind CSS  
**Backend**: Python, Flask, pdfminer/PyMuPDF, Flask-CORS

---

## 🚀 Features

- 📄 Upload chapter PDFs (text-based)
- 🤖 AI-powered question classification
- 📝 Supports various question types
- 📥 Download test paper instantly
- 📱 Fully responsive and mobile-friendly
- 🔒 Secure file handling

---

## 💻 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/ANUJNEGI15072005/testmaker
cd testmaker

cd client
npm install
npm run dev

cd server
pip install -r requirements.txt
python main.py
