import { useState } from "react";
import "./App.css";
import LunchMenuForm from "./components/LunchMenuForm";
import Roulette from "./components/Roulette";
import LunchMenuList from "./components/LunchMenuList";

function App() {
  const [menus, setMenus] = useState<string[]>([]);

  const addMenu = (menu: string) => {
    setMenus([...menus, menu]);
  };

  const deleteMenu = (index: number) => {
    const updatedMenus = [...menus];
    updatedMenus.splice(index, 1);
    setMenus(updatedMenus);
  };

  return (
    <div className="App">
      <h1>점메추</h1>
      <h2>점심 메뉴 추천기</h2>
      <p>주식회사 로플랫</p>
      <div className="App-container">
        <LunchMenuForm onAddMenu={addMenu} />
        <div style={{ display: "flex", gap: "100px" }}>
          <LunchMenuList menus={menus} onDelete={deleteMenu} />
          <Roulette menus={menus} />
        </div>
      </div>
    </div>
  );
}

export default App;
