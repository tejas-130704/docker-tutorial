# 🚀 **Docker PostgreSQL Setup Guide**  

### 🔹 **Step 1: Pull PostgreSQL Image**  
```bash
docker pull postgres:latest
```
✅ **Successful Output:**  
```
latest: Pulling from library/postgres
7cf63256a31a: Pull complete
b55ba9745e01: Pull complete
11372330074b: Pull complete
...
Status: Downloaded newer image for postgres:latest
docker.io/library/postgres:latest
```

| `docker pull postgres:latest` | Pulls the latest PostgreSQL image from Docker Hub. |

---

### 🔹 **Step 2: Run PostgreSQL Container**  
```bash
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```
✅ **Successful Output:**  
```
097b4c998488ddf6afee41568767bed09b9d871b9ec55a475dd2db3a85597109
```

| `docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres` | Runs a PostgreSQL container with the name `my-postgres` in detached mode (`-d`). |

---

### 🔹 **Step 3: Verify Docker Images**  
```bash
docker image ls
```
✅ **Successful Output:**  
```
REPOSITORY   TAG       IMAGE ID       CREATED      SIZE
postgres     latest    c5df8b5c321e   5 days ago   438MB
```

| `docker image ls` | Lists all downloaded Docker images. |


---

### 🔹 **Step 4: Check Running Containers**  
```bash
docker ps
```
✅ **Successful Output:**  
```
CONTAINER ID   IMAGE      COMMAND                  CREATED          STATUS          PORTS      NAMES
097b4c998488   postgres   "docker-entrypoint.s…"   20 minutes ago   Up 20 minutes   5432/tcp   my-postgres
```

| `docker ps` | Shows running containers. |


---

### 🔹 **Step 5: Stop the PostgreSQL Container**  
```bash
docker stop my-postgres
```
✅ **Successful Output:**  
```
my-postgres
```

| `docker stop my-postgres` | Stops the PostgreSQL container. |


---

### 🔹 **Step 6: Restart the PostgreSQL Container**  
```bash
docker restart my-postgres
```
✅ **Successful Output:**  
```
my-postgres
```

| `docker restart my-postgres` | Restarts the container. |

---

### 🔹 **Step 7: View Logs**  
```bash
docker logs my-postgres
```
✅ **Key Logs Output:**  
```
The files belonging to this database system will be owned by user "postgres".
This user must also own the server process.

The database cluster will be initialized with locale "en_US.utf8".
The default database encoding has accordingly been set to "UTF8".
...
syncing data to disk ... ok
```

| `docker logs my-postgres` | Displays logs of the PostgreSQL container. |

---

**NOTE: We can run same service on diffrent ports to prevent conflict.**

---

## 🔹 **Run Multiple PostgreSQL Containers on Different Ports**  

### ✅ **Start PostgreSQL on Port `4000`**  
```bash
docker run --name postgres4000 -e POSTGRES_PASSWORD=pass4000 -p 4000:5432 -d postgres
```
✅ **Explanation:**  
- `--name postgres4000` → Name of the container.  
- `-e POSTGRES_PASSWORD=pass4000` → Sets the PostgreSQL password.  
- `-p 4000:5432` → Maps **port 4000** on the host to **5432** inside the container.  
- `-d postgres` → Runs in **detached mode**.  

---

### ✅ **Start PostgreSQL on Port `5001`**  
```bash
docker run --name postgres5001 -e POSTGRES_PASSWORD=pass5001 -p 5001:5432 -d postgres
```
✅ **Explanation:**  
- `-p 5001:5432` → Maps **port 5001** on the host to **5432** inside the container.  
- Everything else is similar to the previous command.

---

### 🔹 **Check Running PostgreSQL Containers**  
```bash
docker ps
```
✅ **Expected Output:**  
```
CONTAINER ID   IMAGE      PORTS                   NAMES
xxxxx1         postgres   0.0.0.0:4000->5432/tcp  postgres4000
xxxxx2         postgres   0.0.0.0:5001->5432/tcp  postgres5001
```

---

### 🔹 **Stop Both PostgreSQL Containers**  
```bash
docker stop postgres4000 postgres5001
```

### 🔹 **Restart Both PostgreSQL Containers**  
```bash
docker restart postgres4000 postgres5001
```

---

### 🔹 **Remove all Stopped Containers**
```bash
docker container prune
```
Deleted Containers !!

---

Here are the **Docker commands** to set up **MongoDB** and **Mongo Express** for easy database management.  

---

# 🚀 **MongoDB & Mongo Express Setup Guide**  

### 📌 **1️⃣ Pull MongoDB Image**
```bash
docker pull mongo:latest
```
✅ **Explanation:**  
- Downloads the latest MongoDB image from Docker Hub.  

---

### 📌 **2️⃣ Run MongoDB Container**
```bash
docker run --name my-mongo -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=pass123 -p 27017:27017 -d mongo
```
✅ **Explanation:**  
- `--name my-mongo` → Sets the container name as **my-mongo**.  
- `-e MONGO_INITDB_ROOT_USERNAME=admin` → Sets **MongoDB admin username**.  
- `-e MONGO_INITDB_ROOT_PASSWORD=pass123` → Sets **MongoDB admin password**.  
- `-p 27017:27017` → Maps **MongoDB port 27017** to the host system.  
- `-d mongo` → Runs MongoDB in **detached mode**.  

---

### 📌 **3️⃣ Run Mongo Express (Web Interface for MongoDB)**
```bash
docker run --name mongo-express -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=pass123 -e ME_CONFIG_MONGODB_SERVER=my-mongo -p 8081:8081 -d mongo-express
```
✅ **Explanation:**  
- `--name mongo-express` → Names the container **mongo-express**.  
- `-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin` → MongoDB **admin username**.  
- `-e ME_CONFIG_MONGODB_ADMINPASSWORD=pass123` → MongoDB **admin password**.  
- `-e ME_CONFIG_MONGODB_SERVER=my-mongo` → Connects to **MongoDB container**.  
- `-p 8081:8081` → Maps **port 8081** to host system for Mongo Express.  
- `-d mongo-express` → Runs Mongo Express in **detached mode**.  

---

### 📌 **4️⃣ Check Running Containers**
```bash
docker ps
```
✅ **Expected Output:**  
```
CONTAINER ID   IMAGE           PORTS                   NAMES
xxxxx1         mongo           0.0.0.0:27017->27017/tcp  my-mongo
xxxxx2         mongo-express   0.0.0.0:8081->8081/tcp   mongo-express
```

---

### 📌 **5️⃣ Access Mongo Express (Web UI)**
🔗 Open in your browser:  
👉 **http://localhost:8081**  

📌 **Use credentials:**  
- **Username:** `admin`  
- **Password:** `pass123`  

---

### 📌 **6️⃣ Stop MongoDB & Mongo Express**
```bash
docker stop my-mongo mongo-express
```

### 📌 **7️⃣ Restart MongoDB & Mongo Express**
```bash
docker restart my-mongo mongo-express
```

---

🎯 **Final Summary:**  
✅ Set up **MongoDB** container with authentication.  
✅ Set up **Mongo Express** for web-based MongoDB management.  
✅ Verified running containers using `docker ps`.  
✅ Stopped & restarted both services when needed.  


---

**NOTES**
- Where you are using docker-compose (yaml) then it use to create a new network and runn all the containers persent in compose file at same network, so we do not need to create network and assign them as we us to do in Docker CLI.

---


# 📌 **Docker Compose for MongoDB & Mongo Express**  

### **1️⃣ Create a `docker-compose.yml` File**  
Create a new file **`docker-compose.yml`** and add the following content:

```yaml
version: '3.8'

services:
  mongo:
    image: mongo:latest
    container_name: my-mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: pass123
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

  mongo-express:
    image: mongo-express
    container_name: mongo-express
    restart: always
    depends_on:
      - mongo
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: admin
      ME_CONFIG_MONGODB_ADMINPASSWORD: pass123
      ME_CONFIG_MONGODB_SERVER: my-mongo
    ports:
      - "8081:8081"

volumes:
  mongo_data:
  
```

---

### **2️⃣ Run the Services**
🚀 **Start MongoDB & Mongo Express using Docker Compose**
```bash
docker-compose up -d
```
✅ **Explanation:**  
- `up -d` → Starts the containers in **detached mode**.  

---

### **3️⃣ Check Running Containers**
```bash
docker ps
```

---

### **4️⃣ Stop the Containers**
```bash
docker-compose down
```
✅ **This stops and removes the containers.**  

---

### **5️⃣ Restart the Containers**
```bash
docker-compose restart
```

---

### **6️⃣ Access Mongo Express UI**
🔗 Open in Browser:  
👉 **http://localhost:8081**  

📌 **Use credentials:**  
- **Username:** `admin`  
- **Password:** `pass123`  

---

### **🎯 Summary**
✅ **MongoDB & Mongo Express** setup using **Docker Compose**  
✅ **Easy Management** with `docker-compose up -d` & `docker-compose down`  
✅ **Persistent Storage** using **Docker Volumes**  
✅ **Mongo Express UI** available at **localhost:8081**  

---

Here’s a **step-by-step guide** to creating a **Flask "Hello, World"** app with Docker.  

---

## **🚀 Steps to Dockerize a Flask App**
### **1️⃣ Create the Project Folder**
```bash
mkdir flask-app
cd flask-app
```

### **2️⃣ Create `app.py` (Flask App)**
```python
# app.py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, World! Welcome to Flask in Docker!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

### **3️⃣ Create `requirements.txt`**
```txt
flask
```
(*This ensures Flask gets installed inside the container.*)

### **4️⃣ Create a `Dockerfile`**
```dockerfile
# Use an official Python image as the base
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the application files COPY SRC DEST
COPY . /app

# Install dependencies
RUN pip install -r requirements.txt

# Expose the application port
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]
or
CMD python app.py
```

### **5️⃣ Build the Docker Image**
```bash
docker build -t flask-hello .
or
docker build -t tejasjadhav/flask-hello:0.0.1.RELEASE .
```
(*This creates a Docker image named `flask-hello`.*)

### **6️⃣ Run the Flask Container**
```bash
docker run -d -p 5000:5000 --name myflaskapp flask-hello
or
docker run -d -p 5000:5000 tejasjadhav/flask-hello:0.0.1.RELEASE
```
(*Runs the container in detached mode, mapping port 5000 of the container to port 5000 of your system.*)

### **7️⃣ Open in Browser**
👉 **[http://localhost:5000](http://localhost:5000/)**  
You should see:  
```plaintext
Hello, World! Welcome to Flask in Docker!
```

---

## **🚀 Docker Compose Version**
Instead of manually running commands, you can use **Docker Compose**:

### **🔹 `docker-compose.yml`**
```yaml
version: "3.8"
services:
  flask-app:
    build: .
    container_name: myflaskapp
    ports:
      - "5000:5000"
    restart: always
```

### **🔹 Run with Docker Compose**
```bash
docker-compose up -d --build
```

---

## **🛑 Stop & Remove Container**
To stop and remove everything:
```bash
docker stop myflaskapp && docker rm myflaskapp

```

---



---

## **🚀 Step-by-Step Guide to Setting Up MongoDB with Docker and Using It in an Application**  

In this guide, we'll:  
✅ **Run MongoDB in Docker**  
✅ **Connect a Node.js app to MongoDB**  
✅ **Create a Docker image**  
✅ **Push the image to GitHub Container Registry**  
✅ **Pull and use the image in any system**  

---

## **1️⃣ Set Up MongoDB with Docker**
### **📌 Run MongoDB as a Docker Container**
```bash
docker run -d --name mymongo -p 27017:27017 mongo
```
👉 This runs MongoDB in a **detached mode** and maps the container’s port **27017** to the local machine.

### **📌 Verify MongoDB is Running**
```bash
docker ps
```
👉 You should see a running MongoDB container.

### **📌 Access MongoDB Inside the Container**
```bash
docker exec -it mymongo mongosh
```
(*This opens the MongoDB shell where you can create databases and collections.*)

---

## **2️⃣ Create an Application that Connects to MongoDB**
We will now create a **Node.js application** that connects to MongoDB.

### **📌 Create the Project Folder**
```bash
mkdir mongo-node-app && cd mongo-node-app
```

### **📌 Initialize a Node.js Project**
```bash
npm init -y
```

### **📌 Install Dependencies**
```bash
npm install express mongoose
```

### **📌 Create `server.js`**
```javascript
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://mymongo:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define a simple schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", UserSchema);

// API Route
app.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### **📌 Create `Dockerfile`**
```dockerfile
# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy application files
COPY package.json package-lock.json ./
RUN npm install

# Copy remaining files
COPY . .

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["node", "server.js"]
```

---

## **3️⃣ Run MongoDB and Node.js App Together**
We will use **Docker Compose** to start both services together.

### **📌 Create `docker-compose.yml`**
```yaml
version: "3.8"

services:
  mongo:
    image: mongo
    container_name: mymongo
    ports:
      - "27017:27017"
    restart: always

  app:
    build: .
    container_name: mynodeapp
    ports:
      - "3000:3000"
    depends_on:
      - mongo
    restart: always
```

### **📌 Build and Start the Services**
```bash
docker-compose up -d --build
```

### **📌 Open the App in Browser**
👉 **[http://localhost:3000](http://localhost:3000/)**  
You should see an empty JSON array `[]` (since no users are added yet).  

---

## **4️⃣ Create a Docker Image and Push to GitHub Container Registry**
We will now push our **Docker image** to **GitHub Container Registry** so it can be used anywhere.

### **📌 Login to GitHub Container Registry**
```bash
echo "YOUR_GITHUB_PAT" | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
```

### **📌 Tag the Image**
```bash
docker tag mynodeapp ghcr.io/YOUR_GITHUB_USERNAME/mynodeapp:latest
```

### **📌 Push the Image**
```bash
docker push ghcr.io/YOUR_GITHUB_USERNAME/mynodeapp:latest
```

---

## **5️⃣ Pull and Use the Image on Any System**
Now, anyone can pull and run your image.

### **📌 Pull the Image**
```bash
docker pull ghcr.io/YOUR_GITHUB_USERNAME/mynodeapp:latest
```

### **📌 Run the Container**
```bash
docker run -d -p 3000:3000 --name mynodeapp ghcr.io/YOUR_GITHUB_USERNAME/mynodeapp:latest
```

---

## **🎯 Summary**
✔ **MongoDB in Docker** ✅  
✔ **Node.js app connecting to MongoDB** ✅  
✔ **Dockerfile & Docker Compose** ✅  
✔ **Push image to GitHub Container Registry** ✅  
✔ **Pull and use the image** ✅  

