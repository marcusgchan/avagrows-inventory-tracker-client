import React from "react";
import { Outlet } from "react-router-dom";
import usePeople from "../custom-hooks/usePeople";
import useSelectedPerson from "../contexts/PeopleContext";
import styles from "./styles/SelectUser.module.css";
import TableSelelectMenu from "./SelectMenu";

function SelectUser() {
  const people = usePeople();
  const { selectedPerson, handleSelection } = useSelectedPerson();

  return !selectedPerson.user_id ? (
    <div className={styles.container}>
      <label htmlFor="selectUser">Select User</label>
      <TableSelelectMenu
        id="selectUser"
        onChange={(e) => handleSelection(e, people)}
      >
        <option value="default">Please choose a user</option>
        {people.map(({ user_id: id, name }) => (
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
