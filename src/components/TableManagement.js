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
      default:
    }
  }, [state.selectMenu]);

  // Modal toggles
  const [showAddModal, toggleAddModal] = useModalToggle();
  const [showDeleteModal, toggleDeleteModal] = useModalToggle();
  const [showEditModal, toggleEditModal] = useModalToggle();

  function selectRows() {}

  return (
    <LayoutContainer>
      <MainHeading>table management</MainHeading>
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
          <option value="manufactures">manufactures</option>
          <option value="users">users</option>
          <option value="partsCategories">part categories</option>
        </TableSelectMenu>
        <TableButton>+ Add</TableButton>
      </TableHeaderComponent>
      <Table
        {...state}
        toggleDeleteModal={toggleDeleteModal}
        toggleEditModal={toggleEditModal}
        selectRow={selectRows}
      />
    </LayoutContainer>
  );
}

export default TableManagement;
