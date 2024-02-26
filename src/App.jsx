import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Login from "./pages/login/Login";
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));
import Register from "./pages/register/Register";
import Layout from "./pages/layout/Layout";
import { createContext, useReducer } from "react";
import { PublicRoutes } from "./utlis/PublicRoutes";
import { PrivateRoutes } from "./utlis/PrivateRoutes";
import Details from "./pages/dashboard/Details";

export const AppState = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("login", action.payload?.login);
      return { ...state, ...action.payload };
    case "USER_INFO":
      localStorage.setItem(
        "userInfo",
        JSON.stringify(action.payload?.userInfo)
      );
      return { ...state, ...action.payload };
    case "LOGOUT":
      localStorage.clear();
      return {};
  }
  throw Error("Unknown action: " + action.type);
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    login: JSON.parse(localStorage.getItem("login")) || false,
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
  });
  return (
    <AppState.Provider value={{ state: state, dispatch: dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoutes>
                <Layout />
              </PublicRoutes>
            }
          >
            <Route index path="/" element={<Login />} />
            <Route index path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route
            path="/"
            element={
              <PrivateRoutes>
                <Layout />
              </PrivateRoutes>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard/" element={<Dashboard />}>
              <Route path="detail/:id" element={<Details />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppState.Provider>
  );
}
console.log(<h2>Hello</h2>, document.createElement("h1"));
export default App;
