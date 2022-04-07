import DataGridContainer from "./DataGridContainer";
import MainHeading from "./MainHeading";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import logServices from "../services/logsServices";
import LayoutContainer from "./LayoutContainer";
import handleLoggingColumns from "../utils/loggingColumnsUtils";
import useFetch from "../custom-hooks/useFetch";

function Logging() {
  const [rows] = useFetch(logServices.getLogs);
  const columns = handleLoggingColumns();

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
