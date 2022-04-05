export const statusConfig = [
  {
    label: "status id",
    value: "status_id",
    isDisplayed: { add: false, edit: true, delete: false },
    isEditable: false,
    element: { getElement: (props) => <input {...props} /> },
  },
  {
    label: "status name",
    value: "status_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <input required {...props} /> },
  },
  {
    label: "notes",
    value: "note",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: {
      getElement: (props) => <textarea {...props} style={{ resize: "none" }} />,
    },
  },
];

export const locationConfig = [
  {
    label: "location id",
    value: "location_id",
    isDisplayed: { add: false, edit: true, delete: false },
    isEditable: false,
    element: { getElement: (props) => <input {...props} /> },
  },
  {
    label: "location name",
    value: "location_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <input required {...props} /> },
  },
  {
    label: "address",
    value: "address",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <input {...props} /> },
  },
  {
    label: "postal code",
    value: "postal_code",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <input {...props} /> },
  },
];

export const partCategoryConfig = [
  {
    label: "part category id",
    value: "part_category_id",
    isDisplayed: { add: false, edit: true, delete: true },
    isEditable: false,
    element: { getElement: (props) => <input {...props} /> },
  },
  {
    label: "Category Name",
    value: "part_category_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <input {...props} /> },
  },
];

export const usersConfig = [
  {
    label: "user id",
    value: "user_id",
    isDisplayed: { add: false, edit: true, delete: false },
    isEditable: false,
    element: { getElement: (props) => <input {...props} /> },
  },
  {
    label: "name",
    value: "name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <input required {...props} /> },
  },
];

export const partsConfig = [
  {
    label: "internal part number",
    value: "internal_part_number",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: false,
    element: { getElement: (props) => <input required {...props} /> },
  },
  {
    label: "part name",
    value: "part_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <input required {...props} /> },
  },
  {
    label: "part category",
    value: "part_category_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <input required {...props} /> },
  },
  {
    label: "part description",
    value: "part_description",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <input {...props} /> },
  },
  {
    label: "unit price",
    value: "unit_price",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <input {...props} /> },
  },
  {
    label: "line price",
    value: "line_price",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <input {...props} /> },
  },
  {
    label: "lead time",
    value: "lead_time",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <input {...props} /> },
  },
  {
    label: "total quantity",
    value: "total_quantity",
    isDisplayed: { add: false, edit: true, delete: true },
    isEditable: false,
    element: { getElement: (props) => <input {...props} /> },
  },
];
