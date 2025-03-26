# Wholesaler-Retailer Sales Admin Panel

This project is a Node.js application built with Express, Sequelize, and PostgreSQL following the MVC pattern. It provides APIs to manage wholesalers, retailers, and their stock transactions.

## Features

- Many-to-many relationship between wholesalers and retailers.
- Stock transactions recorded monthly (Jan 2021 - Dec 2021).
- APIs to:
  - Get wholesaler details along with associated retailers.
  - Retrieve retailers associated with exactly one wholesaler.
  - Get total monthly turnover for each wholesaler for 2021.
  - Get maximum turnover from a single retailer for each wholesaler.

## Tech Stack

- Node.js
- Express
- Sequelize ORM
- PostgreSQL

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone <repo-link>
   cd sales_admin_panel
Create the Database:

Ensure you have PostgreSQL installed and create a database named wholesaler. For example, from the PostgreSQL command line:

sql
Copy
Edit
CREATE DATABASE wholesaler;
Configure Environment Variables:

Create a file named config.env in the root directory. This file is necessary to provide configuration details for your database connection. Include your database username and password using the variables db_username and db_password as shown below:

dotenv
Copy
Edit
db_username=yourUsername
db_password=yourPassword
PORT=3000
Install Dependencies:

Run the following command to install all necessary packages:

bash
Copy
Edit
npm install
Data Seeding:

The project includes a seed.js file to create and seed data programmatically. In addition, you might need to insert or update specific records using SQL commands, especially for retailers associated with a single wholesaler.

For example, to create another retailer, you can use the SQL command below:

sql
Copy
Edit
INSERT INTO "Stocks" ("stock_amount", "date", "wholesaler_id", "retailer_id")
VALUES (500, '2021-01-31', 1, (SELECT id FROM "Retailers" WHERE name = 'Retailer Q'));
To create a stock record for one retailer and ensure that the createdAt and updatedAt fields are filled, use:

sql
Copy
Edit
INSERT INTO "Stocks" 
  ("stock_amount", "date", "createdAt", "updatedAt", "wholesaler_id", "retailer_id")
VALUES 
  (500, '2021-01-31', now(), now(), 1, (SELECT id FROM "Retailers" WHERE name = 'Retailer Q'));
Note: The data seeded with the seed file might differ from the actual data you have in production. Be sure to run the necessary SQL commands if you need a specific scenario (e.g., a retailer with a single wholesaler).

Start the Server:

Use the following command to start the server:

bash
Copy
Edit
npm start
Once the server is running, you should see a message similar to:

arduino
Copy
Edit
Server running on port 3000
Database connected...
API Endpoints
Get Total Monthly Turnover for Each Wholesaler for 2021:

bash
Copy
Edit
GET http://localhost:3000/api/wholesalers/turnover/monthly
Get Wholesaler Details (with associated retailers) by ID:

bash
Copy
Edit
GET http://localhost:3000/api/wholesalers/2
Get Retailers Associated with a Single Wholesaler:

bash
Copy
Edit
GET http://localhost:3000/api/retailers/single-wholesaler
Get Maximum Turnover from a Single Retailer for Each Wholesaler:

bash
Copy
Edit
GET http://localhost:3000/api/wholesalers/turnover/max
Additional Information
The project follows an MVC architecture where routes, controllers, and services are organized in the src directory.

Ensure that the config.env file is present and correctly configured with the database credentials before starting the server.

The project utilizes Sequelize for ORM, and all configurations are managed through environment variables.

For further customization or troubleshooting, refer to the respective configuration and route files within the project structure.