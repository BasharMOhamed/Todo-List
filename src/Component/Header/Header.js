import sunIcon from "../../assests/icon-sun.svg";
import moonIcon from "../../assests/icon-moon.svg";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/UI-Slice";
const Header = () => {
  const dark = useSelector((state) => state.ui.dark);
  const dispatch = useDispatch();
  return (
    <div className="Header">
      <h1>TODO</h1>
      <button
        onClick={() => dispatch(uiActions.changeMode())}
        className="mode-btn"
      >
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
