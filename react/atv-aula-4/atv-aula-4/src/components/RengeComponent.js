import { useEffect, useState } from "react";
import "./RengeComponent.css";

function RangeComponent() {
  const [valorLeft, setValorLeft] = useState(0);
  const [valorRight, setValorRight] = useState(0);

  const diminuiValorLeft = () => {
    setValorLeft(valorLeft - 1);
  };

  const aumentaValorLeft = () => {
    if (valorLeft === valorRight) {
      return alert(`Valor do botão left não pode ser maior que ${valorRight}`);
    }
    setValorLeft(valorLeft + 1);
  };

  const diminuiValorRight = () => {
    if (valorRight === valorLeft) {
      return alert(`Valor do botão right não pode ser menor que ${valorLeft}`);
    }
    setValorRight(valorRight - 1);
  };

  const aumentaValorRight = () => {
    setValorRight(valorRight + 1);
  }

  useEffect(() => {
    console.log(`Contador atualizado ${valorLeft}, ${valorRight}`);
  }, [valorLeft, valorRight]);

  return (
    <div className="container">
      <div className="leftRight">
        <button onClick={() => diminuiValorLeft()}>-</button>
        <p>LEFT {valorLeft}</p>
        <button onClick={() => aumentaValorLeft()}>+</button>
      </div>
      <div className="leftRight">
        <button onClick={() => diminuiValorRight()}>-</button>
        <p>RIGHT {valorRight}</p>
        <button onClick={() => aumentaValorRight()}>+</button>
      </div>
    </div>
  );
}

export default RangeComponent;
