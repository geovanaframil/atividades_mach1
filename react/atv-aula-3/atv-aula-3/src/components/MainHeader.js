import ButtonLink from "./ButtonLink";
import Title from "./Title";
import "./MainHeader.css";

function MainHeader({ link1, link2, link3 }) {
  return (
    <header className="header">
      <Title />
      <nav className="listDataPerson">
        <ButtonLink texto={link1} link={"https://github.com/geovanaframil"} />
        <ButtonLink
          texto={link2}
          link={"https://www.linkedin.com/in/geovana-framil/"}
        />
        <ButtonLink texto={link3} link={"https://www.youtube.com/"} />
      </nav>
    </header>
  );
}

export default MainHeader;
