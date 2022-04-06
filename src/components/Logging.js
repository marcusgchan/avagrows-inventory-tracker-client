import { useEffect, useState } from "react";
import DataGridContainer from "./DataGridContainer";
import MainHeading from "./MainHeading";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import logServices from "../services/logsServices";
import LayoutContainer from "./LayoutContainer";
import handleLoggingColumns from "../utils/loggingColumnsUtils";

function Logging() {
  const [rows, setRows] = useState([]);
  const columns = handleLoggingColumns();

  useEffect(() => {
    logServices
      .getLogs()
      .then((res) => {
        setRows(res.data);
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

export default Logging;
