import React, { useState } from "react";

const LunchMenuForm: React.FC<{ onAddMenu: (menu: string) => void }> = ({
  onAddMenu,
}) => {
  const [menu, setMenu] = useState<string>("");

  const handleMenuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenu(e.target.value);
  };

  const handleAddMenu = () => {
    if (menu.trim() !== "") {
      onAddMenu(menu);
      setMenu("");
    }
  };

  return (
    <div>
      <h2>Register Lunch Menu</h2>
      <input type="text" value={menu} onChange={handleMenuChange} />
      <button onClick={handleAddMenu}>Add</button>
    </div>
  );
};

export default LunchMenuForm;
