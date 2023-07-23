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
// import logo from "../Images/ProjectLogo.png"
export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <div className="mainContainer">
        <div className="child1">
          <div className="logoDiv">
            <h1 className="imgLogo">
              Tax <span className="spanTax">Tim</span>
            </h1>
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
          </div>
        </div>
        <div className="child2">
          <Link className="link login" to={"/login"}>
            LOGIN
          </Link>

          {/* SideBar */}
          <GiHamburgerMenu ref={btnRef} onClick={onOpen} className="burger" />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg={"#86c5ce"}>
              <DrawerCloseButton  color={"white"} mt={"3"}/>
              <DrawerHeader color={"white"} fontSize={"25"}>Save Tax</DrawerHeader>
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
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </>
  );
};

