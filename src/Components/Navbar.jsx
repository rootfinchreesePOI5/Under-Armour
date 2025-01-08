import React, { useContext, useState } from "react";
import logo from "../assets/Icons/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { category } from "../assets/pages";
import search from "../assets/Icons/search_icon.svg";
import cart from "../assets/Icons/cart_icon.svg";
import like from "../assets/Icons/like.svg";
import Profile_img from "../assets/Images/profile.png";
import arrow from "../assets/Icons/arrow.svg";
import menu_icon from "../assets/Icons/menu.svg";
import x from "../assets/Icons/menu_x.svg";
import { ShopContext } from "../Context/ShopContext";

const Navbar = ({ login, setStatus, type, setType, token, setToken }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [drop, setDrop] = useState(false);
  const { account } = useContext(ShopContext);
  const statusChange = () => {
    login === false ? setStatus(true) : setStatus(false);
  };
  const ShowDropdown = () => {
    drop === true ? setDrop(false) : setDrop(true);
  };
  const OpenMenu = () => {
    menu === false ? setMenu(true) : setMenu(false);
    if(login === true){
      setMenu(false)
    }
  };

  return (
    <div className="Header">
      <div className="top_header">
        <div></div>
        <p className="copy">
          Free U.S. Standard Shipping Orders $50+ & FREE Returns
        </p>
        <div className="Help">
          <p>Need Help?</p>
          <p>English</p>
          <div className="auth">
            {token === false ? (
              <div className="auth">
                <p
                  onClick={() => {
                    statusChange(), setType("register");
                  }}
                >
                  Register
                </p>
                <hr />
                <p
                  onClick={() => {
                    statusChange(), setType("login");
                  }}
                >
                  Log in
                </p>
              </div>
            ) : (
              <div className="profile"> <img
                  onClick={() => {
                    navigate("/profile"), scrollTo(0, 0);
                  }}
                  src={Profile_img}
                  alt=""
                />
                <img onClick={ShowDropdown} src={arrow} alt="" />
                <div
                  className="dropdown"
                  style={
                    drop === false ? { display: "none" } : { display: "block" }
                  }
                >
                  <div className="drop-items">
                    <button
                      onClick={() => {
                        navigate("/profile"), scrollTo(0, 0);
                      }}
                    >
                      Your Account
                    </button>
                    <button
                      onClick={() => {
                        setToken(false), navigate("/");
                      }}
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="Navbar">
        <img
          className="logo"
          onClick={() => {
            navigate("/"), scrollTo(0, 0);
          }}
          src={logo}
          alt=""
        />
        <ul className="navlinks">
          {category.map((item, index) => (
            <NavLink
              onClick={() => {
                scrollTo(0, 0);
              }}
              key={index}
              to={`/categories${item.path}`}
            >
              <p>{item.name}</p>
            </NavLink>
          ))}
          <NavLink
            onClick={() => {
              scrollTo(0, 0);
            }}
            to={`/Curry`}
          >
            <p>Curry</p>
          </NavLink>
          <NavLink
            onClick={() => {
              scrollTo(0, 0);
            }}
            to={`/Collections`}
          >
            <p>Collections</p>
          </NavLink>
        </ul>
        <div className="find">
          <div className="search">
            <input type="text" placeholder="Search UA" />
            <img src={search} alt="" />
          </div>
          <div className="like_cart">
            <img onClick={() =>{navigate("/LikedItems"), scrollTo(0,0)} } src={like} alt="" />
            <img onClick={() =>{navigate("/cart"), scrollTo(0 , 0)} } src={cart} alt="" />
          </div>
        </div>

        <img
          className="menu_icon"
          onClick={OpenMenu}
          src={menu === false ? menu_icon : x}
          alt=""
        />

        {/* menu */}
        <div
          style={
            menu === false
              ? { transform: "translateX(-100%)", transition: "0.4s ease" }
              : { transform: "translateX(0)", transition: "0.4s ease" }
          }
          className="menu-dropdown"
        >
          <ul className="menulinks">
            {category.map((item, index) => (
              <NavLink
                onClick={() => {
                  setMenu(false), scrollTo(0, 0);
                }}
                key={index}
                to={`/categories${item.path}`}
              >
                <p>{item.name}</p>
              </NavLink>
            ))}
          </ul>
          <div className="auth">
            {token === false ? (
              <div className="auth">
                <p
                  onClick={() => {
                    scrollTo(0, 0), setStatus(true) , setMenu(false) , setType("register");
                  }}
                >
                  Register
                </p>
                <hr />
                <p
                  onClick={() => {
                    scrollTo(0, 0), setStatus(true) , setMenu(false),  setType("login");
                  }}
                >
                  Log in
                </p>
              </div>
            ) : (
              <div className="profile">
                <img
                  onClick={() => {
                    navigate("/profile"), scrollTo(0, 0);
                  }}
                  src={Profile_img}
                  alt=""
                />
                <img onClick={ShowDropdown} src={arrow} alt="" />
                <div
                  className="dropdown"
                  style={
                    drop === false ? { display: "none" } : { display: "block" }
                  }
                >
                  <div className="drop-items">
                    <button
                      onClick={() => {
                        navigate("/profile"), scrollTo(0, 0), setMenu(false);
                      }}
                    >
                      Your Account
                    </button>
                    <button
                      onClick={() => {
                        setToken(false), navigate("/"), setMenu(false);
                      }}
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
