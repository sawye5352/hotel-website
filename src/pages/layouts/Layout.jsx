import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./styles.css";

export default function Layout() {
  const location = useLocation();
  return (
    <div>
      <div className="bg-primary_blue ">
        <NavBar />
      </div>
      <SwitchTransition>
        <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
          <div>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </div>
  );
}
