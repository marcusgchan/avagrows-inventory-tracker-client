import React from "react";
import { Outlet } from "react-router-dom";
import usePeople from "../custom-hooks/usePeople";
import useSelectedPerson from "../contexts/PeopleContext";
import styles from "./styles/SelectUser.module.css";
import TableSelelectMenu from "./SelectMenu";

function SelectUser() {
  const people = usePeople();
  const { selectedPerson, setSelectedPerson } = useSelectedPerson();

  return !selectedPerson.user_id ? (
    <div className={styles.container}>
      <label htmlFor="selectUser">Select User</label>
      <TableSelelectMenu
        id="selectUser"
        onChange={(e) => {
          const personArray = people.filter(({ user_id }) => {
            return user_id === Number(e.target.value);
          });
          const person = personArray[0] || {};
          setSelectedPerson(person);
        }}
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
