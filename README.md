# Finance Tracker & Analytics Dashboard

A responsive financial management dashboard developed to demonstrate frontend engineering skills, component-based architecture, state management, data visualization, and user experience optimization.

**Technology Stack**

React.js | Vite | JavaScript | Tailwind CSS | Vercel

---

## Project Overview

The Finance Tracker is a web application designed to organize financial transactions and visualize financial information through an interactive dashboard.

The application demonstrates modern frontend development practices, reusable components, responsive layouts, and centralized state management.

**Note:** This project was developed for assignment and demonstration purposes. Some financial data is static.

---

## Live Demo

**[Finance Tracker & Analytics](https://bit.ly/Finance-Tracker_SubramanyaV)**

---

## Application Preview

### Desktop - Light Mode

<p align="left" gap="2">
  <img src="DashboardLight.png" width="200" height="180"/>

  <img src="Preview/Desktop/TransactionLight.png" width="200" height="150"/>

  <img src="Preview/Desktop/AnalyticsLight.png" width="200" height="150"/>

  <img src="Preview/Desktop/InsightsLight.png" width="200" height="150"/>

  <img src="Preview/Desktop/SettingsLight.png" width="200" height="150"/>

  <img src="Preview/Desktop/LoaderLight.png" width="200" height="150"/>
</p>

### Desktop - Dark Mode

<p align="left" gap="2">
  <img src="DashboardDark.png" width="200" height="180"/>

  <img src="Preview/Desktop/TansactionDark.png" width="200" height="150"/>

  <img src="Preview/Desktop/AnalyticsDark.png" width="200" height="150"/>

  <img src="Preview/Desktop/InsightsDark.png" width="200" height="150"/>

  <img src="Preview/Desktop/SettingsDark.png" width="200" height="150"/>

  <img src="Preview/Desktop/LoaderDark.png" width="200" height="150"/>
</p>

### Mobile - Light Mode

<p align="left" gap="2">
  <img src="Preview/Mobile/DashboardLight.png" width="150" height="400"/>

  <img src="Preview/Mobile/TransactionLight.png" width="150" height="400"/>

  <img src="Preview/Mobile/AnalyticsLight.png" width="150" height="400"/>

  <img src="Preview/Mobile/SettingsLight.png" width="150" height="400"/>

  <img src="Preview/Mobile/LoaderLight.png" width="150" height="400"/>
</p>

### Mobile - Dark Mode

<p align="left" gap="2">
  <img src="Preview/Mobile/DashboardDark.png" width="150" height="400"/>

  <img src="Preview/Mobile/TransactionDark.png" width="150" height="400"/>

  <img src="Preview/Mobile/AnalyticsDark.png" width="150" height="400"/>

  <img src="Preview/Mobile/SettingsDark.png" width="150" height="400"/>

  <img src="Preview/Mobile/LoaderDark.png" width="150" height="400"/>
</p>

---

## Key Features

### Financial Management

- Transaction management.
- Income and expense tracking.
- Financial summary dashboard.
- Interactive analytics and insights.
- Role-based interface behavior for Viewer and Admin.

### User Interface

- Light and dark theme support.
- Responsive layouts for desktop and mobile devices.
- Smooth page transitions and animations.
- Interactive dashboard components.
- Horizontal scrolling sections.

### Performance and User Experience

- Global skeleton loading system.
- Animated chart and loading components.
- Controlled loading states.
- Lazy rendering patterns.
- Optimized asynchronous operations.

---

## Application Modules

| Module | Description |
|---|---|
| Dashboard | Financial summaries, balance cards, and analytics charts |
| Transactions | Transaction listing and role-based editing |
| Analytics | Financial data visualization and graphical insights |
| Insights | Financial trends and behavioral analytics |
| Settings | Application preferences and theme configuration |

---

## Component Architecture

The application follows a modular, reusable component structure.

### UI Components

- Balance, Income, and Expense Cards
- Bar, Donut, and Line Charts
- Theme Toggle

### Utility Components

- ScrollToTop
- RoleToggle
- HorizontalScroll
- Drag-and-Drop interactions

### Loading Components

- SkeletonLoader
- AnimatedBars
- Global Loading Context

Drag-and-drop interactions are implemented for the Total Income, Expenditure, and Balance cards across desktop and mobile layouts.

---

## State Management and Implementation

The application uses React Context API for centralized state management and React Hooks for component-level behavior.

Key implementation approaches:

- React Context API for global loading state.
- useState for local component state.
- useEffect for managing side effects.
- Promise.all for concurrent asynchronous operations.
- Reusable components to reduce code duplication.
- Responsive-first design principles.
- Separation of UI components and application logic.

---

## Technical Highlights

- Modular and maintainable component structure.
- Reusable UI components.
- Centralized loading state management.
- Responsive design across different screen sizes.
- Interactive data visualization.
- Theme management.
- Asynchronous operation handling.
- User experience-focused loading strategies.

---

## Installation and Setup

### Prerequisites

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone <your-repository-url>
```

### Navigate to the Project Directory

```bash
cd finance-tracker
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

<div align="center">

  Subramanya Veeregowda | Full Stack Developer | Data Engineer <br />

  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](LINKEDIN_URL)
  [![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://your-portfolio-link.com)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](GITHUB_URL)
  [![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](LEETCODE_URL)
  [![HackerRank](https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=hackerrank&logoColor=white)](HACKERRANK_URL)
  [![NeetCode](https://img.shields.io/badge/NeetCode-000000?style=for-the-badge)](NEETCODE_URL)
  [![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](WHATSAPP_URL)
</div>
