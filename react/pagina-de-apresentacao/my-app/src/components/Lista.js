import Item from "./Item";

function Lista(props) {
  return (
    <ul>
      {props.textos.map((valor) => {
        return <Item ativo texto={valor} />;
      })}
    </ul>
  );
}

export default Lista;
