# 🔐 Password Generator

<img width="1789" alt="password_generator" src="https://github.com/DanayaMel/Password-Generator/assets/15119003/cd95081a-825a-44df-9904-83dd3c6f93f7">

A simple JavaScript utility to generate secure, customizable passwords. This tool lets users define password length and choose whether to include lowercase letters, uppercase letters, numbers, and special characters.

---

## ✨ Features

- Customizable password length
- Toggle character types (lowercase, uppercase, numbers, symbols)
- Simple API, easily pluggable into web apps
- Ensures random and secure output

---

## 📁 File Structure

```
TODO
```

---

## 🧠 Usage

```js
import generatePassword from './utils/passwordHelper';

const options = {
  length: 12,
  useLowercase: true,
  useUppercase: true,
  useNumbers: true,
  useSymbols: false,
};

const password = generatePassword(options);
console.log(password); // Example: "fG7d2Jkq9Lpm"
```

---

## 🔧 Development

1. Clone the repo:
   ```bash
   git clone https://github.com/DanayaMel/Password-Generator.git
   ```

2. Open the project folder:
   ```bash
   cd Password-Generator
   ```

3. Explore the `src/utils/passwordHelper.js` file.

---

## 🧾 License

MIT

---

## 🙋‍♀️ Author

**Danaya Melendez**  
[github.com/DanayaMel](https://github.com/DanayaMel)
