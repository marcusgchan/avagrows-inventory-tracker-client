import { useState, useReducer, useEffect, useRef } from "react";
import styles from "./styles/Parts.module.css";
import ModalContainer from "./ModalContainer";
import AddPartsModal from "./AddPartsModal";
import DeletePartsModal from "./DeletePartsModal";
import FilterPartsModal from "./FilterPartsModal";
import EditPartsModal from "./EditPartsModal";
import SearchFilterAdd from "./SearchFilterAdd";
import Table from "./Table";
import searchReducer, { defaultState } from "../reducers/searchReducer";
import tableServices from "../services/tableServices";
import useSearch from "../custom-hooks/useSearch";
import useLocationFilter from "../custom-hooks/useLocationFilter";
import useCategoryFilter from "../custom-hooks/useCategoryFilter";
import useStatusFilter from "../custom-hooks/useStatusFilter";
import useFilterHandler from "../custom-hooks/useFilterHandler";
import useModalToggle from "../custom-hooks/useModalToggle";
import { partsTableHeadings } from "../configs/tableHeadingsConfig";
import LayoutContainer from "./LayoutContainer";
import MainHeading from "./MainHeading";

function Parts() {
  function selectRow(serial) {
    // gets the row object that has the serial
    setRow(rows.find((element) => element.serial === serial));
  }

  function deleteRow(row) {
    // gets the ids
    const locationId = lookUpTableRef.current.locationTable.get(
      row.location_name
    );
    const statusId = lookUpTableRef.current.statusTable.get(row.status_name);

    // updates the database
    tableServices
      .deletePart({ ...row, location_id: locationId, status_id: statusId })
      .then()
      .catch((err) => console.log(err));
  }

  function convert(row, newQuantity){
    // gets the location and status ids
    const locationId = lookUpTableRef.current.locationTable.get(
      row.location_name
    );
    const statusId = lookUpTableRef.current.statusTable.get(row.status_name);

    //updates the database
    tableServices
      .convert({
        ...row,
        status_id: statusId,
        location_id: locationId,
        convertQty: newQuantity,
      })
      .then((res) => {setRows(res.data.rows);
      return res.data.convertPossible })
      .catch((err) => console.log(err));
    
  }

  function unconvert(row, newQuantity){
  // gets the location and status ids
  const locationId = lookUpTableRef.current.locationTable.get(
    row.location_name
  );
  const statusId = lookUpTableRef.current.statusTable.get(row.status_name);

  //updates the database
  tableServices
    .unconvert({
      ...row,
      status_id: statusId,
      location_id: locationId,
      convertQty: newQuantity,
    })
    .then((res) => {setRows(res.data.rows);
      return res.data.unconvertPossible })
    .catch((err) => console.log(err));
  }
  


  function changeQuantity(row, newQuantity) {
    // gets the location and status ids
    const locationId = lookUpTableRef.current.locationTable.get(
      row.location_name
    );
    const statusId = lookUpTableRef.current.statusTable.get(row.status_name);

    // sets the old quantity and new quantity
    let oldQuantity = row.quantity;
    setRow((row.quantity = newQuantity));

    //updates the database
    tableServices
      .changeQuantity({
        ...row,
        old_quantity: oldQuantity,
        status_id: statusId,
        location_id: locationId,
      })
      .then()
      .catch((err) => console.log(err));
  }

  function moveLocation(row, newStatusName, newLocationName, moveQty) {
    // gets the old location and status ids
    const locationId = lookUpTableRef.current.locationTable.get(
      row.location_name
    );
    const statusId = lookUpTableRef.current.statusTable.get(row.status_name);
    // gets the new location and status ids
    const newLocationId =
      lookUpTableRef.current.locationTable.get(newLocationName);
    const newStatusId = lookUpTableRef.current.statusTable.get(newStatusName);

    // sets the old quantity and new quantity
    let oldQuantity = row.quantity;
    setRow((row.quantity -= moveQty));

    //updates the database
    tableServices
      .moveLocation({
        ...row,
        location_id: locationId,
        status_id: statusId,
        new_location_id: newLocationId,
        new_status_id: newStatusId,
        old_quantity: oldQuantity,
      })
      .then()
      .catch((err) => console.log(err));
  }

  function addPart(
    internalPartNumber,
    locationName,
    statusName,
    quantity,
    note
  ) {
    // gets the old location and status ids
    const locationId = lookUpTableRef.current.locationTable.get(locationName);
    const statusId = lookUpTableRef.current.statusTable.get(statusName);
    let existingRow = rows.find(
      (ele) => ele.internal_part_number === internalPartNumber
    );

    let totalQuantity = quantity;

    if (typeof existingRow !== "undefined") {
      totalQuantity = existingRow.total_quantity;
    }

    //creates the row object
    let row = {
      internal_part_number: internalPartNumber,
      location_id: locationId,
      status_id: statusId,
      quantity: quantity,
      note: note,
      total_quantity: totalQuantity,
    };

    // updates the database
    tableServices
      .addPart(row)
      .then()
      .catch((err) => console.log(err));
  }

  const [rows, setRows] = useState([]);
  const [row, setRow] = useState({});

  // look up table for finding the assocaited id of a row attribute
  // ex. status_name returns associated status_id
  const lookUpTableRef = useRef({
    locationTable: new Map(),
    categoryTable: new Map(),
    statusTable: new Map(),
  });

  const [searchState, dispatch] = useReducer(searchReducer, defaultState);

  const [parts, setParts] = useState({});

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

  // Fetch all rows
  useEffect(() => {
    if (
      showAddModal === false &&
      showFilterModal === false &&
      showDeleteModal === false &&
      showEditModal === false
    ) {
      tableServices
        .getRows()
        .then((res) => setRows(res.data))
        .catch((err) => console.log(err));
    }
  }, [showAddModal, showFilterModal, showDeleteModal, showEditModal]);

  // fetch all parts update this into its own filter thing with marcus
  useEffect(() => {
    if (
      showAddModal === false &&
      showFilterModal === false &&
      showDeleteModal === false &&
      showEditModal === false
    ) {
      tableServices
        .getParts()
        .then((res) => setParts(res.data))
        .catch((err) => console.log(err));
    }
  }, [showAddModal, showFilterModal, showDeleteModal, showEditModal]);

  function handleModals() {
    return (
      <>
        {showAddModal && (
          <ModalContainer>
            <AddPartsModal
              toggleModal={toggleAddModal}
              locations={locations}
              statuses={statuses}
              addPart={addPart}
              parts={parts}
              rows={rows}
            />
          </ModalContainer>
        )}
        {showDeleteModal && (
          <ModalContainer>
            <DeletePartsModal
              toggleModal={toggleDeleteModal}
              row={row}
              setRows={setRows}
              deleteRow={deleteRow}
            />
          </ModalContainer>
        )}
        {showFilterModal && (
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
        )}
        {showEditModal && (
          <ModalContainer>
            <EditPartsModal
              toggleModal={toggleEditModal}
              locations={locations}
              statuses={statuses}
              row={row}
              rows={rows}
              changeQuantity={changeQuantity}
              moveLocation={moveLocation}
              addPart={addPart}
            />
          </ModalContainer>
        )}
      </>
    );
  }

  return (
    <LayoutContainer>
      {handleModals()}
      <MainHeading>inventory</MainHeading>
      <SearchFilterAdd
        toggleAddModal={toggleAddModal}
        toggleFilterModal={toggleFilterModal}
        dispatch={dispatch}
        searchState={searchState}
      />
      <Table
        headings={partsTableHeadings}
        rows={filteredRowsMemo}
        defaultSortedHeading="internal_part_number"
        toggleDeleteModal={toggleDeleteModal}
        toggleEditModal={toggleEditModal}
        selectRow={selectRow}
      />
    </LayoutContainer>
  );
}

export default Parts;
