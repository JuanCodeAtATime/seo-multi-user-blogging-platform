import { useState } from "react";
import Link from "next/link";
// import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import Router from "next/router";
import NProgress from "nprogress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faList,
  faLaptopCode,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import ".././node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="navbar">
        <Link href="/">
          <NavLink className="font-weight-bold">
            <h2 id="logo">
              <FontAwesomeIcon icon={faCodeBranch} /> coder
              <span style={{ color: "#5bc0de" }}>Connect</span>
            </h2>
          </NavLink>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="navtoggler">
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon
                  icon={faList}
                  style={{
                    color: "white",
                    fontSize: "1.9rem",
                  }}
                />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link href="/blogs">
                    <NavLink className="listItems">Blogs</NavLink>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="#">
                    <NavLink className="listItems">Q & A</NavLink>
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <React.Fragment>
              <NavItem>
               
              </NavItem>
            </React.Fragment> */}

            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href="/signin">
                    <NavLink className="navItems">
                      <button
                        className="btn landingAuth"
                        style={{
                          backgroundColor: "transparent",
                          border: "solid #5bc0de 1.6px",
                        }}
                      >
                        {" "}
                        sign-in
                      </button>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink className="navItems">
                      <button
                        className="btn landingAuth"
                        style={{
                          backgroundColor: "transparent",
                          border: "solid #5bc0de 1.6px",
                        }}
                      >
                        {" "}
                        sign-up
                      </button>
                    </NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink className="navItems">
                    {" "}
                    {`${isAuth().name}'s Dashboard`}
                  </NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink className="navItems">
                    <FontAwesomeIcon icon={faLaptopCode} />{" "}
                    {`${isAuth().name}'s Dashboard`}
                  </NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink
                  className="navItems"
                  onClick={() => signout(() => Router.replace("/signin"))}
                >
                  <FontAwesomeIcon icon={faDoorOpen} /> Signout
                </NavLink>
              </NavItem>
            )}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
