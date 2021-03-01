import { ListItem } from "../ListItem";
import React from "react";
import "./List.css";

export const List = (props) => {
  if (props.items.length === 0) {
    return <h2 className="List-title"> There are no characters</h2>;
  } else {
    const columns = window.matchMedia("(min-width: 768px)").matches ? 5 : 2;
    // Calc rows based on the number of columns
    const rows = [...Array(Math.ceil(props.items.length / columns))];
    // Chunk the items into rows
    const itemRows = rows.map((row, idx) =>
      props.items.slice(idx * columns, idx * columns + columns)
    );

    return (
      <section>
        <h2 className="List-title"> Characters List</h2>
        <div className="List">
          {itemRows.map((row, idx) => (
            <div className="List-row" key={idx}>
              {row.map((item) => (
                <ListItem
                  key={item.id}
                  character={item}
                  fav={props.favs.includes(item.id)}
                  onClick={() => props.onClick(item.id)}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  }
};
