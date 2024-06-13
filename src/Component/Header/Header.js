import sunIcon from "../../assests/icon-sun.svg";
import moonIcon from "../../assests/icon-moon.svg";
import "./Header.css";
const Header = ({ dark, changeMode }) => {
  return (
    <div className="Header">
      <h1>TODO</h1>
      <button onClick={changeMode} className="mode-btn">
        {!dark ? (
          <img src={moonIcon} alt="Moon Icon" />
        ) : (
          <img src={sunIcon} alt="Sun Icon" />
        )}
      </button>
    </div>
  );
};
export default Header;
