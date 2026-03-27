import fitz

doc = fitz.open("Abhijeet_CV____.pdf")
text = ""
for page in doc:
    text += page.get_text("text", sort=True)

with open("resume2.txt", "w", encoding="utf-8") as f:
    f.write(text)
