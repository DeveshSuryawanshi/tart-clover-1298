import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { m } from "framer-motion";

// import logo from "../Images/ProjectLogo.png"

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const isAdmin = useSelector((store) => store.auth.isAdmin);
const isAuth=useSelector((store) => store.auth.isAuth);

  return (
    <>
      {/* <div className="mainContainer">
        <div className="child1">
          <div className="logoDiv">
            <Link to={"/"}>
              <h1 className="imgLogo">
                Tax <span className="spanTax">Tim</span>
              </h1>
            </Link>
          </div>
          <div className="Links">
            <Link className="link" to={"/"}>
              Home
            </Link>
            <Link className="link" to={"/contact"}>
              Contact
            </Link>
            <Link className="link" to={"/faq"}>
              FAQ
            </Link>
            <Link className="link" to={"/blogs"}>
              Blog
            </Link>
            <Link className="link" to={"/calculator"}>
              Calculators
            </Link>
            {isAdmin ? (
              <Link className="link" to={"/admin"}>
                Admin
              </Link>
            ) : null}
          </div>
        </div>
        <div className="child2">
        {  !isAuth&& <Link className="link login" to={"/login"}>
            LOGIN
          </Link>}

          {isAuth&& <Link className="link login" to={"/login"}>
            LOGOUT
          </Link>}

          {/* SideBar */}
          {/* <GiHamburgerMenu ref={btnRef} onClick={onOpen} className="burger" />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg={"#86c5ce"}>
              <DrawerCloseButton color={"white"} mt={"3"} onClose={onClose}/>
              <DrawerHeader color={"white"} fontSize={"25"}>
                Save Tax
              </DrawerHeader>
              <div className="drawLinks">
                <Link className="link2" to={"/"}>
                  Home
                </Link>
                <Link className="link2" to={"/contact"}>
                  Contact
                </Link>
                <Link className="link2" to={"/faq"}>
                  FAQ
                </Link>
                <Link className="link2" to={"/blogs"}>
                  Blog
                </Link>
                <Link className="link2" to={"/calculator"}>
                  Calculators
                </Link>
                <Link className="link2" to={"/login"}>
                  Login
                </Link>
                {isAdmin ? (
                  <Link className="link2" to={"/admin"}>
                    Admin
                  </Link>
                ) : null}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div> */} 
      <nav>
        <h1>Tax Tim</h1>
  <ul>
   
    <li>
    <Link className="link" to={"/"}>
              Home
            </Link>
      <span></span><span></span><span></span><span></span>
    </li>
    <li>
    <Link className="link" to={"/contact"}>
              Contact
            </Link>
      <span></span><span></span><span></span><span></span>
    </li>
    <li>
    <Link className="link" to={"/faq"}>
              FAQ
            </Link>
      <span></span><span></span><span></span><span></span>
    </li>
    
    <li>
    <Link className="link" to={"/blogs"}>
              Blog
            </Link>
      <span></span><span></span><span></span><span></span>
    </li>
    <li>
    <Link className="link" to={"/calculator"}>
              Calculators
            </Link>
      <span></span><span></span><span></span><span></span>
    </li>
    <li>
    { (
              <Link className="link" to={"/admin"}>
                Admin
              </Link>
            ) }
      <span></span><span></span><span></span><span></span>
    </li>
   
  </ul>

  <ul>
   {!isAuth&&  <li>
    <Link className="link login"   to={"/login"}>
            LOGIN
          </Link>
    <span></span><span></span><span></span><span></span>
    </li>}
  { isAuth&&  <li>
    <Link className="link login" to={"/login"}>
    LOGOUT
          </Link>
    <span></span><span></span><span></span><span></span>
    </li>}
  </ul>
</nav>
    </>
  );
};
