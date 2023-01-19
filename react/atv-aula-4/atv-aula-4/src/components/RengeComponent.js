import { useEffect, useState } from "react";

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
    <div>
      <div>
        <button onClick={() => handleClickLeft("remove")}>-</button>
        <p>Left {valorLeft}</p>
        <button onClick={() => handleClickLeft("add")}>+</button>
      </div>
      <div>
        <button onClick={() => handleClickRight("remove")}>-</button>
        <p>Right {valorRight}</p>
        <button onClick={() => handleClickRight("add")}>+</button>
      </div>
    </div>
  );
}

export default RangeComponent;
