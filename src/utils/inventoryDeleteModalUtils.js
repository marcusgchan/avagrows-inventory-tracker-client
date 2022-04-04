import tableServices from "../services/tableServices";

export default function handleInventoryDeleteModal(setRows, lookUpTableRef) {
  function deleteRow(row) {
    // gets the ids
    const locationId = lookUpTableRef.current.locationTable.get(
      row.location_name
    );
    const statusId = lookUpTableRef.current.statusTable.get(row.status_name);

    // updates the database
    tableServices
      .deletePart({
        ...row,
        location_id: locationId,
        status_id: statusId,
        user_id: 1,
      })
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  }

  return { deleteRow };
}
