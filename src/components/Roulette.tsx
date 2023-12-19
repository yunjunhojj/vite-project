import { useState } from "react";
import { styled } from "styled-components";
import { Wheel } from "react-custom-roulette";

const Roulette = ({
  menus = ["가지", "고구마", "감자"],
}: {
  menus: string[];
}) => {
  const [mustSpin, setMustSpin] = useState<boolean>(false);

  // string[] -> { option: '0', style: { backgroundColor: 'green', textColor: 'black' } }[] 로 변환
  // 단, backgroundColor, textColor는 랜덤으로 생성
  const transformMenus = (menus: string[]) => {
    const transformedMenus = menus.map((menu) => {
      // 단, backgroundColor, textColor는 랜덤으로 생성
      const backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      const textColor = "#ffffff";
      return {
        option: menu,
        style: { backgroundColor, textColor },
      };
    });
    return transformedMenus;
  };

  if (menus.length === 0) {
    return <div>메뉴를 등록해주세요.</div>;
  }

  return (
    <Wrapper>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={3}
        data={transformMenus(menus)}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
      />
      <button onClick={() => setMustSpin(true)}>Spin</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .roulette {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wheel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid #007bff;
    position: relative;
    transition: transform 3s ease-out;
    transform-origin: center;
    margin: 20px;
  }

  .spin {
    animation: spin 3s linear infinite;
  }

  .item {
    position: absolute;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    border: 2px solid #007bff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
  }

  .result {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export default Roulette;
