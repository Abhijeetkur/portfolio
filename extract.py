import fitz

doc = fitz.open("Abhijeet__Cv_.pdf")
text = ""
for page in doc:
    text += page.get_text("text", sort=True)

with open("resume.txt", "w", encoding="utf-8") as f:
    f.write(text)
