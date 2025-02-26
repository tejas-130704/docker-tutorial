### **🚀 Step-by-Step Guide: Deploying React Frontend, Express Backend, and MongoDB with Docker**

---

## **🔹 1. Setup Project Structure**
Your project should have the following structure:

```
/your-project
│── /backend                 # Express backend
│   ├── index.js
│   ├── package.json
│   ├── Dockerfile
│── /frontend/Student_Management  # React frontend (Vite)
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
│── /basic-app                # Optional if backend is inside another folder
│── docker-compose.yml
```

---

## **🔹 2. Create Backend (Express)**
### **a) Install Express and Setup Server**
Inside the `/backend` folder:
```sh
npm init -y
npm install express mongoose cors dotenv
```

Create `index.js`:

---

### **b) Create Backend Dockerfile**
Inside `/backend`, create a `Dockerfile`:

---

## **🔹 3. Create Frontend (React)**
### **a) Setup Vite Project**
Inside `/frontend/Student_Management`:
```sh
npm create vite@latest . -- --template react
npm install
npm run dev  # Verify it works
```

---

### **b) Create Frontend Dockerfile**
Inside `/frontend/Student_Management`, create `Dockerfile`:

---

## **🔹 4. Create Docker Compose File**
Create `docker-compose.yml` in the root project:

---

## **🔹 5. Build and Run Docker Containers**
Run the following commands in the project root:
```sh
docker-compose down  # Stop any previous containers
docker-compose up --build  # Build and start containers
```
Once started, check:

- **MongoDB** → `mongodb://admin:password@localhost:27017/userdb`
- **Mongo Express** → [http://localhost:8081](http://localhost:8081)
- **Backend (Express)** → [http://localhost:3000](http://localhost:3000)
- **Frontend (React)** → [http://localhost:5173](http://localhost:5173)

---

## **🔹 6. Push to GitHub**
### **a) Initialize Git**
```sh
git init
git add .
git commit -m "Initial commit"
```

### **b) Create GitHub Repository**
Go to [GitHub](https://github.com) → **New Repository** → Follow instructions.

### **c) Push Code**
```sh
git remote add origin https://github.com/tejas-130704/docker-tutorial.git
git branch -M main
git push -u origin main
```

---

## **🔹 7. Clone and Run on Another System**
To run on another machine:

```sh
git clone https://github.com/tejas-130704/docker-tutorial.git
cd docker-tutorial
docker-compose up --build
```

Now, anyone can run your full-stack app with one command! 🎉🚀

---

### **✅ Summary**
1️⃣ **Set up project** (React frontend, Express backend, MongoDB)  
2️⃣ **Write Dockerfiles** for backend & frontend  
3️⃣ **Create `docker-compose.yml`** to define services  
4️⃣ **Run with `docker-compose up --build`**  
5️⃣ **Push to GitHub** for easy deployment  
6️⃣ **Clone & run anywhere with Docker**  

---

Now, the app is fully **containerized, portable, and easy to deploy**!