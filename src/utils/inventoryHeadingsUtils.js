import { getGridNumericOperators } from "@mui/x-data-grid";
import TableActionButtons from "../components/TableActionButtons";

export default function handleInventoryHeadings(
  selectRow,
  toggleEditModal,
  toggleDeleteModal
) {
  return [
    {
      field: "internal_part_number",
      headerName: "Interal Part Number",
      sortable: true,
      width: 200,
    },
    { field: "part_name", headerName: "Part Name", sortable: true, width: 140 },
    {
      field: "part_category_name",
      headerName: "Part Category Name",
      sortable: true,
      width: 200,
    },
    {
      field: "location_name",
      headerName: "Location Name",
      sortable: true,
      width: 120,
    },
    {
      field: "status_name",
      headerName: "Status Name",
      sortable: true,
      width: 120,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      sortable: true,
      width: 100,
      type: "number",
      filterOperators: getGridNumericOperators().filter(
        (operator) =>
          operator.value === ">" ||
          operator.value === "<" ||
          operator.value === "="
      ),
    },
    {
      field: "",
      headerName: "Actions",
      sortable: false,
      width: 140,
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
    {
      field: "total_quantity",
      headerName: "Total Quantity",
      sortable: true,
      width: 110,
      type: "number",
      filterOperators: getGridNumericOperators().filter(
        (operator) =>
          operator.value === ">" ||
          operator.value === "<" ||
          operator.value === "="
      ),
    },
  ];
}
