function UserCard({ name, email, age, bgColor }) {
    return (
      <div style ={{backgorundcolor : bgColor}}>
        <h2> {name}</h2>
        <p> {email}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
  
  export default UserCard;