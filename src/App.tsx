import { useEffect, useState } from "react";
import "./App.css";
import LunchMenuForm from "./components/LunchMenuForm";
import Roulette from "./components/Roulette";
import LunchMenuList from "./components/LunchMenuList";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [menus, setMenus] = useState<string[]>([]);
  const [company, setCompany] = useState<string>("loplat");
  const [isCompanySet, setIsCompanySet] = useState<boolean>(false);

  const addMenu = async (menu: string) => {
    await setDoc(doc(db, "menu", company), {
      menu: [...menus, menu],
    });
    setMenus([...menus, menu]);
  };

  const deleteMenu = async (index: number) => {
    const docRef = doc(db, "menu", company);
    await updateDoc(docRef, {
      menu: menus.filter((_, i) => i !== index),
    });
    const updatedMenus = [...menus];
    updatedMenus.splice(index, 1);
    setMenus(updatedMenus);
  };

  const getMenus = async () => {
    const docRef = doc(db, "menu", company);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setMenus(docSnap.data()?.menu);
    }
  };

  useEffect(() => {
    getMenus();
  }, [company]);

  return (
    <div className="App">
      <h1>점메추</h1>
      <h2>점심 메뉴 추천기</h2>
      <p>
        주식회사
        {isCompanySet ? (
          <>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <button onClick={() => setIsCompanySet(false)}>확인</button>
          </>
        ) : (
          <span onClick={() => setIsCompanySet(true)}> {company} </span>
        )}
      </p>
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
