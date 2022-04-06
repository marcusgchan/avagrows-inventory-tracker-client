import { useState, useReducer, useRef } from "react";
import ModalContainer from "./ModalContainer";
import AddInventoryModal from "./AddInventoryModal";
import DeleteInventoryModal from "./DeleteInventoryModal";
import FilterPartsModal from "./FilterPartsModal";
import EditInventoryModal from "./EditInventoryModal";
import SearchFilterAdd from "./SearchFilterAdd";
import searchReducer, { defaultState } from "../reducers/searchReducer";
import tableServices from "../services/tableServices";
import useSearch from "../custom-hooks/useSearch";
import useLocationFilter from "../custom-hooks/useLocationFilter";
import useCategoryFilter from "../custom-hooks/useCategoryFilter";
import useStatusFilter from "../custom-hooks/useStatusFilter";
import useFilterHandler from "../custom-hooks/useFilterHandler";
import useModalToggle from "../custom-hooks/useModalToggle";
import useFetch from "../custom-hooks/useFetch";
import LayoutContainer from "./LayoutContainer";
import MainHeading from "./MainHeading";
import handleEditModal from "../utils/inventoryEditModalUtils";
import handleDeleteModal from "../utils/inventoryDeleteModalUtils";
import handleAddModal from "../utils/inventoryAddModalUtils";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import handleInventoryColumns from "../utils/inventoryColumnsUtils";
import DataGridContainer from "./DataGridContainer";
import HandleModalDisplay from "./HandleModalDisplay";
import useSelectedPerson from "../contexts/PeopleContext";

function Inventory() {
  function selectRow(serial) {
    setRow(rows.find((element) => element.serial === serial));
  }

  const [rows, setRows] = useFetch(tableServices.getRows);
  const [row, setRow] = useState({});

  // Lookup table for maping location, category, status to their ids
  // The backend uses ids for the queries
  const lookUpTableRef = useRef({
    locationTable: new Map(),
    categoryTable: new Map(),
    statusTable: new Map(),
  });

  const [searchState, dispatch] = useReducer(searchReducer, defaultState);

  const [locations, setLocations] = useLocationFilter(lookUpTableRef);
  const [categories, setCategories] = useCategoryFilter(lookUpTableRef);
  const [statuses, setStatuses] = useStatusFilter(lookUpTableRef);

  const { handleFilter, resetFilters } = useFilterHandler(
    setCategories,
    setStatuses,
    setLocations
  );
  const filteredRowsMemo = useSearch(
    searchState,
    rows,
    categories,
    locations,
    statuses
  );

  // Handle displaying and hiding modals
  const [showAddModal, toggleAddModal] = useModalToggle();
  const [showFilterModal, toggleFilterModal] = useModalToggle();
  const [showDeleteModal, toggleDeleteModal] = useModalToggle();
  const [showEditModal, toggleEditModal] = useModalToggle();

  // The current user that is selected
  const { selectedPerson } = useSelectedPerson();

  // Handle logic for modals
  const { convert, unconvert, changeQuantity, moveLocation } = handleEditModal(
    setRows,
    lookUpTableRef,
    selectedPerson.user_id
  );
  const { deleteRow } = handleDeleteModal(
    setRows,
    lookUpTableRef,
    selectedPerson.user_id
  );
  const { addPart } = handleAddModal(
    rows,
    setRows,
    lookUpTableRef,
    selectedPerson.user_id
  );

  const partsTableHeadings = handleInventoryColumns(
    selectRow,
    toggleEditModal,
    toggleDeleteModal
  );

  return (
    <LayoutContainer>
      <HandleModalDisplay isDisplayed={showAddModal}>
        <ModalContainer>
          <AddInventoryModal
            toggleModal={toggleAddModal}
            locations={locations}
            statuses={statuses}
            addPart={addPart}
            rows={rows}
          />
        </ModalContainer>
      </HandleModalDisplay>
      <HandleModalDisplay isDisplayed={showDeleteModal}>
        <ModalContainer>
          <DeleteInventoryModal
            toggleModal={toggleDeleteModal}
            row={row}
            setRows={setRows}
            deleteRow={deleteRow}
          />
        </ModalContainer>
      </HandleModalDisplay>
      <HandleModalDisplay isDisplayed={showFilterModal}>
        <ModalContainer>
          <FilterPartsModal
            toggleModal={toggleFilterModal}
            categories={categories}
            locations={locations}
            handleFilter={handleFilter}
            statuses={statuses}
            resetFilters={resetFilters}
          />
        </ModalContainer>
      </HandleModalDisplay>
      <HandleModalDisplay isDisplayed={showEditModal}>
        <ModalContainer>
          <EditInventoryModal
            toggleModal={toggleEditModal}
            locations={locations}
            statuses={statuses}
            row={row}
            rows={rows}
            convert={convert}
            unconvert={unconvert}
            changeQuantity={changeQuantity}
            moveLocation={moveLocation}
            lookUpTableRef={lookUpTableRef}
          />
        </ModalContainer>
      </HandleModalDisplay>
      <MainHeading>inventory</MainHeading>
      <SearchFilterAdd
        toggleAddModal={toggleAddModal}
        toggleFilterModal={toggleFilterModal}
        dispatch={dispatch}
        searchState={searchState}
        isFilterActive={isFilterActive(locations, categories, statuses)}
      />
      <DataGridContainer>
        <DataGrid
          rows={filteredRowsMemo}
          getRowId={(row) => row.serial}
          columns={partsTableHeadings}
          components={{ Toolbar: GridToolbar }}
          disableSelectionOnClick
        />
      </DataGridContainer>
    </LayoutContainer>
  );
}

function isFilterActive(locations, categories, statuses) {
  const isNotActive = ({ isChecked }) => isChecked === false;
  const isLocationFilterActive = locations.some(isNotActive);
  const isCategoryFilterActive = categories.some(isNotActive);
  const isStatusFilterActive = statuses.some(isNotActive);
  return (
    isLocationFilterActive || isCategoryFilterActive || isStatusFilterActive
  );
}

export default Inventory;
