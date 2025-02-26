import { useState, useEffect } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/add_users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    if (response.ok) {
      fetchUsers();
      setName("");
      setEmail("");
    }
  };

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:3000/get_users");
    const data = await response.json();
    if(data["error"]){
      console.log(data["error"])
    }
    else{
        setUsers(data);
        console.log(data)
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="w-[100vw] flex flex-col items-center justify-center min-h-screen bg-gray-100 mx-auto ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
          <button type="submit" onClick={handleSubmit} className="w-full text-black p-2 rounded-md border-2 border-blue-500 hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Users List</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index} className="border-b p-2">{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
