import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  if (isAuth) {
    return (
      <div>
        <h1>Welcome</h1>

        <button onClick={() => dispatch(removeUser())}>
          Log out from {email}
        </button>
      </div>
    );
  }
  return <Navigate to="/login" />;
};

export default HomePage;
