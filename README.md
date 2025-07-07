# 🔐 Password Generator

<img width="1789" alt="password_generator" src="https://github.com/DanayaMel/Password-Generator/assets/15119003/cd95081a-825a-44df-9904-83dd3c6f93f7">

A clean, frontend-only password generator inspired by 1Password. This app lets users generate secure, customizable passwords directly in the browser — no backend or dependencies required.

---

## ✨ Features

- ✅ Fully in-browser (static HTML + JavaScript)
- 🔢 Customizable password length
- 🔤 Toggle character types:
  - Lowercase
  - Uppercase
  - Numbers
  - Symbols
- 📋 Copy-to-clipboard support
- 🎯 Focused, minimalist UI

---

## 📁 File Structure

```
Password-Generator
¦   package.json
¦   README.md
¦   
+---public
¦       index.html
¦       
+---src
    ¦   index.css
    ¦   index.js
    ¦   
    +---components
    ¦   +---App
    ¦   ¦       App.css
    ¦   ¦       App.js
    ¦   ¦       App.test.js
    ¦   ¦       
    ¦   +---Heading
    ¦   ¦       Heading.css
    ¦   ¦       Heading.js
    ¦   ¦       Heading.test.js
    ¦   ¦       
    ¦   +---Password
    ¦   ¦       Password.css
    ¦   ¦       Password.js
    ¦   ¦       Password.test.js
    ¦   ¦       
    ¦   +---PasswordGeneratorOptions
    ¦           PasswordGeneratorOptions.css
    ¦           PasswordGeneratorOptions.js
    ¦           PasswordGeneratorOptions.test.js
    ¦           
    +---fonts
    ¦       averta-op-bold-v1.woff2
    ¦       courier-prime-bits-v1.woff2
    ¦       
    +---utils
            passwordHelper.js
            passwordHelper.test.js
```

---

## 🚀 Getting Started

### 🔧 Option 1: Run Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/DanayaMel/Password-Generator.git
   cd Password-Generator
   ```

2. Run the server:
   `npm start`

---

## 📸 UI Overview

- Text field displays generated password
- Buttons to toggle password options (length, character types)
- “Generate” button instantly creates a password
- (Optional) Copy button to copy the result to clipboard

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Danaya Melendez**
[github.com/DanayaMel](https://github.com/DanayaMel)
