import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AppState } from "../../App";
import { useIsOnline } from "../../utlis/useIsOnline";

function Layout() {
  const { state, dispatch } = useContext(AppState);
  const isOnline = useIsOnline();
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Demo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/dashboard"
                  >
                    Home
                  </Link>
                </li>
                {state?.login && state?.userInfo !== null ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={() => dispatch({ type: "LOGOUT" })}
                    >
                      Logout
                    </Link>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        Register
                      </Link>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <Link className="nav-link disabled">
                    {isOnline ? "Online" : "Offline"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
      <footer>
        <h4>footer</h4>
      </footer>
    </>
  );
}

export default Layout;
