import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./sidebar.css";
import { menus } from "../../constants/constants";
import Button from "../../components/Button/Button";

const Sidebar = () => {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <nav className="sidebar">
      <div className="sidebar-top">
        <img src={logo} alt="" />
        <p>
          Crypto<span>Board</span>
        </p>
      </div>
      <ul className="sidebar-menu">
        {menus.map((e, i) => (
          <li key={i} onClick={() => setSelectIndex(i)} className={selectIndex === i ? "active" : ""}>
            <e.icon size={24} />
            <p>{e.name}</p>
            {selectIndex === i ? <div className="indicator"></div> : <></>}
          </li>
        ))}
      </ul>
      <Button />
    </nav>
  );
};

export default Sidebar;
