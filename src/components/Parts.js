import { useState, useReducer, useEffect } from "react";
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
import usePartFilter from "../custom-hooks/usePartFilter";
import useFilterHandler from "../custom-hooks/useFilterHandler";
import useModalToggle from "../custom-hooks/useModalToggle";

function Parts() {
  function selectRow(serial, setRow) {
    setRow(rows.find((element) => element.serial === serial));
  }

  const [rows, setRows] = useState([]);
  const [row, setRow] = useState({});
  const [searchState, dispatch] = useReducer(searchReducer, defaultState);
  const [categories, setCategories] = usePartFilter(
    partsServices.getCategories
  );
  const [statuses, setStatuses] = usePartFilter(partsServices.getStatuses);
  const [locations, setLocations] = usePartFilter(partsServices.getLocations);
  const handleFilter = useFilterHandler(
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
    partsServices
      .getParts()
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={styles.container}>
      {showAddModal && (
        <ModalContainer>
          <AddPartsModal toggleModal={toggleAddModal} />
        </ModalContainer>
      )}
      {showDeleteModal && (
        <ModalContainer>
          <DeletePartsModal toggleModal={toggleDeleteModal} row={row} />
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
