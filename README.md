# TalentSphere

A Employee Management System

## Live Website Link

[https://talentsphere-56bbf.web.app](https://talentsphere-56bbf.web.app/)

---

## Project Overview

**TalentSphere** is a comprehensive Employee Management System designed to streamline HR processes. It enables efficient management of employee data, performance tracking, and collaboration, ensuring a seamless experience for administrators and employees alike.

---

## Features
### **For Employees**
- **Work-Sheet**:  
  - Submit tasks with fields:  
    - Task type (Sales, Support, etc.), Hours Worked, and Date (default: today).  
  - View task records in a table with options to Edit or Delete (instant updates).  
- **Payment History**:  
  - View monthly salary history, sorted by the earliest payment.  
  - Supports infinite scrolling for large data.

---

### **For HR (Human Resources)**
- **Employee List** :  
  - Verify employees (toggle verified status).  
  - Pay salaries via modal (Verified employees only).  
  - View details of employees 
- **Employee Details** :  
  - Displays employee name, photo, designation, and a Salary vs. Month-Year bar chart.  
- **Progress** :  
  - View all work records with filtering by Employee Name and Month.

---

### **For Admin**
- **All Employee List** :  
  - View verified employees and manage:  
    - **Make HR**: Promote employees to HR.  
    - **Fire**: Restrict login access.  
    - **Adjust Salary**: Only allow salary increments.  
- **Payroll**:  
  - Approve payment requests from HR.  
  - Process payments (one per employee per month).  
- **Toggle Views**: Switch between Table View and Card Grid View.  

---

### **Shared Features**
- **Role-Based Security**:  
  - JWT token authentication for verifying user roles (Employee, HR, Admin) in all protected operations.  
- **Contact Us** :  
  - Form for visitors to send feedback or queries.

---


### Authentication & Authorization

- **Login System:**

  - Email/Password-based login.
  - Google Sign-in.

- **Registration System:**

  - Name, Email, Password, Photo Upload.
  - Error handling for invalid inputs.

- **JWT Authentication:**
  - Generate and store JWT tokens for secure user sessions.
  - Authenticate private routes using JWT tokens.

## Technologies Used  

- **React**: For building dynamic user interfaces.  
- **Vite**: Fast and optimized build tool for React.  
- **Tailwind CSS & DaisyUI**: Utility-first CSS with pre-styled components.  
- **React Router**: Dynamic routing and navigation.  
- **Firebase**: Authentication, hosting, and real-time database.  
- **MongoDB**: Product data storage and management.  
- **React Toastify & SweetAlert2**: User-friendly notifications and alerts.  
- **Swiper**: Responsive carousels and sliders.  
- **React Helmet**: Dynamic document head management.  
- **React Icons**: Customizable icons for React components.  
- **Axios**: Simplified API requests with features like interceptors.  
- **Date-fns**: Lightweight date manipulation library.  
- **React Lottie**: High-quality animations via JSON.  
- **ShadCN/UI**: Modern components library for React.  
- **Recharts**: Visualizing data with charts. 

## Admin Login
- **email** : admin@gmail.com
- **password**: Admin00
---
