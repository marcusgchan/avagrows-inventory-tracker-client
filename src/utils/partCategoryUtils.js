export function addPartCategory(part_category_id, part_id, part_category_name) {
  return new Promise((resolve, reject) => {
    tableServices
      .addPartCategory({
        part_category_id: part_category_id,
        part_id: part_id,
        part_category_name: part_category_name,
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
export function deletePartCategory(
  part_id,
  part_category_id,
  part_category_name
) {
  return new Promise((resolve, reject) => {
    tableServices
      .deletePartCategory({
        part_category_id: part_category_id,
        part_id: part_id,
        part_category_name: part_category_name,
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
export function editPartCategory(
  new_part_category_id,
  part_id,
  part_category_name
) {
  return new Promise((resolve, reject) => {
    tableServices
      .editPartCategory({
        part_category_id: part_category_id,
        part_id: part_id,
        part_category_name: part_category_name,
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
