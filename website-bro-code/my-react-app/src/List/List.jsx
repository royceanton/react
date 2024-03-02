import styles from "./List.module.css";
import propTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className={styles.listCategory}>{category}</h3>
      <ol className={styles.listItems}>{listItems}</ol>
    </>
  );
}

List.defaultProps = {
  category: "Category",
  items: [
    // leave it as an empty array or use the below array
    // { id: 1, name: "Item 1", calories: 100 },
    // { id: 2, name: "Item 2", calories: 200 },
    // { id: 3, name: "Item 3", calories: 300 },
    // { id: 4, name: "Item 4", calories: 400 },
    // { id: 5, name: "Item 5", calories: 500 },
  ],
};

List.propTypes = {
  category: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      calories: propTypes.number,
    })
  ),
};

export default List;
