import { useState } from "react";
import Table from "./Table";
import TableHeaderComponent from "./TableHeaderContainer";
import useModalToggle from "../custom-hooks/useModalToggle";
import LayoutContainer from "./LayoutContainer";
import MainHeading from "./MainHeading";
import TableButton from "./TableButton";
import TableSelectMenu from "./TableSelectMenu";
import useFetch from "../custom-hooks/useFetch";
import tableServices from "../services/tableServices";
import { statusHeadings, statusConfig } from "../configs/tableHeadingsConfig";

function TableManagement() {
  const [selectMenu, setSelectMenu] = useState("status");
  const [rows, setRows] = useFetch(tableServices.getStatuses);

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
          value={selectMenu}
          onChange={(e) => setSelectMenu(e.target.value)}
        >
          <option value="locations">locations</option>
          <option value="statuses">statuses</option>
          <option value="parts">parts</option>
          <option value="manufactures">manufactures</option>
          <option value="users">users</option>
          <option value="partsCategories">part categories</option>
        </TableSelectMenu>
        <TableButton>+ add</TableButton>
      </TableHeaderComponent>
      <Table
        tableConfig={statusConfig}
        headings={statusHeadings}
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
