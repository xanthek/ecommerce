import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => (
  <>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/signin">
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
