import tableServices from "../services/tableServices";

export function addLocation(addInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .addLocation(addInfo)
      .then((res) => {
        dispatch({ type: "LOCATION", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
export function deleteLocation(selectedRow, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .deleteLocation({
        location_id: selectedRow.location_id,
      })
      .then((res) => {
        dispatch({ type: "LOCATION", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
export function editLocation(selectedRow, editInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .editLocation({
        location_id: selectedRow.location_id,
        ...editInfo,
      })
      .then((res) => {
        dispatch({ type: "LOCATION", payload: res.data.rows });
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
