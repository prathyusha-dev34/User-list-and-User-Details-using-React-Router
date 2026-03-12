import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserDetails() {

  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">

      <h1>User Details</h1>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
      <p><b>Company:</b> {user.company.name}</p>
      <p><b>Street:</b> {user.address.street}</p>
      <p><b>City:</b> {user.address.city}</p>
      <p><b>Zip Code:</b> {user.address.zipcode}</p>
      <p><b>Latitude:</b> {user.address.geo.lat}</p>
      <p><b>Longitude:</b> {user.address.geo.lng}</p>

    </div>
  );
}

export default UserDetails;