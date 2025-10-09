# 🚀 INET2005 Assignment 3 - RESTful API Server

> 🎯 **A powerful Node.js/Express RESTful API server with MongoDB integration, fully containerized using Docker!**

---

## 📋 Prerequisites

Before you begin, make sure you have:

- 🐳 **Docker Desktop** installed and running
- 📮 **Postman** installed (for API testing)

> ⚡ **Pro Tip**: Make sure Docker Desktop is running before proceeding with the setup!

## 🎬 Starting the Server

### 🌟 Option 1: Using Docker Compose (Recommended)

1. **📂 Navigate to the project directory:**
   ```powershell
   cd "c:\Users\jtkau\NSCC\Year 2\Fall\INET2005\Assignments\Assignment_3_test\INET2005_Assignment3_JK"
   ```

2. **🚀 Start the services using Docker Compose:**
   ```powershell
   docker-compose up -d --build
   ```

3. **⏳ Wait for both containers to start. Check the status with:**
   ```powershell
   docker-compose ps
   ```

4. **🎉 The server will be available at:** `http://localhost:3000`

> 💡 **What's happening?** Docker is spinning up both MongoDB and your Node.js server automatically!

### 🔧 Option 2: Manual Setup (Alternative)

If you prefer to run without Docker:

1. **🍃 Ensure MongoDB is running locally on port 27017**
2. **📁 Navigate to the src directory:**
   ```powershell
   cd "c:\Users\jtkau\NSCC\Year 2\Fall\INET2005\Assignments\Assignment_3_test\INET2005_Assignment3_JK\src"
   ```
3. **📦 Install dependencies:**
   ```powershell
   npm install
   ```
4. **🚀 Start the server:**
   ```powershell
   npm start
   ```

> ⚠️ **Note**: This method requires you to set up MongoDB separately!

## ✅ Verifying the Server

1. **💚 Health Check**: Visit `http://localhost:3000` in your browser. You should see a JSON response with `"status": "ok"`.

2. **📚 API Documentation**: Visit `http://localhost:3000/api-docs` to view the interactive Swagger API documentation.

> 🎯 **Success!** If you see these pages, your server is running perfectly!

## 🧪 Testing with Postman

### 📥 Importing the Collection

1. **📮 Open Postman**
2. **🔽 Click "Import" in the top left**
3. **📁 Select "Upload Files"**
4. **🎯 Navigate to the project directory and select:** `INET2005 - Assignment 3.postman_collection.json`
5. **✨ Click "Import"**

> 🎉 **Boom!** Your collection is now ready to use!

### 🎮 Using the Collection

The imported collection contains pre-configured requests for all API endpoints:

- **🌐 Base URL**: Make sure all requests use `http://localhost:3000`
- **🛠️ Available Endpoints**:
  - 📋 **GET** `/products` - Retrieve all products
  - 🔍 **GET** `/products/:id` - Retrieve a specific product  
  - ➕ **POST** `/products` - Create a new product
  - ✏️ **PUT** `/products/:id` - Update a product
  - ❌ **DELETE** `/products/:id` - Delete a product

> 🎯 **Ready to test!** Each request is pre-configured with the correct headers and structure!

### 💡 Testing Tips

1. **👀 Start with GET requests** to see existing data
2. **🏗️ Use POST requests** to create test data  
3. **✅ Verify changes** with additional GET requests
4. **🧪 Test edge cases** like invalid IDs or missing data

> 🚀 **Pro Testing Strategy**: GET → POST → GET → PUT → GET → DELETE → GET

## 🛑 Stopping the Server

**🔄 To stop the Docker containers:**

```powershell
docker-compose down
```

**🧹 To stop and remove all data:**

```powershell
docker-compose down -v
```

> ⚠️ **Warning**: The second command will delete all database data!

## 🔧 Troubleshooting

- **🚪 Port conflicts**: If port 3000 or 27017 are in use, stop other services or modify the ports in `docker-compose.yaml`
- **📋 Container issues**: Check logs with `docker-compose logs`
- **🔌 Database connection**: Ensure MongoDB container is running and accessible

> 🆘 **Need help?** Most issues can be resolved by running `docker-compose down` and `docker-compose up -d` again!

## 📁 Project Structure

```
🏗️ INET2005_Assignment3_JK/
├── 🐳 docker-compose.yaml          # Docker services configuration
├── 📜 scripts/                     # Database initialization scripts  
├── 💻 src/                        # Application source code
│   ├── ⚙️  config/                 # Configuration files
│   ├── 🎮 controllers/            # API controllers
│   ├── 🛣️  routes/                # API routes
│   ├── 📦 package.json           # Node.js dependencies
│   └── 🔐 .env                   # Environment variables
└── 📮 INET2005 - Assignment 3.postman_collection.json
```

---

<div align="center">

**🎉 Happy Coding! 🎉**

*Built with ❤️ for INET2005*

</div>
