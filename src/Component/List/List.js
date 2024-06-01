import ListItem from "../ListItem/ListItem";
import "./List.css";
const List = ({ list }) => {
  return (
    <div className="List">
      {list.map((item) => {
        return (
          <li>
            <ListItem Content={item.Content} complete={item.complete} />
          </li>
        );
      })}
    </div>
  );
};
export default List;
