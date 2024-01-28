import React from "react";

import list from "../../assets/data/test/data-for-list.json";

const TableCard = ({ titles }) => {
    const data = JSON.parse(JSON.stringify(list));

    return (
        <div className="card">
            <table className="table">
                <tr className="table__header">
                    {titles.map((title) => (
                        <th>{title}</th>
                    ))}
                </tr>
                {data.map((row) => (
                    <tr>
                        {Object.keys(row)
                            .slice(1)
                            .map((prop) => (
                                <td key={prop}>{row[prop]}</td>
                            ))}
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default TableCard;
