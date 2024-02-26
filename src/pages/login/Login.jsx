import { useContext } from "react";
import { AppState } from "../../App";

const Login = () => {
  const { dispatch } = useContext(AppState);
  return (
    <section>
      <div className="container">
        <div className="py-2">
          <label>Username</label>
          <input type="text" name="username" className="form-control" />
        </div>
        <div className="py-2">
          <label>Password</label>
          <input type="password" name="pswd" className="form-control" />
        </div>
        <div className="py-2">
          <button
            onClick={() => {
              dispatch({ type: "LOGIN", payload: { login: true } });
              dispatch({
                type: "USER_INFO",
                payload: {
                  userInfo: { id: 1, name: "pranay", email: "test@gmail.com" },
                },
              });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
