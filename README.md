# Wholesaler-Retailer Sales Admin Panel

This project is a Node.js application built with Express, Sequelize, and PostgreSQL following the MVC pattern. It provides APIs to manage wholesalers, retailers, and their stock transactions.

## Features

- Many-to-many relationship between wholesalers and retailers.
- Stock transactions recorded monthly (Jan 2021 - Dec 2021).
- APIs to:
  - Get wholesaler details with associated retailers.
  - Retrieve retailers associated with exactly one wholesaler.
  - Get total monthly turnover for each wholesaler for 2021.
  - Get maximum turnover from a single retailer for each wholesaler.

## Tech Stack

- Node.js
- Express
- Sequelize ORM
- PostgreSQL

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repo-link>
   cd <project-folder>
