import { getGridNumericOperators } from "@mui/x-data-grid";
import TableActionButtons from "../components/TableActionButtons";

export default function handleTmPartsColumns(
  selectRow,
  toggleEditModal,
  toggleDeleteModal
) {
  return [
    {
      field: "internal_part_number",
      headerName: "Internal Part Number",
      sortable: true,
      width: 200,
    },
    { field: "part_name", headerName: "Part Name", sortable: true, width: 200 },
    {
      field: "part_category_name",
      headerName: "Part Category",
      sortable: true,
      width: 210,
    },
    {
      field: "part_description",
      headerName: "Part Description",
      sortable: true,
      width: 300,
    },
    {
      field: "unit_price",
      headerName: "Unit Price",
      sortable: true,
      width: 120,
    },
    {
      field: "line_price",
      headerName: "Line Price",
      sortable: true,
      width: 120,
    },
    {
      field: "lead_time",
      headerName: "Lead Time",
      sortable: true,
      width: 120,
      type: "number",
      filterOperators: getGridNumericOperators().filter(
        (operator) =>
          operator.value === ">" ||
          operator.value === "<" ||
          operator.value === "="
      ),
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
