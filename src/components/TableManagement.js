import { useEffect, useReducer } from "react";
import Table from "./Table";
import TableHeaderComponent from "./TableHeaderContainer";
import useModalToggle from "../custom-hooks/useModalToggle";
import LayoutContainer from "./LayoutContainer";
import MainHeading from "./MainHeading";
import TableButton from "./TableButton";
import TableSelectMenu from "./TableSelectMenu";
import tableServices from "../services/tableServices";
import tableManagementReducer, {
  DEFAULT_STATE,
} from "../reducers/tableManagementReducer";
import ModalContainer from "./ModalContainer";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

function TableManagement() {
  const [state, dispatch] = useReducer(tableManagementReducer, DEFAULT_STATE);

  // Fetch data based on select menu
  useEffect(() => {
    switch (state.selectMenu) {
      case "status":
        tableServices
          .getStatuses()
          .then((res) => dispatch({ type: "STATUS", payload: res.data }))
          .catch((e) => console.log(e));
        break;
      case "location":
        tableServices
          .getLocations()
          .then((res) => dispatch({ type: "LOCATION", payload: res.data }))
          .catch((e) => console.log(e));
        break;
      case "parts":
        tableServices
          .getParts()
          .then((res) => dispatch({ type: "PART", payload: res.data }))
          .catch((e) => console.log(e));
        break;
      case "partCategories":
        tableServices
          .getCategories()
          .then((res) => dispatch({ type: "CATEGORY", payload: res.data }))
          .catch((e) => console.log(e));
        break;
      case "users":
        tableServices
          .getUsers()
          .then((res) => dispatch({ type: "USER", payload: res.data }))
          .catch((e) => console.log(e));
        break;
      default:
    }
  }, [state.selectMenu]);

  // Modal toggles
  const [showAddModal, toggleAddModal] = useModalToggle();
  const [showDeleteModal, toggleDeleteModal] = useModalToggle();
  const [showEditModal, toggleEditModal] = useModalToggle();

  function selectRow(id) {
    // gets the row object that has the serial
    dispatch({
      type: "UPDATE_SELECTED_ROW",
      payload: state.rows.find(
        (element) => element[state.config.uniqueId] === id
      ),
    });
  }

  function handleModals() {
    return (
      <>
        {showAddModal && (
          <ModalContainer>
            <AddModal
              toggleModal={toggleAddModal}
              config={state.modalConfig}
              tableType={state.selectMenu}
              addRow={state.handleAdding}
              dispatch={dispatch}
            />
          </ModalContainer>
        )}
        {showDeleteModal && (
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
        )}
        {showEditModal && (
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
        )}
      </>
    );
  }

  return (
    <LayoutContainer>
      <MainHeading>table management</MainHeading>
      {handleModals()}
      <TableHeaderComponent>
        <TableSelectMenu
          value={state.selectMenu}
          onChange={(e) =>
            dispatch({ type: "UPDATE_SELECT_MENU", payload: e.target.value })
          }
        >
          <option value="status">status</option>
          <option value="location">location</option>
          <option value="parts">parts</option>
          <option value="users">users</option>
          <option value="partCategories">part categories</option>
        </TableSelectMenu>
        <TableButton onClick={toggleAddModal}>+ Add</TableButton>
      </TableHeaderComponent>
      <Table
        {...state}
        toggleDeleteModal={toggleDeleteModal}
        toggleEditModal={toggleEditModal}
        selectRow={selectRow}
      />
    </LayoutContainer>
  );
}

export default TableManagement;
