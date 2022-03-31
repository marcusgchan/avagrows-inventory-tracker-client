import tableServices from "../services/tableServices";
export function addParts(addInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .addParts(addInfo)
      .then((res) => {
        dispatch({ type: "PART", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
export function deleteParts(selectedRow, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .deleteParts({
        internal_part_number: selectedRow.internal_part_number,
      })
      .then((res) => {
        dispatch({ type: "PART", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
export function editParts(selectedRow, editInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .editParts({
        old_internal_part_number: selectedRow,
        editInfo,
      })
      .then((res) => {
        dispatch({ type: "PART", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
