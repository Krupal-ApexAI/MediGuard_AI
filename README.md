<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/activity.svg" width="100" alt="MediGuard Logo">
  
  # 🏥 MediGuard AI
  **Next-Generation Intelligent Hospital Management System**

  [![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react)](https://zustand-demo.pmnd.rs/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
  [![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
</div>

---

## 🌟 Overview

**MediGuard AI** is a cutting-edge, ML-powered hospital administration system designed to simplify operations, predict resource shortages, and securely manage different hospital roles dynamically.

Whether you're a doctor checking on a patient's QR-coded bed, an administrator reviewing capacity forecasts, or a staff member managing admissions — MediGuard brings everything you need into one beautiful, reactive dashboard.

---

## 🚀 Key Features

- **🔐 True Multi-Role Sessions (Tab-Isolated)**  
  Log into the Admin dashboard in one tab, and the Doctor dashboard in another. Our architecture completely isolates your sessions using browser `sessionStorage`, so your roles never bleed into each other.
- **🏷️ Smart QR Bed Management**  
  Scan a bed's QR code to instantly admit, discharge, or view detailed patient medical histories right from your device.
- **🤖 Gemini AI & Predictive Analytics**  
  Stay ahead of the curve. MediGuard actively learns your hospital's utilization trends and warns you *before* an Oxygen or ICU bed shortage actually occurs.
- **📊 Real-time Interactive Dashboards**  
  Rich visual charts (powered by Recharts) provide live looks into capacity limits, daily forecasts, and active emergency alerts.
- **🛡️ Multi-Tier Access Control**  
  Strict routing policies specifically tailored for `Admin`, `Doctor`, `Staff`, and `User` (Patient) views.

---

## 🏗️ Architecture Stack

### Backend (`/backend`)
* **Framework:** FastAPI (Python 3.10+) ⚡
* **Database:** SQLite (with SQLAlchemy ORM)
* **Auth:** JWT token-based authentication + Firebase Admin
* **AI & Data:** Google Generative AI, Pandas, Scikit-Learn

### Frontend (`/frontend`)
* **Framework:** React 18 + Vite
* **State Management:** Zustand
* **Styling & UI:** TailwindCSS, Framer Motion, Lucide React
* **Data Visualization:** Recharts, Leaflet (Maps)
* **Utilities:** HTML5-QRCode (for bed scanning)

---

## 📁 Project Structure

```
MediGuard-AI/
├── backend/
│   ├── auth.py
│   ├── database.py
│   ├── main.py
│   ├── ml_model.py
│   ├── models.py
│   ├── train_model.py
│   ├── seed_data.json
│   ├── requirements.txt
│   ├── uploads/
│   └── .env.example
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── services/
│   │   ├── store/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.cjs
│   └── .env.example
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🏁 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/MediGuard-AI.git
cd MediGuard-AI
```

### 2️⃣ Start the Backend

```bash
cd backend

# Create and activate a virtual environment
python -m venv venv

# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
# Copy .env.example to .env and fill in your values
cp .env.example .env

# Run the backend server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend API will be available at `http://localhost:8000`.

### 3️⃣ Start the Frontend

Open a new terminal window:

```bash
cd frontend

# Install Node modules
npm install

# Configure environment variables
# Copy .env.example to .env and fill in your values
cp .env.example .env

# Start the Vite development server
npm run dev
```

The React app will launch at `http://localhost:5173`.

---

## 🔑 Accounts & Testing

To fully experience the platform, try opening multiple tabs and logging into different roles simultaneously.

| Role | Access Level | Key Capabilities |
| :--- | :--- | :--- |
| **Admin** | Full Access | View all hospital analytics, AI forecasts, and system alerts. |
| **Doctor** | High | Deep access to patient records, histories, and related beds. |
| **Staff** | Operational | Handle admissions/discharges via QR codes and manage logistics. |
| **User (Patient)** | Restricted | View personal appointment times and selected hospital data. |

---

## 🧩 Environment Variables

Copy the provided `.env.example` files and fill in your own values before running the project.

**Backend** — see [`backend/.env.example`](backend/.env.example)  
**Frontend** — see [`frontend/.env.example`](frontend/.env.example)

> **Note:** Never commit your actual `.env` files. They are excluded via `.gitignore`.

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for the fork-and-PR workflow and project guidelines.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <b>Built with ❤️ to organize modern healthcare.</b>
</div>
