import React, {Dispatch, SetStateAction, useContext} from "react";
import styles from './Header.module.css'
import {BsMoonFill} from "react-icons/bs";
import {DarkModeContext} from "../../states/DarkModeContext";
import {BsFillSunFill} from "react-icons/bs";
type HeaderProps = {
  filters: string[];
  filter: string;
  onFilterChange:  Dispatch<SetStateAction<string>>;
}

export default function Header({filters, filter, onFilterChange}: HeaderProps) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <header className={darkMode ? (styles.darkHeader) : (styles.header)}>
      <button className={darkMode ? (styles.darkMode) : (styles.mode) } onClick={() => toggleDarkMode()}>
          {darkMode ? (<BsFillSunFill />) : (<BsMoonFill />)}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
            <li key={index}>
              <button
                  className={
                  darkMode ? (
                      `${styles.darkFilter} ${filter === value && styles.selected}`)
                      : (`${styles.filter} ${filter === value && styles.selected}`)}
                  onClick={() => onFilterChange(value)}
              >{value}</button>
            </li>
        ))}
      </ul>
    </header>
  );
}