import { useState, useReducer, useCallback, useMemo } from "react";
import styles from "./styles/Parts.module.css";
import ModalContainer from "./ModalContainer";
import AddPartsModal from "./AddPartsModal";
import DeletePartsModal from "./DeletePartsModal";
import FilterPartsModal from "./FilterPartsModal";
import SearchFilterAdd from "./SearchFilterAdd";
import Table from "./Table";
import { SELECT_OPTIONS, DEFAULT_SEARCH_PARAMS } from "../configs/searchConfig";

const rowsDummy = [
  {
    id: 1,
    internal_part_number: "PSL00989",
    part_name: "Pump Housing",
    part_category_name: "WIP",
    location_name: "FSS",
    status_name: "Plant Science",
    quantity: "1",
    date_time: "03/04/22 4:00PM",
    name: "",
    total_quantity: "50",
  },
  {
    id: 2,
    internal_part_number: "PSL00988",
    part_name: "Byte",
    part_category_name: "Finished Good",
    location_name: "Office",
    status_name: "Shipped",
    quantity: "1",
    date_time: "12/04/21 3:00AM",
    name: "Username",
    total_quantity: "10",
  },
  {
    id: 3,
    internal_part_number: "PSL00989",
    part_name: "bolt",
    part_category_name: "Raw Material",
    location_name: "Office",
    status_name: "Scrap",
    quantity: "2",
    date_time: "03/04/22 4:00PM",
    name: "Stella",
    total_quantity: "5",
  },
];

const columns = [
  { field: "internal_part_number", headerName: "Internal Part Number" },
  { field: "part_name", headerName: "Name" },
  { field: "part_category_name", headerName: "Category" },
  { field: "location_name", headerName: "Location" },
  { field: "status_name", headerName: "Status" },
  { field: "quantity", headerName: "Qty for location + status" },
  { field: "actions", headerName: "Actions" },
  { field: "date_time", headerName: "Last Edited At" },
  { field: "name", headerName: "Last Edited By" },
  { field: "total_quantity", headerName: "Total Qty" },
];

function getSearchTypeOptions(payload) {
  const payloadType = DEFAULT_SEARCH_PARAMS.find(
    ({ value }) => payload === value
  ).type;
  if (payloadType !== "number" && payloadType !== "string")
    throw TypeError("Type must be number or string");
  return SELECT_OPTIONS[payloadType];
}

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SEARCH_PARAMS":
      return {
        ...state,
        searchParam: action.payload,
        searchOption: "contains", // Default search option is contains
        searchTypeOptions: getSearchTypeOptions(action.payload),
      };
    case "UPDATE_SEARCH_TYPES":
      return {
        ...state,
        searchOption: action.payload,
      };
    case "UPDATE_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      throw new Error();
  }
}

function Parts() {
  const [rows, setRows] = useState(rowsDummy);

  // Handle displaying and hiding add part modal
  const [showAddModal, setShowAddModal] = useState(false);
  const toggleAddModal = () => setShowAddModal((cur) => !cur);

  // Handle displaying and hiding filter modal
  const [showFilterModal, setShowFilterModal] = useState(false);
  const toggleFilterModal = () => setShowFilterModal((cur) => !cur);

  const [searchState, dispatch] = useReducer(reducer, {
    searchParam: "part name",
    searchOption: "contains",
    searchTypeOptions: getSearchTypeOptions("part name"),
    search: "",
  });

  const containsFilter = useCallback(
    (row) => {
      return row[searchState.searchParam.replaceAll(" ", "_")]
        .toString()
        .toLowerCase()
        .includes(searchState.search.toLowerCase());
    },
    [searchState.searchParam, searchState.search]
  );

  const filteredRowsMemo = useMemo(() => {
    switch (searchState.searchOption) {
      case "contains":
        return rows.filter(containsFilter);
      default:
        throw new Error();
    }
  }, [searchState.searchOption, searchState.search, rows]);

  // Handle filter attributes
  const categories = {
    "Raw Materials": true,
    "Work In Progress": true,
    "Finished Goods": true,
  };
  const [locations, setLocation] = useState({ Office: true, FSS: true });
  function handleLocation(e) {
    setLocation((cur) => {
      const updatedLocations = { ...cur };
      cur[e.target.name] = e.target.checked;
      return updatedLocations;
    });
  }
  const [statuses, setStatuses] = useState({
    Scrap: true,
    Sellable: true,
    "Plant Science": true,
    "In-repair": true,
  });
  function filterData(rows) {}

  // Handle displaying and hiding delete part modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const toggleDeleteModal = () => setShowDeleteModal((cur) => !cur);

  return (
    <section className={styles.container}>
      {showAddModal && (
        <ModalContainer>
          <AddPartsModal toggleModal={toggleAddModal} />
        </ModalContainer>
      )}
      {showDeleteModal && (
        <ModalContainer>
          <DeletePartsModal toggleModal={toggleDeleteModal} />
        </ModalContainer>
      )}
      {showFilterModal && (
        <ModalContainer>
          <FilterPartsModal
            toggleModal={toggleFilterModal}
            categories={categories}
            locations={locations}
            statuses={statuses}
          />
        </ModalContainer>
      )}
      <h1 className={styles.mainHeading}>inventory</h1>
      <SearchFilterAdd
        toggleAddModal={toggleAddModal}
        toggleFilterModal={toggleFilterModal}
        dispatch={dispatch}
        searchState={searchState}
        // handleSearch={handleSearch}
      />
      <Table
        rows={filteredRowsMemo}
        columns={columns}
        toggleDeleteModal={toggleDeleteModal}
      />
    </section>
  );
}

export default Parts;
