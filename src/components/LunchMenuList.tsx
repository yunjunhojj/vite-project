import React from "react";

const LunchMenuList: React.FC<{
  menus: string[];
  onDelete: (index: number) => void;
}> = ({ menus, onDelete }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Registered Lunch Menus</h2>
      <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {menus.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid black",
              padding: "16px",
              width: "250px",
            }}
          >
            {`${index + 1}번`}
            <span>{item}</span>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LunchMenuList;
