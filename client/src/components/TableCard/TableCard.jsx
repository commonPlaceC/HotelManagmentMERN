import React, { useState, useEffect } from "react";

const TableCard = ({ titles, type }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`/api/${type}`);
      const json = await response.json();
      if (response.ok) {
        if (type === "reservations") {
          setItems(
            json.map((element) => {
              let simplifiedElement = (({
                date,
                guestName,
                roomNumber,
                status,
                outDate,
              }) => ({ date, guestName, roomNumber, status, outDate }))(
                element
              );
              simplifiedElement.date = new Date(
                simplifiedElement.date
              ).toLocaleDateString();
              return simplifiedElement;
            })
          );
        } else {
          //need to add: simplified_data for guests table
          setItems(json);
        }
      }
    };
    fetchItems();
  }, [type]);

  return (
    <div className="card">
      <table className="table">
        <tr className="table__header">
          {titles.map((title) => (
            <th>{title}</th>
          ))}
        </tr>
        {items ? (
          items.map((item) => (
            <tr key={item._id}>
              {Object.keys(item).map((prop) => (
                <td>{item[prop]}</td>
              ))}
            </tr>
          ))
        ) : (
          <h2>nothing</h2>
        )}
      </table>
    </div>
  );
};

export default TableCard;
