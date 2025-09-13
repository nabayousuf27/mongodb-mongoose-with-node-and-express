# MongoDB Mongoose Example

This project demonstrates a simple connection to a MongoDB database using **Mongoose** in Node.js.

---

## 📦 Installation

Run the following commands in your terminal:

```bash
npm init -y
npm install mongoose
```

---

## ✨ Features

- Connects to a local MongoDB instance  
- Defines a simple `User` schema (`name`, `email`, `age`)  
- Creates a Mongoose model for the `User` collection  

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) installed  
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) running locally on:  
  ```
  mongodb://127.0.0.1:27017
  ```
- [MongoDB Shell (mongosh)](https://www.mongodb.com/docs/mongodb-shell/) installed for testing  

---

## ⚙️ Setup

1. Clone this repository or download the files.  
2. Install dependencies:  
   ```powershell
   npm install mongoose
   ```
3. Start your local MongoDB server if it's not already running.  
4. Run the script:  
   ```powershell
   node index.js
   ```

---

## 📂 File Structure

- `index.js` — Main script for connecting to MongoDB and defining the schema/model  
- `package.json` — Project metadata and dependencies  
- `README.md` — Project documentation  

---

## 📝 Code Overview

- Connects to MongoDB using Mongoose  
- Defines a `User` schema with fields: `name`, `email`, `age`  
- Creates a `User` model for interacting with the `users` collection  

---

## 💻 Mongo Shell Commands (for testing)

Start mongo shell with the command:

```bash
mongosh
```

Inside `mongosh`:

```bash
use test          // switch to 'test' database
show collections  // list collections
```

---

## 📚 Resources

- [Mongoose Documentation](https://mongoosejs.com)  
- [MongoDB Shell Docs](https://www.mongodb.com/docs/mongodb-shell/)  

---

## 📄 License

This project is for educational purposes.
