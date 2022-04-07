import { getGridNumericOperators } from "@mui/x-data-grid";

export default function handleLoggingColumns() {
  return [
    {
      field: "log_id",
      headerName: "Log ID",
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
      field: "part_id",
      headerName: "Part ID",
      sortable: true,
      width: 200,
    },
    {
      field: "event_type_name",
      headerName: "Event Type Name",
      sortable: true,
      width: 200,
    },
    {
      field: "event_type_name",
      headerName: "Event Type Name",
      sortable: true,
      width: 160,
    },
    {
      field: "quantity_changed",
      headerName: "Quantity Changed",
      sortable: true,
      width: 160,
      type: "number",
      filterOperators: getGridNumericOperators().filter(
        (operator) =>
          operator.value === ">" ||
          operator.value === "<" ||
          operator.value === "="
      ),
    },
    {
      field: "old_location",
      headerName: "Old Location",
      sortable: true,
      width: 160,
    },
    {
      field: "new_location",
      headerName: "New Location",
      sortable: true,
      width: 160,
    },
    {
      field: "old_status",
      headerName: "Old Status",
      sortable: true,
      width: 160,
    },
    {
      field: "new_status",
      headerName: "New Status",
      sortable: true,
      width: 160,
    },
    {
      field: "date_time",
      type: "dateTime",
      valueGetter: ({ value }) => value && new Date(value),
      headerName: "Date Time",
      sortable: true,
      width: 200,
      filterable: true,
    },
    {
      field: "name",
      headerName: "Name",
      sortable: true,
      width: 110,
    },
  ];
}
