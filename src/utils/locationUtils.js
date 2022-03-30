export function addLocation(name, note, address, postalCode) {
  return new Promise((resolve, reject) => {
    tableServices
      .addLocation({
        name: name,
        note: note,
        address: address,
        postalCode: postalCode,
      })
      .then((res) => {
        setRows(res.data.rows);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
export function deleteLocation(id) {
  return new Promise((resolve, reject) => {
    tableServices
      .deleteLocation({
        id: id,
      })
      .then((res) => {
        setRows(res.data.rows);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
export function editLocation(name, note, address, postalCode) {
  return new Promise((resolve, reject) => {
    tableServices
      .editLocation({
        name: name,
        note: note,
        address: address,
        postalCode: postalCode,
      })
      .then((res) => {
        setRows(res.data.rows);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
