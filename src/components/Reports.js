import { useEffect, useState } from "react";
import DataGridContainer from "./DataGridContainer";
import MainHeading from "./MainHeading";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import logServices from "../services/logsServices";
import LayoutContainer from "./LayoutContainer";
import handleReportsColumns from "../utils/reportsColumnsUtils";

function Reports() {
  const [rows, setRows] = useState([]);
  const columns = handleReportsColumns();

  useEffect(() => {
    logServices
      .getLogs()
      .then((res) => {
        setRows(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <LayoutContainer>
      <MainHeading>Logging</MainHeading>
      <DataGridContainer>
        <DataGrid
          rows={rows}
          getRowId={(row) => row.log_id}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          disableSelectionOnClick
        />
      </DataGridContainer>
    </LayoutContainer>
  );
}

export default Reports;
