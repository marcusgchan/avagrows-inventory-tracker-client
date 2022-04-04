import tableServices from "../services/tableServices";

export default function handleInventoryAddModal(rows, setRows, lookUpTableRef) {
  function addPart(
    internalPartNumber,
    locationName,
    statusName,
    quantity,
    note
  ) {
    // gets the old location and status ids
    const locationId = lookUpTableRef.current.locationTable.get(locationName);
    const statusId = lookUpTableRef.current.statusTable.get(statusName);
    let existingRow = rows.find(
      (ele) => ele.internal_part_number === internalPartNumber
    );

    let totalQuantity = quantity;

    if (typeof existingRow !== "undefined") {
      totalQuantity = existingRow.total_quantity;
    }

    //creates the row object
    let row = {
      internal_part_number: internalPartNumber,
      location_id: locationId,
      status_id: statusId,
      quantity: quantity,
      note: note,
      total_quantity: totalQuantity,
      user_id: 1,
    };

    // updates the database
    tableServices
      .addPart(row)
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  }

  return { addPart };
}
