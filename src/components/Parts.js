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
    // gets the ids
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
  // function changeQuantity(row, newStatusName, newLocationName) {
  //   // gets the ids
  //   const locationId = lookUpTableRef.current.locationTable.get(
  //     newLocationName
  //   );
  //   const statusId = lookUpTableRef.current.statusTable.get(newStatusName));
  // }
  // function moveLocation(newStatusName, newLocationName) {
  //   const newLocationId = lookUpTableRef.current.locationTable.get(newLocationName);
  //   const newStatusId = lookUpTableRef.current.statusTable.get(newStatusName);
  // }
  // function addRow() {}

  const [rows, setRows] = useState([]);
  const [row, setRow] = useState({});

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

  // Fetch all parts
  useEffect(() => {
    if (
      showAddModal === false &&
      showFilterModal === false &&
      showDeleteModal === false &&
      showEditModal === false
    ) {
      partsServices
        .getParts()
        .then((res) => setRows(res.data))
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
