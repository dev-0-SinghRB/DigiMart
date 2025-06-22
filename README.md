# 🛒 DigiMart - E-Marketplace

**DigiMart** is a fullstack e-marketplace platform built with the **MERN stack** (MongoDB, Express.js, React, Node.js), designed to directly connect **producers like farmers** with **end consumers**. The platform empowers local producers to list and sell their products online, promoting fair trade, transparency, and better pricing—eliminating the need for middlemen.

With modern UI/UX using **TailwindCSS**, secure user authentication via **JWT**, and robust real-time infrastructure using **Redis** and **MongoDB**, DigiMart aims to be a comprehensive platform for local producers, empowering them economically while streamlining India's agri-commerce ecosystem.

---

## 🚀 Features

- 🧑‍🌾 Producers (e.g., farmers) can easily **list their products**
- 🛍️ Consumers can **browse & directly purchase** from producers
- 🔐 Secure **JWT-based user authentication**
- ⚙️ Passwords hashed with **bcrypt.js** for safety
- 🧭 Dynamic routing using `react-router-dom`
- 🎨 Clean, responsive interface using **TailwindCSS**
- 💡 Beautiful icons powered by `lucide-react`
- 📦 Environment variable protection with **dotenv**
- ⚡ Fast, scalable data access using **MongoDB** and **Redis**

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router DOM, TailwindCSS, Lucide React
- **Backend**: Node.js, Express.js, MongoDB, Redis
- **Authentication**: JSON Web Tokens (JWT), bcrypt.js
- **Configuration**: dotenv

---

## 📸 Project Snapshots

<div align="center">

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/e9388d4c-4a72-40b9-b82b-b919ccad6b77" alt="LandingPage" width="400"/>
    <td><img src="https://github.com/user-attachments/assets/739d018f-c2c7-4bbd-ad22-3bfd987caf92" alt="HomePage" width="400"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/2448703d-dd64-44b3-abae-eb2787bec84e" alt="SellerProductListing" width="400"/>
    <td><img src="https://github.com/user-attachments/assets/9075202f-aa2e-4bd9-b717-cc54d5c1ed08" alt="Cart" width="400"/></td>
    </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/82a93385-9ba3-41b2-a4e2-531c947d9d22" alt="SalesAnalytics" width="400"/></td>
    <td><img src="https://github.com/user-attachments/assets/6c1d6dab-b019-453a-8f7e-6dfdd71e3e67" alt="SalesAnalytics" width="400"/></td>
  </tr>
    
  </tr>
</table>

</div>

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/digimart.git
cd digimart
// Create .env file and your own keys
PORT = your own port
MONGO_URL = Your MongoDB URL
REDIS_URL = Your Redis URL
NODE_ENV= development

