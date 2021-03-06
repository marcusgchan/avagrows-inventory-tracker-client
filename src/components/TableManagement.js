import { useEffect, useReducer } from "react";
import TableHeaderComponent from "./TableHeaderContainer";
import useModalToggle from "../custom-hooks/useModalToggle";
import LayoutContainer from "./LayoutContainer";
import MainHeading from "./MainHeading";
import TableButton from "./TableButton";
import SelectMenu from "./SelectMenu";
import tableServices from "../services/tableServices";
import tableManagementReducer, {
  DEFAULT_STATE,
} from "../reducers/tableManagementReducer";
import ModalContainer from "./ModalContainer";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import HandleModalDisplay from "./HandleModalDisplay";
import DataGridContainer from "./DataGridContainer";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import handleTmColumns from "../utils/tmColumnsUtils";
import styles from "./styles/TableManagement.module.css";

function TableManagement() {
  const [state, dispatch] = useReducer(tableManagementReducer, DEFAULT_STATE);

  // Fetch data based on select menu
  useEffect(() => {
    let ignore = false;
    switch (state.selectMenu) {
      case "status":
        tableServices
          .getStatuses()
          .then((res) => {
            if (!ignore) {
              dispatch({ type: "STATUS", payload: res.data });
            }
          })
          .catch((e) => console.log(e));
        break;
      case "location":
        tableServices
          .getLocations()
          .then((res) => {
            if (!ignore) {
              dispatch({ type: "LOCATION", payload: res.data });
            }
          })
          .catch((e) => console.log(e));
        break;
      case "parts":
        tableServices
          .getParts()
          .then((res) => {
            if (!ignore) {
              dispatch({ type: "PART", payload: res.data });
            }
          })
          .catch((e) => console.log(e));
        break;
      case "partCategories":
        tableServices
          .getCategories()
          .then((res) => {
            if (!ignore) {
              dispatch({ type: "CATEGORY", payload: res.data });
            }
          })
          .catch((e) => console.log(e));
        break;
      case "users":
        tableServices
          .getUsers()
          .then((res) => {
            if (!ignore) {
              dispatch({ type: "USER", payload: res.data });
            }
          })
          .catch((e) => console.log(e));
        break;
      default:
    }
    return () => (ignore = true);
  }, [state.selectMenu]);

  // Modal toggles
  const [showAddModal, toggleAddModal] = useModalToggle();
  const [showDeleteModal, toggleDeleteModal] = useModalToggle();
  const [showEditModal, toggleEditModal] = useModalToggle();

  function selectRow(id) {
    dispatch({
      type: "UPDATE_SELECTED_ROW",
      payload: state.rows.find((element) => {
        return element[state.config.uniqueId] === id;
      }),
    });
  }

  const columns = handleTmColumns(
    state.selectMenu,
    selectRow,
    toggleEditModal,
    toggleDeleteModal
  );

  return (
    <LayoutContainer>
      <HandleModalDisplay isDisplayed={showAddModal}>
        <ModalContainer>
          <AddModal
            toggleModal={toggleAddModal}
            config={state.modalConfig}
            tableType={state.selectMenu}
            addRow={state.handleAdding}
            dispatch={dispatch}
          />
        </ModalContainer>
      </HandleModalDisplay>
      <HandleModalDisplay isDisplayed={showDeleteModal}>
        <ModalContainer>
          <DeleteModal
            toggleModal={toggleDeleteModal}
            config={state.modalConfig}
            selectedRow={state.selectedRow}
            deleteRow={state.handleDeleting}
            dispatch={dispatch}
            tableType={state.selectMenu}
          />
        </ModalContainer>
      </HandleModalDisplay>
      <HandleModalDisplay isDisplayed={showEditModal}>
        <ModalContainer>
          <EditModal
            toggleModal={toggleEditModal}
            config={state.modalConfig}
            selectedRow={state.selectedRow}
            editRow={state.handleEditing}
            dispatch={dispatch}
            tableType={state.selectMenu}
          />
        </ModalContainer>
      </HandleModalDisplay>
      <MainHeading>table management</MainHeading>
      <TableHeaderComponent>
        <SelectMenu
          value={state.selectMenu}
          className={styles.searchInput}
          onChange={(e) =>
            dispatch({ type: "UPDATE_SELECT_MENU", payload: e.target.value })
          }
        >
          <option value="status">status</option>
          <option value="location">location</option>
          <option value="parts">parts</option>
          <option value="users">users</option>
          <option value="partCategories">part categories</option>
        </SelectMenu>
        <TableButton onClick={toggleAddModal}>+ Add</TableButton>
      </TableHeaderComponent>
      <DataGridContainer>
        <DataGrid
          rows={state.rows}
          columns={columns}
          getRowId={state.getRowId}
          components={{ Toolbar: GridToolbar }}
          disableSelectionOnClick
        />
      </DataGridContainer>
    </LayoutContainer>
  );
}

export default TableManagement;
