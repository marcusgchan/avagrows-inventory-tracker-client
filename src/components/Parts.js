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
import partsServices from "../services/partsServices";
import useSearch from "../custom-hooks/useSearch";
import useLocationFilter from "../custom-hooks/useLocationFilter";
import useCategoryFilter from "../custom-hooks/useCategoryFilter";
import useStatusFilter from "../custom-hooks/useStatusFilter";
import useFilterHandler from "../custom-hooks/useFilterHandler";
import useModalToggle from "../custom-hooks/useModalToggle";
import { partsTableHeadings } from "../configs/tableHeadingsConfig";

function Parts() {
  function selectRow(serial) {
    // gets the row object that has the serial
    setRow(rows.find((element) => element.serial === serial));
  }

  function deleteRow(row) {
    // gets the location and status ids
    const locationId = lookUpTableRef.current.locationTable.get(
      row.location_name
    );
    const statusId = lookUpTableRef.current.statusTable.get(row.status_name);

    // updates the database
    partsServices
      .deletePart({ ...row, location_id: locationId, status_id: statusId })
      .then()
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
    partsServices
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
    partsServices
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

  // function addRow() {



  // }
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

    //creates the row object
    let row = {
      internal_part_number: internalPartNumber,
      locationId: locationId,
      statusId: statusId,
      quantity: quantity,
      note: note,
    };

    // updates the database
    partsServices
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
      partsServices
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
      partsServices
        .getParts()
        .then((res) => setParts(res.data))
        .catch((err) => console.log(err));
    }
  }, [showAddModal, showFilterModal, showDeleteModal, showEditModal]);

  return (
    <section className={styles.container}>
      {showAddModal && (
        <ModalContainer>
          <AddPartsModal
            toggleModal={toggleAddModal}
            locations={locations}
            statuses={statuses}
            addPart={addPart}
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
      <h1 className={styles.mainHeading}>inventory</h1>
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
        setRow={setRow}
      />
    </section>
  );
}

export default Parts;
