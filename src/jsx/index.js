import React, { useContext } from "react";

/// React router dom
import { Switch, Route } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
/// Dashboard
import Home from "./components/Dashboard/Home";

/// Pages
import Error404 from "./pages/Error404";

import Setting from "./layouts/Setting";
import { ThemeContext } from "../context/ThemeContext";
import Booking from "./components/booking";
import Tour from "./components/tour";
import Payment from "./components/payment";
import Transportations from "./components/transportations";
import User from "./components/user";
import TourGuide from "./components/tour-guide";
import TransCreate from "./components/transportations/create";
import TransEdit from "./components/transportations/edit";
import TourGuideCreate from "./components/tour-guide/create";
import TourGuideEdit from "./components/tour-guide/edit";
import TourDetail from "./components/tour/detail";
import TourCreate from "./components/tour/create";
import BookingDetail from "./components/booking/detail";

const Markup = () => {
  const { menuToggle } = useContext(ThemeContext);
  const routes = [
    /// Dashboard
    { url: "", component: Home },
    { url: "blank", component: Home },

    //Booking
    { url: "bookings", component: Booking },
    { url: ":id-booking-detail", component: BookingDetail },

    //Tour
    { url: "tours", component: Tour },
    { url: ":id-tours-detail", component: TourDetail },
    { url: "tours-create", component: TourCreate },

    //Payment
    { url: "payments", component: Payment },

    //User
    { url: "users", component: User },

    //Tour Guide
    { url: "tour-guides", component: TourGuide },
    { url: "tour-guides-create", component: TourGuideCreate },
    { url: "tour-guides-create", component: TourGuideEdit },

    //Transportations
    { url: "transportations", component: Transportations },
    { url: "transportations-create", component: TransCreate },
    { url: ":id-transportations-edit", component: TransEdit },

    /// pages

    { url: "page-error-404", component: Error404 },
  ];
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  let pagePath = path.split("-").includes("page");
  return (
    <>
      <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className={`${!pagePath ? "show" : "mh100vh"}  ${
          menuToggle ? "menu-toggle" : ""
        }`}
      >
        {!pagePath && <Nav />}

        <div className={`${!pagePath ? "content-body" : ""}`}>
          <div
            className={`${!pagePath ? "container-fluid" : ""}`}
            style={{ minHeight: window.screen.height - 60 }}
          >
            <Switch>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${data.url}`}
                  component={data.component}
                />
              ))}
            </Switch>
          </div>
        </div>
        {!pagePath && <Footer />}
      </div>
      <Setting />
    </>
  );
};

export default Markup;
