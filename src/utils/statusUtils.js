import tableServices from "../services/tableServices";
export function addStatus(addInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .addStatus(addInfo)
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
export function deleteStatus(selectedRow, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .deleteStatus({
        status_id: selectedRow.status_id,
      })
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
export function editStatus(selectedRow, editInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .editStatus({
        status_id: selectedRow.status_id,
        ...editInfo,
      })
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
