import { NavLink, useLocation } from "react-router-dom";
// import { scrollToElement } from "../../../util/scrollTo/scrollTo";
import "./NavbarLinkStyle.css";
import { useContext } from "react";
import { ScrollToContext } from "../../../util/context/scrollToProvider/ScrollToProvider";
import { Link } from "react-scroll";

const NavbarLink = ({ navbarLink, isDrawerOpen, setIsDrawerOpen, classes }) => {
  const { setScrollTo } = useContext(ScrollToContext);
  const HomePage = useLocation();
  const isHome = navbarLink === "HOME";
  const isAboutUs = navbarLink === "ABOUT US";
  const isServices = navbarLink === "SERVICES";
  const isContactUs = navbarLink === "CONTACT US";

  // const isLetsTalk = navbarLink === "LET'S TALK";
  // const checkPathName = isAboutUs || isServices || isContactUs;
  // const isHomePage = isHome ? "/" : null;
  // const isLetsTalkPage = isLetsTalk ? "/lets-talk" : null;

  // const handleScroll = (e) => {
  //   e.preventDefault();
  //   const target = e.target.getAttribute("href");
  //   const location = document.getElementById(target);
  //   // const duration = 1000;
  //   // const offset = 180;
  //   console.log("a location", location.offsetTop);
  //   console.log("b location", location.offsetHeight);

  //   if (target === "home") {
  //     location.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }

  //   // location.scrollIntoView({
  //   //   behavior: "smooth",
  //   //   block: "nearest",
  //   //   inline: "nearest",
  //   // });

  //   // scrollToElement(location, duration, offset);

  //   if (isDrawerOpen !== undefined) {
  //     setIsDrawerOpen(false);
  //   }
  // };

  const handler = (e) => {
    if (e.target.innerText === "HOME") {
      setScrollTo(0);
      console.log("asd");
    }

    if (e.target.innerText === "ABOUT US") {
      setScrollTo(1000);
      console.log("gfhfgh");
    }
  };

  return (
    <>
      {HomePage.pathname === "/" && isHome && (
        <Link to="home" spy={true} smooth={true} offset={-300} duration={3000}>
          {navbarLink}
        </Link>

        // <a className="nav-link" href="home" onClick={handleScroll}>
        //   {navbarLink}
        // </a>
      )}

      {HomePage.pathname !== "/" && isHome && (
        <NavLink to="/" onClick={handler}>
          {navbarLink}
        </NavLink>
      )}

      {HomePage.pathname === "/" && isAboutUs && (
        <Link to="about" spy={true} smooth={true} offset={-150} duration={2000}>
          {navbarLink}
        </Link>
        // <a className="nav-link" href="about" onClick={handleScroll}>
        //   {navbarLink}
        // </a>
      )}

      {HomePage.pathname !== "/" && isAboutUs && (
        <NavLink to="/" onClick={handler}>
          {navbarLink}
        </NavLink>
      )}

      {HomePage.pathname === "/" && isServices && (
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-150}
          duration={2000}
        >
          {navbarLink}
        </Link>
        // <a className="nav-link" href="services" onClick={handleScroll}>
        //   {navbarLink}
        // </a>
      )}

      {HomePage.pathname === "/" && isContactUs && (
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-150}
          duration={8000}
        >
          {navbarLink}
        </Link>
        // <a className="nav-link" href="contact" onClick={handleScroll}>
        //   {navbarLink}
        // </a>
      )}

      {/* {(isHome || isLetsTalk) && (
        <NavLink
          to={isHome ? isHomePage : isLetsTalkPage}
          className={({ isActive }) => (isActive ? classes : undefined)}
          onClick={() => isDrawerOpen !== undefined && setIsDrawerOpen(false)}
        >
          {navbarLink}
        </NavLink>
      )}

      {checkPathName && isHome && (
        <a className="nav-link" href="home" onClick={linkHandler}>
          {navbarLink}
        </a>
      )}

      {checkPathName && isAboutUs && (
        <a className="nav-link" href="about" onClick={linkHandler}>
          {navbarLink}
        </a>
      )}

      {checkPathName && isServices && (
        <a className="nav-link" href="services" onClick={linkHandler}>
          {navbarLink}
        </a>
      )}
      {checkPathName && isContactUs && (
        <a className="nav-link" href="contact" onClick={linkHandler}>
          {navbarLink}
        </a>
      )} */}
    </>
  );
};

export default NavbarLink;
