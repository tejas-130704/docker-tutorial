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

