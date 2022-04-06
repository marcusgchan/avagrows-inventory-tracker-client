import { getGridNumericOperators } from "@mui/x-data-grid";
import TableActionButtons from "../components/TableActionButtons";

export default function handleTmPeopleColumns(
  selectRow,
  toggleEditModal,
  toggleDeleteModal
) {
  return [
    {
      field: "user_id",
      headerName: "User ID",
      sortable: true,
      width: 150,
      type: "number",
      filterOperators: getGridNumericOperators().filter(
        (operator) =>
          operator.value === ">" ||
          operator.value === "<" ||
          operator.value === "="
      ),
    },
    { field: "name", headerName: "Name", sortable: true, width: 210 },
    {
      field: "",
      headerName: "actions",
      sortable: false,
      width: 140,
      filterable: false,
      renderCell: (params) => {
        return (
          <TableActionButtons
            onClickEdit={() => {
              selectRow(params.id);
              toggleEditModal();
            }}
            onClickDelete={() => {
              selectRow(params.id);
              toggleDeleteModal();
            }}
          />
        );
      },
    },
  ];
}
