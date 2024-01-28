import React from "react";

import { TableCard } from "../components/index";

const Dashboard = () => {
    return (
        <div>
            <TableCard
                titles={["Date", "Guest", "Room", "Status", "Check-out-date"]}
            />
        </div>
    );
};

export default Dashboard;
