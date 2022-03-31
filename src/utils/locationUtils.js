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
export function deleteLocation(id, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .deleteLocation({
        id: id,
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
export function editLocation(editInfo, dispatch) {
  return new Promise((resolve, reject) => {
    tableServices
      .editLocation(editInfo)
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
