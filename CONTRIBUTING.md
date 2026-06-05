# Contributing to MediGuard AI

Thank you for your interest in contributing! Follow this guide to get started.

## Workflow

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/MediGuard-AI.git
   cd MediGuard-AI
   ```
3. **Create a branch** for your change:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes.** Follow the existing code style and conventions.
5. **Commit** with a clear, descriptive message:
   ```bash
   git commit -m "feat: add patient export to CSV"
   ```
6. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request** against the `main` branch of this repository. Describe what you changed and why.

## Guidelines

- Keep pull requests focused — one feature or fix per PR.
- Write clear commit messages. Use [Conventional Commits](https://www.conventionalcommits.org/) where possible.
- Ensure the backend server and frontend dev server both start without errors before submitting.
- Do not commit `.env` files, database files, or `node_modules/`.

## Reporting Issues

Open a GitHub Issue with a clear title and description. Include steps to reproduce, expected behavior, and actual behavior.

## Code of Conduct

Be respectful and constructive. Harassment or discriminatory behavior will not be tolerated.
