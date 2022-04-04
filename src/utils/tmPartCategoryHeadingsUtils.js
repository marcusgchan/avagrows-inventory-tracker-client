import { getGridNumericOperators } from "@mui/x-data-grid";
import TableActionButtons from "../components/TableActionButtons";

export default function handleTmPartCategoryHeadings(
  selectRow,
  toggleEditModal,
  toggleDeleteModal
) {
  return [
    {
      field: "part_category_id",
      headerName: "Part Category ID",
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
    {
      field: "part_category_name",
      headerName: "part Category Name",
      sortable: true,
      width: 200,
    },
    {
      field: "",
      headerName: "actions",
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
  ];
}
