import { useState } from "react";
import style from "./Navbar.module.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      AV0CAD0
        <ul className={style.list}>
          <li className={style.listItem}>
            DESIGN
          </li>
          <li className={style.listItem}>
            DEVELOPMENT
          </li>
          <li className={style.listItem}>
            PRODUCTION
          </li>
          <li className={style.listItem}>
            PHOTOGRAPHY
          </li>
          <li className={style.listItem}>
            CONTACT
          </li>
        </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
         dvs
        </li>
        <li className={style.menuItem}>
          DESIGN
        </li>
        <li className={style.menuItem}>
          DEVELOPMENT
        </li>
        <li className={style.menuItem}>
          PRODUCTION
        </li>
        <li className={style.menuItem}>
         PHOTOGRAPHY
        </li>
        <li className={style.menuItem}>
         CONTACT
        </li>
      </ul>
    </div>
  );
};

export default Nav;