import React from "react";
import { Outlet } from "react-router-dom";
import useSelectedPerson from "../contexts/PeopleContext";
import styles from "./styles/SelectUser.module.css";
import TableSelelectMenu from "./SelectMenu";

function SelectUser() {
  const { selectionState, selectionDispatch } = useSelectedPerson();

  return !selectionState.selectedPerson.user_id ? (
    <div className={styles.container}>
      <label htmlFor="selectUser">Select User</label>
      <TableSelelectMenu
        id="selectUser"
        onChange={(e) =>
          selectionDispatch({ type: "SELECT_PERSON", payload: e.target.value })
        }
      >
        <option value="default">Please choose a user</option>
        {selectionState.people.map(({ user_id: id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </TableSelelectMenu>
    </div>
  ) : (
    <Outlet />
  );
}

export default SelectUser;
