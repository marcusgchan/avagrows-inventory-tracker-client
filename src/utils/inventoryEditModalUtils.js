import tableServices from "../services/tableServices";

export default function handleInventoryEditModal(
  setRows,
  lookUpTableRef,
  userId
) {
  function convert(row, convertQuantity) {
    //updates the database
    return new Promise((resolve, reject) => {
      tableServices
        .convert({
          internal_part_number: row.internal_part_number,
          conversionQuantity: convertQuantity,
          user_id: userId,
        })
        .then((res) => {
          setRows(res.data.rows);
          resolve(res.data.convertPossible);
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  }

  function unconvert(row, unConvertQuantity) {
    //updates the database
    return new Promise((resolve, reject) => {
      tableServices
        .unconvert({
          internal_part_number: row.internal_part_number,
          conversionQuantity: unConvertQuantity,
          user_id: userId,
        })
        .then((res) => {
          setRows(res.data.rows);
          resolve(res.data.unconvertPossible);
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  }

  function changeQuantity(row, newQuantity) {
    // gets the location and status ids
    const locationId = lookUpTableRef.current.locationTable.get(
      row.location_name
    );
    const statusId = lookUpTableRef.current.statusTable.get(row.status_name);

    // sets the old quantity and new quantity
    let oldQuantity = row.quantity;

    //updates the database
    tableServices
      .changeQuantity({
        ...row,
        old_quantity: oldQuantity,
        status_id: statusId,
        location_id: locationId,
        new_quantity: newQuantity,
        user_id: userId,
      })
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  }

  function moveLocation(row, newStatusName, newLocationName, moveQty) {
    // gets the old location and status ids
    const locationId = lookUpTableRef.current.locationTable.get(
      row.location_name
    );
    const statusId = lookUpTableRef.current.statusTable.get(row.status_name);
    // gets the new location and status ids
    const newLocationId =
      lookUpTableRef.current.locationTable.get(newLocationName);
    const newStatusId = lookUpTableRef.current.statusTable.get(newStatusName);

    // sets the old quantity and new quantity
    let oldQuantity = row.quantity;
    let newQuantity = row.quantity - moveQty;

    //updates the database
    tableServices
      .moveLocation({
        ...row,
        location_id: locationId,
        status_id: statusId,
        new_location_id: newLocationId,
        new_status_id: newStatusId,
        old_quantity: oldQuantity,
        new_quantity: newQuantity,
        user_id: userId,
      })
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  }

  return { convert, unconvert, changeQuantity, moveLocation };
}
