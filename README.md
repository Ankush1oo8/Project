
# Project Title: Express Application with MongoDB, Passport, and 

[CLICK HERE TO VIEW WEBSITE](https://major-project-z4v3.onrender.com/listings)

This repository contains the source code for a full-stack web application built using Node.js and Express. The application leverages MongoDB for data storage, Passport for user authentication, and EJS for rendering dynamic HTML templates. It also implements sessions and flash messaging for managing user state and providing feedback.

## Features
Dynamic Web Pages: Utilizes EJS as the templating engine to serve dynamic content to users.
Authentication: Implements user authentication using Passport with a local strategy, allowing secure login and access control.
Database Operations: Connects to a MongoDB database for storing and retrieving data, including user profiles, listings, and reviews.
Session Management: Uses express-session with MongoStore for persistent sessions, enabling user state management across multiple requests.
Flash Messaging: Provides immediate feedback to users through flash messages for success or error notifications.
Custom Error Handling: Includes middleware for handling errors gracefully, displaying relevant messages to users.
Static File Serving: Serves static files such as CSS, JavaScript, and images from a dedicated directory.
## Technologies Used
- [![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/) -- Backend runtime environment.
- [![Express](https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=express)](https://expressjs.com/) -- Minimalist web framework for Node.js.
- [![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/) -- NoSQL database for data storage.
- [![Passport](https://img.shields.io/badge/-Passport-660066?style=for-the-badge&logo=passport)](http://www.passportjs.org/) -- Authentication middleware for Node.js.
- [![EJS](https://img.shields.io/badge/-EJS-%23F9DC5C?style=for-the-badge&logo=ejs)](https://ejs.co/) -- Template engine for generating dynamic HTML pages.
- [![dotenv](https://img.shields.io/badge/-dotenv-555?style=for-the-badge&logo=dotenved)](https://www.npmjs.com/package/dotenv) -- Loads environment variables from a .env file.
- [![Method Override](https://img.shields.io/badge/-Method%20Override-333333?style=for-the-badge&logo=method-override)](https://www.npmjs.com/package/method-override) -- Allows the use of HTTP verbs such as PUT and DELETE in places where the client doesn't support them.
- [![Connect-Mongo](https://img.shields.io/badge/-Connect--Mongo-007ACC?style=for-the-badge&logo=connect-mongo)](https://www.npmjs.com/package/connect-mongo) -- Stores session data in MongoDB.
## Getting Started
To run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running npm install.
3. Create a .env file in the root directory and define the necessary environment variables (NODE_ENV, ATLASDB_URL, SECRET, etc.).
4. Start the application by running node app.js.

# Additional Technologies
## Cloudinary
[![Cloudinary](https://img.shields.io/badge/-Cloudinary-FFB400?style=for-the-badge&logo=cloudinary)](https://cloudinary.com/)
Cloudinary is a cloud-based service that provides an end-to-end image and video management solution, including uploads, storage, manipulations, optimizations, and delivery. In this project, Cloudinary is utilized to handle media files uploaded by users, ensuring efficient storage and retrieval of high-quality images and videos. This integration enhances the application's scalability and performance by offloading heavy lifting from the backend servers.

## MongoDB Atlas
[![MongoDB Atlas](https://img.shields.io/badge/-MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/cloud/atlas)
MongoDB Atlas is a fully-managed cloud database developed by the same people who build MongoDB. It offers a scalable, reliable, and secure way to deploy MongoDB databases in the cloud. In this project, MongoDB Atlas serves as the primary database for storing application data, including user profiles, posts, comments, and metadata. By leveraging MongoDB Atlas, the application benefits from automatic scaling, backups, and disaster recovery, ensuring high availability and data integrity.

## Integration Details
Cloudinary Integration: Users can upload images and videos directly to Cloudinary via the application's frontend. The application then stores references to these media files in MongoDB Atlas, linking them to relevant records (e.g., user profiles, posts). This approach minimizes storage requirements on the application servers and optimizes media delivery to end-users.
MongoDB Atlas Setup: The application connects to MongoDB Atlas using the MongoDB Node.js driver. This connection is configured with credentials obtained from the MongoDB Atlas dashboard, ensuring secure communication between the application and the database. MongoDB Atlas clusters are automatically scaled based on demand, adapting to changes in traffic patterns and data volume.
## Benefits
By integrating Cloudinary and MongoDB Atlas, this project achieves several key benefits:

Scalability: Both services offer automatic scaling capabilities, allowing the application to handle increased loads efficiently.
Reliability: MongoDB Atlas provides high availability and automatic backups, safeguarding against data loss.
Performance: Cloudinary optimizes media delivery, reducing loading times and improving the overall user experience.
Cost Efficiency: Pay-as-you-go pricing models for both services allow for cost savings by adjusting resources according to actual usage.











## Authors

- [@ankush1oo8](https://www.github.com/octokatherine)


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://in.linkedin.com/in/ankush-chudiwal)

[CLICK HERE TO VIEW WEBSITE](https://major-project-z4v3.onrender.com/listings)
