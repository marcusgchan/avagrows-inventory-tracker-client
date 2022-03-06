import { useState } from "react";
import styles from "./styles/Parts.module.css";
import { useNavigate } from "react-router-dom";
import edit from "../imgs/edit.svg";
import trash from "../imgs/trash.svg";
import ModalContainer from "./ModalContainer";
import AddPartsModal from "./AddPartsModal";

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
  { field: "quantity", headerName: "Qnty for location + status" },
  { field: "actions", headerName: "Actions" },
  { field: "date_time", headerName: "Last Edited At" },
  { field: "name", headerName: "Last Edited By" },
  { field: "total_quantity", headerName: "Total Qnty" },
];

function Parts() {
  const [rows, setRows] = useState(rowsDummy);
  // Handle displaying and hiding add part modal
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((cur) => !cur);

  return (
    <section>
      {showModal && (
        <ModalContainer>
          <AddPartsModal toggleModal={toggleModal} />
        </ModalContainer>
      )}
      <SearchFilterAdd toggleModal={toggleModal} />
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
        <tbody>
          {rows.map(
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
                  <button type="button" className={styles.tableButton}>
                    <img src={trash} alt="" className={styles.tableImg}></img>
                  </button>
                </td>
                <td className={styles.dataCell}>{date_time}</td>
                <td className={styles.dataCell}>{name}</td>
                <td className={styles.dataCell}>{total_quantity}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
}

function SearchFilterAdd({ toggleModal }) {
  return (
    <section>
      <button onClick={toggleModal}>add +</button>
    </section>
  );
}

export default Parts;
