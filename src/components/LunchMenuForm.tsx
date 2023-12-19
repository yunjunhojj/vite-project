import React, { useState } from "react";

// firebase database 연동
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
    // form 태그는 onSubmit 이벤트가 발생하면 자동으로 새로고침이 되는데, 이를 방지하기 위해 preventDefault()를 호출
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddMenu();
      }}
    >
      <h2>Register Lunch Menu</h2>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <input type="text" value={menu} onChange={handleMenuChange} />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default LunchMenuForm;
