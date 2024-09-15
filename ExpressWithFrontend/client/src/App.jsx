import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  let newUser = {
    name,
    email,
  };

  const handleFetch = () =>
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err));

  // Run only once when the component mounts
  useEffect(() => {
    handleFetch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Corrected header
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then(() => {
        handleFetch();
        setName(""); // Clear the form fields
        setEmail(""); // Clear the form fields
      });
  };

  return (
    <>
      <div className="w-96 m-auto py-3 px-3 bg-slate-200 rounded-lg my-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  justify-around h-96 "
          method="POST"
        >
          <h2 className="text-center text-3xl font-semibold">User Form</h2>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="outline-none p-2 rounded-full"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="outline-none p-2 rounded-full"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-slate-900 text-white p-2 rounded-full"
          />
        </form>
      </div>

      <div className="w-96 m-auto bg-green-200 text-center">
        <h2>Users:</h2>
        {users.length > 0 ? (
          <ul>
            {users.map((user, index) => (
              <li key={index} className="my-3">
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div>
    </>
  );
}
