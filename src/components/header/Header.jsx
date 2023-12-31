import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import { ContentWrap } from "../hoc/ContentWrap";
import { LOGO } from "../../constants";
import "./headerStyles.scss";

import { useSearchData } from "../../hooks";

import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

export const Header = () => {
  const [show, setShow] = useState("top");

  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { query, onInputChange, handleSearchQuery } = useSearchData();

  const onShowHideSearchBar = () => {
    setShowSearch(!showSearch);
    setMobileMenu(false);
  };

  const onShowHideMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setShowSearch(false);
  };

  // Navigation
  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  const handleScrollNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNavbar);
    return () => {
      window.removeEventListener("scroll", handleScrollNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrap>
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={LOGO} alt="" />
        </Link>

        {/* Menu items */}
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            TV Shows
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={onShowHideSearchBar} />
          </li>
        </ul>

        {/* Mobile view menu */}
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={onShowHideSearchBar} />
          {mobileMenu ? (
            <VscChromeClose onClick={onShowHideMobileMenu} />
          ) : (
            <SlMenu onClick={onShowHideMobileMenu} />
          )}
        </div>
      </ContentWrap>

      {showSearch && (
        <div className="searchBar">
          <ContentWrap>
            <form onSubmit={handleSearchQuery} className="searchInput">
              <input
                type="text"
                placeholder="Search your fav movies or tv shows..."
                onChange={onInputChange}
                value={query}
              />
              <VscChromeClose onClick={onShowHideSearchBar} />
            </form>
          </ContentWrap>
        </div>
      )}
    </header>
  );
};
