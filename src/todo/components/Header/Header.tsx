import React, {Dispatch, SetStateAction} from "react";
import styles from './Header.module.css'
import {BsMoonFill} from "react-icons/bs";
import {useDarkMode} from "../../context/DarkModeContext";
import {HiMoon, HiSun} from "react-icons/hi";
type HeaderProps = {
  filters: string[];
  filter: string;
  onFilterChange:  Dispatch<SetStateAction<string>>;
}

export default function Header({filters, filter, onFilterChange}: HeaderProps) {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <header className={styles.header}>
        <button onClick={toggleDarkMode} className={styles.toggle}>
            {!darkMode && <HiMoon />}
            {darkMode && <HiSun />}
        </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
            <li key={index}>
              <button
                  className={`${styles.filter} ${filter === value && styles.selected}`}
                  onClick={() => onFilterChange(value)}
              >{value}</button>
            </li>
        ))}
      </ul>
    </header>
  );
}