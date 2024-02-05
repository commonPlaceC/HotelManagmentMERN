import React from "react";

import { TableCard } from "../components/index";

const Dashboard = () => {
  return (
    <div>
      <TableCard
        titles={["Date", "Guest", "Room", "Status", "Check-out-date"]}
        type={"reservations"}
      />
      <TableCard
        titles={["Full Name", "Amount of Reservations"]}
        type={"users"}
      />
    </div>
  );
};

export default Dashboard;
