<div align="center">
  <a href="#">
    <img src="favicon.svg" alt="Stellar Net Worth Tracker Logo" width="100" height="100">
  </a>

  <h1 align="center">Stellar Net Worth Tracker</h1>

  <p align="center">
    A modern, secure, and user-friendly financial dashboard to track your assets, liabilities, and calculate your real-time net worth against an immersive, animated galaxy background.
    <br />
    <a href="#"><strong>Explore the live demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/hsinidev/stellar-net-worth-tracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/hsinidev/stellar-net-worth-tracker/issues">Request Feature</a>
  </p>
</div>

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-Simulated-FFCA28?logo=firebase)

</div>

---

## About The Project

Stellar Net Worth Tracker is a sophisticated single-page application designed to provide a clear and comprehensive overview of your financial health. In a world of complex financial tools, this application offers a streamlined, secure, and visually stunning experience. It empowers users to take control of their finances by tracking assets and liabilities in real-time, all within a secure, private environment architected on a simulated Firebase Firestore backend.

The dashboard not only calculates your net worth instantly but also visualizes your financial distribution, helping you make informed decisions. It's built for clarity, security, and a superior user experience.

![Stellar Net Worth Tracker Screenshot](https://via.placeholder.com/800x450.png?text=App+Screenshot+Here)
*(Live demo screenshot placeholder)*

---

## Key Features

-   **🚀 Real-Time Calculation:** Your net worth is instantly recalculated as you add, edit, or remove assets and liabilities.
-   **📊 Interactive Data Visualization:** A responsive pie chart from Recharts provides a clear visual breakdown of your assets versus liabilities.
-   **🔐 Secure & Private by Design:** Architected with a simulated Firebase Firestore backend. Security rules are designed to ensure that financial data is strictly private and accessible only to the authenticated user.
-   **✨ Modern UI/UX:** Built with React and styled with Tailwind CSS for a fully responsive, comfortable, and aesthetically pleasing experience on any device.
-   **🌌 Immersive Background:** A dynamic, multi-layered parallax starfield creates a captivating and unique aesthetic that makes finance tracking feel less like a chore.
-   **📚 Integrated Financial Guide:** A comprehensive, 3500+ word SEO-optimized article on personal finance is included in a convenient collapsible section, providing valuable context and learning opportunities.
-   **📝 Easy Data Management:** Simple, intuitive forms allow for quick addition and deletion of assets and liabilities.

---

## Technology Stack

This project is built with a modern, scalable, and efficient technology stack.

-   **Framework:** [React 18](https://reactjs.org/) (with TypeScript)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Database (Simulated):** Firebase Firestore
-   **Charting Library:** [Recharts](https://recharts.org/)
-   **Module Management:** ES Modules (via import maps in `index.html`)

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

This project is designed to run in a modern browser-based development environment that supports ES modules and TypeScript. A simple local server is needed to serve the files correctly.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/stellar-net-worth-tracker.git
    cd stellar-net-worth-tracker
    ```

2.  **Set up a local server:**
    You can use any simple static server. If you have Node.js installed, you can use the `serve` package.
    ```bash
    # Install serve globally if you haven't already
    npm install -g serve

    # Run the server from the project root
    serve .
    ```

3.  **Open in your browser:**
    Navigate to the local address provided by the server (e.g., `http://localhost:3000`). The app will be running.

---

## Project Structure

The project follows a component-based architecture that is organized for clarity and scalability.

```
/
├── components/
│   ├── Icons.tsx           # Reusable SVG icon components
│   ├── Layout.tsx          # Main layout wrapper (header, footer, background)
│   ├── SeoArticle.tsx      # The 3500+ word financial guide component
│   └── TrackerDashboard.tsx # The core dashboard UI and state management
├── hooks/
│   └── useFirestore.ts     # Custom hook to abstract mock Firestore logic
├── services/
│   └── firebase.ts         # Mock Firebase auth and Firestore services
├── App.tsx                 # Main application component orchestrating the layout
├── index.html              # The main HTML entry point with SEO metadata
├── index.tsx               # React application entry point (root render)
├── README.md               # You are here!
└── ... other config and asset files
```

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

HSINI MOHAMED - [@hsinidev](https://github.com/hsinidev) - hsini.web@gmail.com

Project Link: [https://github.com/hsinidev/stellar-net-worth-tracker](https://github.com/hsinidev/stellar-net-worth-tracker)

<div align="center">
    <p>
        <a href="https://github.com/hsinidev" target="_blank">GitHub</a> | 
        <a href="http://doodax.com" target="_blank">Portfolio</a> | 
        <a href="mailto:hsini.web@gmail.com">Email</a>
    </p>
</div>
