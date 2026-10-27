# Contributing to PranaVital E-Commerce

Thank you for your interest in contributing to PranaVital! We are committed to fostering an inclusive, welcoming, and high-quality open-source ecosystem.

---

## 🛠️ Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yadavaniket2212-crypto/pranavital-ecommerce.git
   cd pranavital-ecommerce
   ```

2. **Run Local Server:**
   - **Using PowerShell (Windows Native, Zero Install):**
     ```powershell
     powershell -ExecutionPolicy Bypass -File .\server.ps1
     ```
   - **Using Node.js (Optional):**
     ```bash
     npx serve .
     ```
   - **Using Python (Optional):**
     ```bash
     python -m http.server 8080
     ```

3. Open `http://localhost:8080/` in your browser.

---

## 🌿 Contribution Workflow

1. **Fork** the repository to your own GitHub account.
2. Create a topic branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Implement your changes adhering to:
   - Consistent semantic class naming and Tailwind utilities.
   - Clean, documented JavaScript functions.
   - Preserving accessibility and responsive viewport scaling.
4. Test and verify all flows:
   - Product Catalog filtering & live search.
   - 60-Second Diagnostic Quiz.
   - Cart Drawer calculation, coupon application, and local storage persistence.
   - Checkout simulation modal.
5. Commit your changes with descriptive messages:
   ```bash
   git commit -m "feat(cart): add bulk coupon validation support"
   ```
6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. Open a **Pull Request** against the `main` branch with the provided PR template.

---

## 🎨 Code Style Guidelines

- **HTML**: Semantic tags (`<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`), descriptive `aria-label` attributes.
- **CSS**: Stick to Tailwind CSS utility conventions where possible. Custom theme variables belong in `styles.css`.
- **JavaScript**: Modular, descriptive function signatures, vanilla JavaScript with zero heavy runtime overhead.

