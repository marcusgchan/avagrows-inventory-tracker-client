import { useState, useEffect } from "react";
import Table from "./Table";
import TableHeaderComponent from "./TableHeaderContainer";
import { tableManagementHeadings } from "../configs/tableHeadingsConfig";
function TableManagement() {
  const [rows, setRows] = useState([]);

  useEffect(() => {}, []);
  return (
    <div>
      TM
      {/* <Table
        headings={tableManagementHeadings}
        defaultSortedHeading="status_id"
      /> */}
    </div>
  );
}

export default TableManagement;
