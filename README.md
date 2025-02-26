Here’s your Docker PostgreSQL setup in a colorful, structured format:  

---

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

---

### 🔹 **Step 2: Run PostgreSQL Container**  
```bash
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```
✅ **Successful Output:**  
```
097b4c998488ddf6afee41568767bed09b9d871b9ec55a475dd2db3a85597109
```

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

---

### 🔹 **Step 5: Stop the PostgreSQL Container**  
```bash
docker stop my-postgres
```
✅ **Successful Output:**  
```
my-postgres
```

---

### 🔹 **Step 6: Restart the PostgreSQL Container**  
```bash
docker restart my-postgres
```
✅ **Successful Output:**  
```
my-postgres
```

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

---

🎯 **Summary:**  
- Pulled the **PostgreSQL latest image** 🐳  
- Created a **PostgreSQL container** ✅  
- Verified **Docker images & containers** 🛠  
- Stopped, restarted, and checked logs 📜  
