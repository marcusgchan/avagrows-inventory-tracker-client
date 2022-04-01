import { useEffect, useState } from "react";
import styles from "./styles/EditPartsModal.module.css";
import tableServices from "../services/tableServices";
import ModalButton from "./ModalButton";
import XButton from "./XButton";

function ChangeQtyMenu({ toggleModal, row, changeQuantity }) {
  const [qty, setQty] = useState(row.quantity);
  return (
    <section>
      <ul>
        <li>Location: {row.location_name}</li>
        <li>Status: {row.status_name}</li>
        <li>Current Qty for Location and Status: {row.quantity}</li>
      </ul>
      <label>
        New Qty for Location and Status:
        <button
          className={styles.changeQty}
          onClick={qty > 0 ? () => setQty(qty - 1) : () => {}}
        >
          -
        </button>
        {qty}
        <button className={styles.changeQty} onClick={() => setQty(qty + 1)}>
          +
        </button>
      </label>
      <section className={styles.newQtyText}>
        <div className={styles.hiddenButton}>
          <ModalButton
            onClick={() => {
              changeQuantity(row, qty);
              toggleModal();
            }}
          >
            Save
          </ModalButton>
        </div>
      </section>
    </section>
  );
}

function ConvertMenu({ toggleModal, row, convert, unconvert }) {
  const [qty, setQty] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleUnconvert() {
    let unconvertPossible = await unconvert(row, qty);

    unconvertPossible ? toggleModal() : setErrorMsg("No part to unconvert");
  }

  async function handleConvert() {
    let convertPossible = await convert(row, qty);

    convertPossible
      ? toggleModal()
      : setErrorMsg("Not enough parts in the current location to convert");
  }

  return (
    <section>
      <li>Location: {row.location_name}</li>
      <li>Status: {row.status_name}</li>
      <label>
        Convert Qty for Location and Status:
        <p className={styles.convertQty}>
          <button
            className={styles.changeQty}
            onClick={qty > 0 ? () => setQty(qty - 1) : () => {}}
          >
            -
          </button>
          {qty}
          <button className={styles.changeQty} onClick={() => setQty(qty + 1)}>
            +
          </button>
        </p>
      </label>
      <div className={styles.errorMsg}>
        <p>{errorMsg}</p>
      </div>
      <section className={styles.convertButtons}>
        <div className={styles.hiddenButton}>
          <ModalButton onClick={handleUnconvert}>Unconvert</ModalButton>
          <ModalButton onClick={handleConvert}>Convert</ModalButton>
        </div>
      </section>
    </section>
  );
}

function MoveLocationMenu({
  toggleModal,
  locations,
  statuses,
  row,
  rows,
  moveLocation,
}) {
  const [moveQty, setMoveQty] = useState(0);
  const [newLocation, setNewLocation] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newLocationQty, setNewLocationQty] = useState(0);
  const [newRow, setNewRow] = useState(false);

  // updates every time user picks a new location or status
  useEffect(() => {
    // grabs the row that matches the information from the form
    let newLocationRow = rows.find((ele) => {
      return (
        ele.internal_part_number === row.internal_part_number &&
        ele.location_name === newLocation &&
        ele.status_name === newStatus
      );
    });

    // if the row exists and the location we are moving into is not the same as it already is
    if (typeof newLocationRow !== "undefined" && newLocationRow !== row) {
      setNewLocationQty(newLocationRow.quantity);
      setNewRow(true);
    } else if (newLocationRow === row) {
      // if they are just moving back into the same locaiton
      setNewLocationQty(newLocationRow.quantity);
      setNewRow(false);
    } else {
      // row did not exists so set teh quantity to be 0
      setNewLocationQty(0);
      setNewRow(true);
    }

    // after every new selection reset the amount to be moved into a new location
    setMoveQty(0);
  }, [newLocation, newStatus, row, rows]);

  return (
    <section>
      <br></br>
      FROM:
      <ul>
        <li>Location: {row.location_name}</li>
        <li>Status: {row.status_name}</li>
        <li>Qty for Location and Status: {row.quantity}</li>
      </ul>
      <br></br>
      <div className={styles.moveChange}>
        Move:{" "}
        <button
          className={styles.changeQty}
          onClick={moveQty > 0 ? () => setMoveQty(moveQty - 1) : () => {}}
        >
          -
        </button>
        {moveQty}
        <button
          className={styles.changeQty}
          onClick={
            moveQty < row.quantity ? () => setMoveQty(moveQty + 1) : () => {}
          }
        >
          +
        </button>
      </div>
      <br></br>
      <p>TO:</p>
      <div>
        <div className={styles.row}>
          <label htmlFor="location" className={styles.label}>
            Label:
          </label>
          <select
            className={styles.inputStyles}
            onChange={(e) => {
              setNewLocation(e.target.value);
            }}
            defaultValue=""
          >
            <option hidden disabled value="" id={styles.hiddenOption}></option>
            {locations.map(({ location_id, location_name }) => (
              <option key={location_id} value={location_name}>
                {location_name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.row}>
          <label htmlFor="location" className={styles.label}>
            Status:
          </label>
          <select
            id="location"
            className={styles.inputStyles}
            onChange={(e) => {
              setNewStatus(e.target.value);
            }}
            defaultValue=""
          >
            <option hidden disabled value="" id={styles.hiddenOption}></option>
            {statuses.map(({ status_id, status_name }) => (
              <option key={status_id} value={status_name}>
                {status_name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <br></br>
      <ul>
        <li>Old Qty for Location and Status: {newLocationQty}</li>
        <li>
          New Qty for Location and Status:{" "}
          {newRow === true ? newLocationQty + moveQty : newLocationQty}
        </li>
      </ul>
      <br></br>
      <div className={styles.hiddenButton}>
        <ModalButton
          onClick={
            newRow === true
              ? () => {
                  if (newStatus !== "" && newLocation !== "") {
                    moveLocation(row, newStatus, newLocation, moveQty);
                  }
                  toggleModal();
                }
              : () => {
                  toggleModal();
                }
          }
        >
          Save
        </ModalButton>
      </div>
    </section>
  );
}

function selectMenu({
  change,
  setShowChangeQtyMenu,
  setShowConvertMenu,
  setShowMoveLocationMenu,
}) {
  if (change === "changeQuantity") {
    setShowChangeQtyMenu(true);
  } else if (change === "convert") {
    setShowConvertMenu(true);
  } else if (change === "moveLocation") {
    setShowMoveLocationMenu(true);
  }
}

function ShowNext({
  showChangeQtyMenu,
  showConvertMenu,
  showMoveLocationMenu,
  toggleModal,
  locations,
  statuses,
  row,
  rows,
  convert,
  unconvert,
  changeQuantity,
  moveLocation,
}) {
  if (showChangeQtyMenu) {
    return (
      <ChangeQtyMenu
        toggleModal={toggleModal}
        row={row}
        changeQuantity={changeQuantity}
      />
    );
  } else if (showConvertMenu) {
    return (
      <ConvertMenu
        toggleModal={toggleModal}
        row={row}
        convert={convert}
        unconvert={unconvert}
      />
    );
  } else if (showMoveLocationMenu) {
    return (
      <MoveLocationMenu
        toggleModal={toggleModal}
        locations={locations}
        statuses={statuses}
        row={row}
        rows={rows}
        moveLocation={moveLocation}
      />
    );
  }
  return null;
}

function validateNextMenu({ change, setShowMainMenu }) {
  if (change === "") {
    return;
  } else {
    setShowMainMenu(false);
  }
  return null;
}

function EditPartsModal({
  toggleModal,
  locations,
  statuses,
  row,
  rows,
  convert,
  unconvert,
  changeQuantity,
  moveLocation,
  lookUpTableRef,
}) {
  const [change, setChange] = useState("");

  //uses states for managing when to show components of the editPartsModal
  const [showMainMenu, setShowMainMenu] = useState(true);
  const [showChangeQtyMenu, setShowChangeQtyMenu] = useState(false);
  const [showConvertMenu, setShowConvertMenu] = useState(false);
  const [showMoveLocationMenu, setShowMoveLocationMenu] = useState(false);
  const [showConvertOption, setShowConvertOption] = useState(false);

  useEffect(() => {
    tableServices
      .getWip()
      .then((res) => {
        let wipTable = res.data;
        let locationId = lookUpTableRef.current.locationTable.get(
          row.location_name
        );
        let statusId = lookUpTableRef.current.statusTable.get(row.status_name);
        let wipRow = wipTable.find((ele) => {
          return (
            ele.part_id === row.internal_part_number &&
            ele.final_location_id === locationId &&
            statusId === 2
          );
        });
        if (typeof wipRow !== "undefined") {
          setShowConvertOption(true);
        }
      })
      .catch((e) => console.log(e));
  }, [row, lookUpTableRef]);

  return (
    <section className={styles.container}>
      <XButton onClick={toggleModal} />
      <h2>Edit</h2>
      <ul>
        <li>Internal Part Number: {row.internal_part_number}</li>
        <li>Part Name: {row.part_name}</li>
        <li>Part Category: {row.part_category_name}</li>
      </ul>
      {showMainMenu ? (
        <section className={styles.hiddenMenu}>
          <ul>
            <li>Location: {row.location_name}</li>
            <li>Status: {row.status_name}</li>
            <li>Qty for Location and Status: {row.quantity}</li>
          </ul>
          <br></br>
          <div className={styles.select}>
            Change:{" "}
            <select
              id={styles.change}
              className={styles.inputStyles}
              value={change}
              onChange={(e) => {
                setChange(e.target.value);
              }}
            >
              <option
                hidden
                disabled
                value=""
                id={styles.hiddenOption}
              ></option>
              <option value="changeQuantity"> Change quantity</option>
              {showConvertOption && <option value="convert"> Convert</option>}
              <option value="moveLocation"> Move Location</option>
            </select>
          </div>
          <div className={styles.hiddenButton}>
            <ModalButton
              onClick={() => {
                validateNextMenu({ change, setShowMainMenu });
                selectMenu({
                  change,
                  setShowChangeQtyMenu,
                  setShowConvertMenu,
                  setShowMoveLocationMenu,
                });
              }}
            >
              Next
            </ModalButton>
          </div>
        </section>
      ) : (
        <ShowNext
          showChangeQtyMenu={showChangeQtyMenu}
          showConvertMenu={showConvertMenu}
          showMoveLocationMenu={showMoveLocationMenu}
          toggleModal={toggleModal}
          locations={locations}
          statuses={statuses}
          row={row}
          rows={rows}
          convert={convert}
          unconvert={unconvert}
          changeQuantity={changeQuantity}
          moveLocation={moveLocation}
        />
      )}
    </section>
  );
}

export default EditPartsModal;
