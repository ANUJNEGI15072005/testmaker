from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import simpleSplit

def create_test_pdf(questions_text, output_path):
    c = canvas.Canvas(output_path, pagesize=A4)
    width, height = A4
    margin = 50
    y = height - margin
    max_width = width - 2 * margin
    line_height = 14

    # Wrap the text based on the width of the page
    lines = simpleSplit(questions_text, 'Helvetica', 12, max_width)

    for line in lines:
        if y < margin:
            c.showPage()
            y = height - margin
        c.drawString(margin, y, line)
        y -= line_height

    c.save()