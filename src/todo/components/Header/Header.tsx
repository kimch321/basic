import React, {Dispatch, SetStateAction} from "react";

type HeaderProps = {
  filters: string[];
  filter: string;
  onFilterChange:  Dispatch<SetStateAction<string>>;
}

export default function Header({filters, filter, onFilterChange}: HeaderProps) {
  return (
    <header>
      <ul>
        {filters.map((value, index) => (
            <li key={index}>
              <button onClick={() => onFilterChange(value)}>{value}</button>
            </li>
        ))}
      </ul>
    </header>
  );
}