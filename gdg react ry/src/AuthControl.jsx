const AuthControl = () => {
    const { isLoggedIn, login, logout } = useUserAuth();
    return (
      <div>
        <h2>{isLoggedIn ? "User is logged in" : "User is logged out"}</h2>
        <button onClick={isLoggedIn ? logout : login}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  };
  
  export default function App() {
    return (
      <UserAuthProvider>
        <AuthControl />
      </UserAuthProvider>
    );
  }