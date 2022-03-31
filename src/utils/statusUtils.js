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
export function deleteStatus(id, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .deleteStatus({
        id: id,
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
export function editStatus(editInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .editStatus(editInfo)
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
