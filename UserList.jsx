import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id} className="card">
          <Link to={`/user/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}

    </div>
  );
}

export default UserList;