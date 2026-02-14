# Etch-a-Sketch
building a browser version of something between a sketchpad and an Etch-A-Sketch

Below is a professional, GitHub-ready `README.md` you can copy directly into your repository.

---

# 🎨 Etch-a-Sketch (Flexbox Version)

A browser-based sketch pad built with **HTML, CSS (Flexbox), and JavaScript**.
This project dynamically generates a grid of square divs and allows users to draw by hovering over them — just like a pixel-based Etch-a-Sketch.

---

## 🚀 Live Features

* ✅ Default **16 × 16 grid**
* ✅ Grid generated dynamically with **JavaScript**
* ✅ Built using **Flexbox** (not CSS Grid)
* ✅ Hover drawing effect
* ✅ Random RGB colors on first interaction
* ✅ Progressive 10% darkening per hover
* ✅ Fully black after 10 interactions
* ✅ Grid resize button (up to 100 × 100)
* ✅ Fixed total drawing area (960px × 960px)
* ✅ Input validation to prevent performance issues


## 🧠 Project Objective

This project focuses on strengthening:

* DOM manipulation
* Event listeners
* Flexbox layout control
* Dynamic element creation
* User input handling
* Data attributes (`dataset`)
* Progressive styling effects
* Performance considerations


## 🛠 Technologies Used

* **HTML5**
* **CSS3 (Flexbox)**
* **Vanilla JavaScript**

No frameworks or external libraries were used.


## 📂 Project Structure

```
etch-a-sketch/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

### Grid Creation

* JavaScript generates `size × size` square divs.
* Each square’s dimensions are calculated dynamically:

```
960px ÷ grid size
```

* Flexbox wraps the squares into rows automatically.


### Hover Drawing Logic

Each square listens for the `mouseenter` event:

* First hover → assigns a random RGB color.
* Each additional hover:

  * Darkens the square by 10%
  * Uses `filter: brightness()`
  * Fully dark after 10 interactions.

---

### Resize Feature

A button prompts the user for a new grid size.

Rules:

* Maximum value: **100**
* Grid clears before regenerating
* Total canvas size remains 960px

This ensures:

* Consistent layout
* Controlled memory usage
* Prevents browser lag or crashes

---

## 🖥 How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/myorex/Etch-a-Sketch.git
```

2. Open `index.html` in your browser.

No build tools required.


## 📌 Future Improvements (Optional Enhancements)

* 🎨 Color picker tool
* 🧽 Eraser mode
* 🌈 Rainbow toggle mode
* 🔄 Clear/reset button
* 📱 Responsive layout
* 🌍 Deploy to GitHub Pages


## 📈 Learning Outcome

This project reinforces fundamental front-end development concepts and prepares for:

* Advanced layout systems (CSS Grid)
* Component-based frameworks (React, Vue)
* Interactive UI development


## 📝 Author

Developed as part of foundational JavaScript practice and DOM manipulation training.


