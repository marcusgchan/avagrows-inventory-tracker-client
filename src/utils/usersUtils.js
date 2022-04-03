import tableServices from "../services/tableServices";
export function addUsers(addInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .addUser(addInfo)
      .then((res) => {
        dispatch({ type: "USER", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
export function deleteUsers(selectedRow, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .deleteUser({ user_id: selectedRow.user_id })
      .then((res) => {
        dispatch({ type: "USER", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
export function editUsers(selectedRow, editInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .editUser({
        user_id: selectedRow.user_id,
        ...editInfo,
      })
      .then((res) => {
        dispatch({ type: "USER", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
