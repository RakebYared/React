function UserCard({ name, email, age, bgColor }) {
    return (
      <div>
        <h2> {name}</h2>
        <p> {email}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
  
  export default UserCard;