import os
import requests

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

def generate_questions_from_text(chapter_text, mcq=0, fillups=0, oneword=0, short=0, longq=0):
    if not OPENROUTER_API_KEY:
        raise Exception("API key not found in environment variables.")

    prompt = f"""
You are an expert exam question generator trained to identify and create questions that are **most likely to be asked in real exams**, based strictly on the chapter text provided.

🛑 Very Important Instructions:
1. ONLY use the provided content. Do NOT invent or guess.
2. Select questions based on importance, frequency in typical exams, and conceptual value.
3. Follow the question type and count exactly as defined below. Do NOT change the format.
4. Do NOT explain, justify, or summarize anything.
5. Do NOT use any markdown formatting (no *, #, -, etc.)
6. Use plain text only. All output must be clearly numbered and grouped.

🔖 Structure to Follow:
- {mcq} Multiple Choice Questions
- {fillups} Fill in the Blanks
- {oneword} One-word Answer Questions
- {short} Short Answer Questions
- {longq} Long Answer Questions

✍️ Guidelines for Each Question:
- Choose questions that test **core concepts**, **definitions**, **processes**, or **facts** likely to appear in exams.
- Prefer questions that require understanding over rote memory.
- Do NOT repeat similar questions.
- All questions must be clearly written and numbered.

📘 Chapter Text:
\"\"\" 
{chapter_text[:12000]}
\"\"\"
"""


    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "mistralai/mistral-small-3.2-24b-instruct:free",
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ]
    }

    url = "https://openrouter.ai/api/v1/chat/completions"
    response = requests.post(url, headers=headers, json=payload)

    if response.status_code == 200:
        data = response.json()
        return data["choices"][0]["message"]["content"]
    else:
        print("API Error:", response.text)
        raise Exception("LLM API request failed.")
