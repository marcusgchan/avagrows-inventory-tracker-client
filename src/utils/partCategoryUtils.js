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
export function deletePartCategory(
  part_id,
  part_category_id,
  part_category_name,
  dispatch
) {
  return new Promise((resolve, reject) => {
    tableServices
      .deletePartCategory({
        part_category_id: part_category_id,
        part_id: part_id,
        part_category_name: part_category_name,
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
      .editPartCategory(editInfo)
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
