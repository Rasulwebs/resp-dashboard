import React, { forwardRef  } from "react";
import { NavLink } from "react-router-dom";
import NavItems from '../navbar/NavItems';


import "./Sidebar.css";

const Sidebar = forwardRef((props , navigation) => {
  
    // let navItem = useRef();

  return (
    <>
      <div className="min-hight">
        <div className="navigation" ref={navigation}>
          <ul className="sidebar-list">
            <li className="sidebar-logo">
            <NavLink to={'/home'} className='nav-logo'>
              <i className="fa-solid fa-warehouse"></i>
              Textile
            </NavLink>
            </li>
            <NavItems
              spanClass="icon"
              iconName="fa-solid fa-shirt"
              spanClassName="title"
              itemName="Bichim bo'limi"
              link="/home/size"
            />
            <NavItems
              spanClass="icon"
              iconName="fa-solid fa-vest"
              spanClassName="title"
              itemName="Tikish bo'limi"
              link="/home/sewing"
            />
             <NavItems
              spanClass="icon"
              iconName="fa-solid fa-vest-patches"
              spanClassName="title"
              itemName="To'quv bo'limi"
              link="/home/crochet"
            />
            <NavItems
              spanClass="icon"
              iconName="bi bi-inbox"
              spanClassName="title"
              itemName="Qadoqlash bo'limi"
              link="/home/packaging"
            />
             <NavItems
              spanClass="icon"
              iconName="bi bi-coin"
              spanClassName="title"
              itemName="Oyliklar"
              link="/home/salaries"
            />
            <NavItems
              spanClass="icon"
              iconName="bi bi-currency-dollar"
              spanClassName="title"
              itemName="Kunlik chiqim"
              link="/home/dailyoutput"
            />
            <NavItems
              spanClass="icon"
              iconName="bi bi-wallet"
              spanClassName="title"
              itemName="Tashqi xarajatlar"
              link="/home/outgoings"
            />
            <NavItems
              spanClass="icon"
              iconName="bi bi-gear"
              spanClassName="title"
              itemName="Settings"
              link="/home/settings"
            />
          </ul>
        </div>
      </div>
    </>
  );
});

export default Sidebar;