import { useEffect, useState } from "react";
import "./RengeComponent.css";

function RangeComponent() {
  const [valorLeft, setValorLeft] = useState(0);
  const [valorRight, setValorRight] = useState(0);

  const handleClickLeft = (operacao) => {
    if (valorLeft < valorRight && operacao === "add") {
      setValorLeft(valorLeft + 1);
    } else {
      setValorLeft(valorLeft - 1);
    }
  };

  const handleClickRight = (operacao) => {
    if (operacao === "add") {
      setValorRight(valorRight + 1);
    } else {
      setValorRight(valorRight - 1);
    }
  };

  useEffect(() => {
    console.log(`Contador atualizado ${valorLeft}, ${valorRight}`);
  }, [valorLeft, valorRight]);

  return (
    <div className="container">
      <div className="leftRight">
        <button onClick={() => handleClickLeft("remove")}>-</button>
        <p>LEFT {valorLeft}</p>
        <button onClick={() => handleClickLeft("add")}>+</button>
      </div>
      <div className="leftRight">
        <button onClick={() => handleClickRight("remove")}>-</button>
        <p>RIGHT {valorRight}</p>
        <button onClick={() => handleClickRight("add")}>+</button>
      </div>
    </div>
  );
}

export default RangeComponent;
