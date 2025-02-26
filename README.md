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

Here's your **Docker PostgreSQL Notes** with explanations and additional commands for running two PostgreSQL containers on different ports.  

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

### 🔹 **Connect to PostgreSQL via psql**  
```bash
psql -h localhost -p 4000 -U postgres
```
✅ **Explanation:**  
- `-h localhost` → Connects to **localhost**.  
- `-p 4000` → Connects to **port 4000**.  
- `-U postgres` → Logs in as **postgres user**.  

Similarly, for **Port 5001**:  
```bash
psql -h localhost -p 5001 -U postgres
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


