import { BrowserRouter, Routes, Route } from "react-router-dom";

// append page (only views)
import Home from "../component/@Views/TopList/Home";
import About from "../component/@Views/TopList/About";
import ProfileHome from "../component/@Views/Profile/ProfileHome";

import LoginLayout from "../component/@Shared/@Layout/LoginLayout";
import Login from "../component/@Views/SignIn/LoginForm";
import MainLayout from "../component/@Shared/@Layout/MainLayout";
import { RequireAuth } from "react-auth-kit";
import { ToastContainer } from "react-toastify";
import { Services, ServicesContext } from "../services/services";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import SingUpForm from "../component/@Views/SignUp/SingUpForm";

Modal.setAppElement("body");

const AppRouter = () => {
  const services: Services = new Services();
  const [routesData, setRoutesData] = useState([]);

  useEffect(() => {
    // 這裡進行 API 調用，並將獲取的數據設置到狀態中
    fetch(`${services.localHost}/api/users/menus/items`)
      .then((response) => response.json())
      .then(({ data }) => setRoutesData(data));
  }, [services.localHost]);

  //ajax
  const privateElement = (element: JSX.Element) => {
    return <RequireAuth loginPath={"/login"}>{element}</RequireAuth>;
  };
  let components: any[] = [];

  if (routesData.length > 0) {
    components = routesData?.map((route: any) => ({
      ...route,
      component: React.lazy(
        () => import(`../component/@Views/${route.importAt}`)
      ),
    }));
  }

  components = routesData?.map((route: any) => ({
    ...route,
    component: React.lazy(
      () => import(`../component/@Views/${route.importAt}`)
    ),
  }));

  return (
    <BrowserRouter>
      <ServicesContext.Provider value={services}>
        <ToastContainer />
        <Routes>
          {/* user authrozie element */}
          <Route element={<LoginLayout />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<SingUpForm />} />
          </Route>

          {/* System element */}
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={privateElement(<Home />)} />
            <Route path="/Profile" element={privateElement(<ProfileHome />)} />
            <Route path="/about" element={privateElement(<About />)} />

            {components.map(({ id, url, component: Component }) => (
              <Route
                key={id}
                path={url}
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <Component />
                  </React.Suspense>
                }
              />
            ))}
          </Route>
        </Routes>
      </ServicesContext.Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
