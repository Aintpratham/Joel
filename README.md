# 🎂 Joel's Birthday Website

A soft, heartfelt birthday site for your best long-distance friend.

---

## 📁 Folder Structure

```
joel-birthday/
│
├── index.html          ← Main page (all sections)
├── style.css           ← All styles & colours
├── script.js           ← Animations, interactions
│
└── assets/
    ├── images/
    │   ├── photo1.jpg  ← Replace with your actual photos
    │   ├── photo2.jpg
    │   ├── photo3.jpg
    │   ├── photo4.jpg
    │   └── photo5.jpg
    │
    ├── videos/
    │   └── video1.mp4  ← Replace with your actual video
    │
    └── music/
        └── birthday-song.mp3  ← Add any soft mp3 here
```

---

## ✏️ What to Customise

| Where | What to change |
|---|---|
| `index.html` | Text in all sections — look for `<!-- ✏️ -->` comments |
| `assets/images/` | Add your photos named `photo1.jpg` … `photo5.jpg` |
| `assets/videos/` | Add a short video named `video1.mp4` |
| `assets/music/`  | Add a soft `.mp3` named `birthday-song.mp3` |
| `style.css` `:root` | Change colours at the very top |

---

## 🚀 How to Run Locally

1. Open the `joel-birthday/` folder in VS Code (or any editor).
2. Install the **Live Server** extension in VS Code.
3. Right-click `index.html` → **Open with Live Server**.
4. It will open at `http://127.0.0.1:5500/` in your browser.

**OR** simply drag `index.html` into any browser window. Images and music need a server to load properly, so Live Server is recommended.

---

## 🌐 How to Deploy on GitHub Pages (Free!)

1. Create a new **public** repository on GitHub (e.g. `joel-birthday`).
2. Push all files:
   ```bash
   git init
   git add .
   git commit -m "Happy birthday Joel 🎂"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/joel-birthday.git
   git push -u origin main
   ```
3. Go to your repo on GitHub → **Settings** → **Pages**.
4. Under **Source**, choose `main` branch and `/ (root)`.
5. Click **Save**. In ~1 minute, your site will be live at:
   `https://YOUR_USERNAME.github.io/joel-birthday/`

---

## 🎵 Music Tips

- Use a royalty-free soft instrumental (try [pixabay.com/music](https://pixabay.com/music/) or [freemusicarchive.org](https://freemusicarchive.org/)).
- Keep the file under 5MB for fast loading.
- The music button is in the bottom-right corner — Joel controls it.

---

Made with 🤍 — from Canada to Australia.
