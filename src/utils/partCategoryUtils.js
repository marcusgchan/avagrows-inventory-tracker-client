import tableServices from "../services/tableServices";
export function addPartCategory(addInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .addPartCategory(addInfo)
      .then((res) => {
        dispatch({ type: "CATEGORY", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
export function deletePartCategory(selectedRow, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .deletePartCategory({
        part_category_id: selectedRow.part_category_id,
      })
      .then((res) => {
        dispatch({ type: "CATEGORY", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
export function editPartCategory(editInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .editPartCategory({
        ...editInfo,
      })
      .then((res) => {
        dispatch({ type: "CATEGORY", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
