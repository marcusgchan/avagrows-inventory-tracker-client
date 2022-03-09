import { useState } from "react";
import styles from "./styles/Parts.module.css";
import edit from "../imgs/edit.svg";
import trash from "../imgs/trash.svg";
import ModalContainer from "./ModalContainer";
import AddPartsModal from "./AddPartsModal";
import DeletePartsModal from "./DeletePartsModal";
import FilterPartsModal from "./FilterPartsModal";
import SearchFilterAdd from "./SearchFilterAdd";

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

function Parts() {
  const [rows, setRows] = useState(rowsDummy);

  // Handle displaying and hiding add part modal
  const [showAddModal, setShowAddModal] = useState(false);
  const toggleAddModal = () => setShowAddModal((cur) => !cur);

  // Handle displaying and hiding filter modal
  const [showFilterModal, setShowFilterModal] = useState(false);
  const toggleFilterModal = () => setShowFilterModal((cur) => !cur);

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

  // Handle displaying and hiding delete part modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const toggleDeleteModal = () => setShowDeleteModal((cur) => !cur);

  function generateTableRows() {
    return rows.map(
      ({
        id,
        internal_part_number,
        part_name,
        part_category_name,
        location_name,
        status_name,
        quantity,
        date_time,
        name,
        total_quantity,
      }) => (
        <tr className={styles.dataRow} key={id}>
          <td className={styles.dataCell}>{internal_part_number}</td>
          <td className={styles.dataCell}>{part_name}</td>
          <td className={styles.dataCell}>{part_category_name}</td>
          <td className={styles.dataCell}>{location_name}</td>
          <td className={styles.dataCell}>{status_name}</td>
          <td className={styles.dataCell}>{quantity}</td>
          <td className={styles.dataCell}>
            <button type="button" className={styles.tableButton}>
              <img src={edit} alt="" className={styles.tableImg}></img>
            </button>
            <button
              type="button"
              className={styles.tableButton}
              onClick={toggleDeleteModal}
            >
              <img src={trash} alt="" className={styles.tableImg}></img>
            </button>
          </td>
          <td className={styles.dataCell}>{date_time}</td>
          <td className={styles.dataCell}>{name}</td>
          <td className={styles.dataCell}>{total_quantity}</td>
        </tr>
      )
    );
  }

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
      />
      <table>
        <thead>
          <tr className={styles.headerRow}>
            {columns.map(({ field, headerName }) => (
              <th className={styles.headerCell} key={field}>
                {headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{generateTableRows()}</tbody>
      </table>
    </section>
  );
}

export default Parts;
