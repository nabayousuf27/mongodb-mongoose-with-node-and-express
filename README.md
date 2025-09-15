# MongoDB Mongoose CRUD Example

This project demonstrates how to use **Mongoose** with Node.js to perform CRUD (Create, Read, Update, Delete) operations on a MongoDB database.

---

## 📦 Installation

Run the following commands in your terminal:

```powershell
npm init -y
npm install mongoose
```

---

## ✨ Features

- Connects to a local MongoDB instance
- Defines a `User` schema (`name`, `email`, `age`)
- Creates a Mongoose model for the `User` collection
- Demonstrates:
  - Inserting single and multiple users
  - Querying users (find, findOne, findById)
  - Updating users (updateOne, updateMany, findOneAndUpdate)
  - Deleting users (deleteOne, deleteMany, findByIdAndDelete, findOneAndDelete)

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) running locally at:
  ```
  mongodb://127.0.0.1:27017
  ```

---

## ⚙️ Usage

1. Start your local MongoDB server.
2. Install dependencies:
   ```powershell
   npm install mongoose
   ```
3. Run the script:
   ```powershell
   node index.js
   ```
4. Check your terminal for output from various CRUD operations.

---

## 📂 File Structure

- `index.js` — Main script for connecting to MongoDB, defining schema/model, and running CRUD operations
- `package.json` — Project metadata and dependencies
- `README.md` — Project documentation

---

## 📝 Code Overview

### 1. Database Connection
Connects to MongoDB using Mongoose and logs connection status.

### 2. Schema & Model
Defines a `User` schema with fields: `name`, `email`, `age` and creates a `User` model.

### 3. Insert Operations
- Insert single users using `user.save()`
- Insert multiple users using `User.insertMany()`

### 4. Read Operations
- `User.find({})` — Find all users
- `User.findOne({age: 19})` — Find one user by age
- `User.findById({_id: ...})` — Find user by ID

### 5. Update Operations
- `User.updateOne({name: ...}, {name: ...})` — Update one user
- `User.updateMany({age: {$gt: 20}}, {age: 20})` — Update many users
- `User.findOneAndUpdate({age: {$gt: 19}}, {age: 24}, {new: true})` — Update and return new document

### 6. Delete Operations
- `User.deleteOne({name: ...})` — Delete one user
- `User.deleteMany({age: {$gt: 45}})` — Delete many users
- `User.findByIdAndDelete({_id: ...})` — Delete by ID
- `User.findOneAndDelete({name: ...})` — Delete one by condition

---

## 📚 Resources

- [Mongoose Documentation](https://mongoosejs.com)  
- [MongoDB Shell Docs](https://www.mongodb.com/docs/mongodb-shell/)  

---

## 📄 License

This project is for educational purposes.
