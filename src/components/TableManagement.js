import { useState, useEffect } from "react";
import Table from "./Table";
import TableHeaderComponent from "./TableHeaderContainer";
import { tableManagementHeadings } from "../configs/tableHeadingsConfig";
import useModalToggle from "../custom-hooks/useModalToggle";
import LayoutContainer from "./LayoutContainer";
import MainHeading from "./MainHeading";
import TableButton from "./TableButton";
import TableSelectMenu from "./TableSelectMenu";

function TableManagement() {
  const [rows, setRows] = useState([]);
  const [selectMenu, setSelectMenu] = useState("");

  const [showAddModal, toggleAddModal] = useModalToggle();
  const [showDeleteModal, toggleDeleteModal] = useModalToggle();
  const [showEditModal, toggleEditModal] = useModalToggle();

  function selectRows() {}

  useEffect(() => {}, []);

  return (
    <LayoutContainer>
      <MainHeading>table management</MainHeading>
      <TableHeaderComponent>
        <TableSelectMenu
          value={selectMenu}
          onChange={(e) => setSelectMenu(e.target.value)}
        >
          <option>locations</option>
          <option>statuses</option>
          <option>parts</option>
          <option>manufactures</option>
          <option>users</option>
          <option>part categories</option>
        </TableSelectMenu>
        <TableButton>+ add</TableButton>
      </TableHeaderComponent>
      <Table
        headings={tableManagementHeadings}
        defaultSortedHeading="status_id"
        toggleDeleteModal={toggleDeleteModal}
        toggleEditModal={toggleEditModal}
        rows={rows}
        selectRow={selectRows}
      />
    </LayoutContainer>
  );
}

export default TableManagement;
