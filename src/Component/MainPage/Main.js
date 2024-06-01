import List from "../List/List";
import BackGround from "../../assests/bg-desktop-dark.jpg";
import "./Main.css";
const Main = ({ Todos }) => {
  return (
    <div className="container">
      <img src={BackGround} alt="background" className="bg-image" />
      <List list={Todos} />
    </div>
  );
};
export default Main;
