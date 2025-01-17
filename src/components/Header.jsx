// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Header.module.css"

function Header() {
  return (
    <header>
      <h1>
        로고 둘 곳
      </h1>
      <ul className={styles.header__list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">데이터 불러오기</Link>
        </li>
        <li>
          <Link to="/submit">Submit</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;