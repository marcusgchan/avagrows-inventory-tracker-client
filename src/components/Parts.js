import { useState } from "react";
import styles from "./styles/Parts.module.css";
import { useNavigate } from "react-router-dom";
import edit from "../imgs/edit.svg";
import ModalContainer from "./ModalContainer";
import AddPartsModal from "./AddPartsModal";

const rowsDummy = [
  {
    id: 1,
    materialId: "PSL00987",
    status: "unsellable",
    notes: "wire",
    location: "Offices",
    lastEdited: "",
  },
  {
    id: 2,
    materialId: "PSL00988",
    status: "WIP",
    notes: "camera",
    location: "kitchen",
    lastEdited: "",
  },
  {
    id: 3,
    materialId: "PSL00989",
    status: "complete",
    notes: "bolt",
    location: "greenhouse",
    lastEdited: "",
  },
];

const columns = [
  { field: "internal_part_number", headerName: "Internal Part Number" },
  { field: "status_name", headerName: "Status" },
  { field: "part_description", headerName: "Notes" },
  { field: "location_name", headerName: "Location" },
  // { field: "location_name", headerName: "Location" },
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
            <th className={styles.headerCell}>Action</th>
            <th className={styles.headerCell}>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(
            ({ id, materialId, status, notes, location, lastEdited }) => (
              <tr className={styles.dataRow} key={id}>
                <td className={styles.dataCell}>{materialId}</td>
                <td className={styles.dataCell}>{status}</td>
                <td className={styles.dataCell}>{notes}</td>
                <td className={styles.dataCell}>{location}</td>
                <td className={styles.dataCell}>
                  <button type="button" className={styles.editButton}>
                    <img src={edit} alt="" className={styles.editImg}></img>
                  </button>
                </td>
                <td className={styles.dataCell}>{lastEdited}</td>
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
