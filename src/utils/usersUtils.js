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
export function deleteUsers(deleteInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .deleteUser(deleteInfo)
      .then((res) => {
        dispatch({ type: "STATUS", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
export function editUsers(editInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .editUser(editInfo)
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
