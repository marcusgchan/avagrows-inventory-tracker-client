export function addStatus(id, name, note) {
  return new Promise((resolve, reject) => {
    tableServices
      .addStatus({
        name: name,
        note: note,
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
export function deleteStatus(id) {
  return new Promise((resolve, reject) => {
    tableServices
      .deleteStatus({
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
export function editStatus(id, name, note, oldId) {
  return new Promise((resolve, reject) => {
    tableServices
      .editStatus({
        name: name,
        note: note,
        id: id,
        oldId: oldId,
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
