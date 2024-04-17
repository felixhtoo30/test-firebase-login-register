import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const Home = () => {
  const { currentUser, userLoggedIn } = useAuth();
  return userLoggedIn ? (
    <div className="text-2xl font-bold pt-14 text-center">
      Hello&nbsp;
      {currentUser.displayName ? currentUser.displayName : currentUser.email},
      you are now logged in. <br />This is Home Page!
    </div>
  ) : (
    <Navigate replace={true} to="/login" />
  );
};

export default Home;
