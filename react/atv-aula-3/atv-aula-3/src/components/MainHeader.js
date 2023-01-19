import ButtonLink from "./ButtonLink";
import "./MainHeader.css"

function MainHeader({link1, link2, link3}) {
  return (
    <nav className="listDataPerson">
      <ButtonLink texto={link1} link={'https://github.com/geovanaframil'} />
      <ButtonLink texto={link2} link={'https://www.linkedin.com/in/geovana-framil/'} />
      <ButtonLink texto={link3} link={'https://www.youtube.com/'} />
    </nav>
  );
}

export default MainHeader;