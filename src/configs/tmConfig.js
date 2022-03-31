export const statusConfig = [
  {
    label: "status id",
    value: "status_id",
    isDisplayed: { add: false, edit: true, delete: false },
    isEditable: false,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "status name",
    value: "status_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <input required {...props} />,
  },
  {
    label: "notes",
    value: "notes",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <textarea {...props} style={{ resize: "none" }} />,
  },
];

export const locationConfig = [
  {
    label: "location id",
    value: "location_id",
    isDisplayed: { add: false, edit: true, delete: false },
    isEditable: false,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "location name",
    value: "location_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <input required {...props} />,
  },
  {
    label: "address",
    value: "address",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "postal code",
    value: "postal_code",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <input {...props} />,
  },
];

export const partCategoryConfig = [
  {
    label: "part_category_id",
    value: "part_category_id",
    isDisplayed: { add: false, edit: true, delete: false },
    isEditable: false,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "part_id",
    value: "part_id",
    isDisplayed: { add: false, edit: true, delete: false },
    isEditable: true,
    getElement: (props) => <input required {...props} />,
  },
  {
    label: "Category Name",
    value: "part_category_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <input required {...props} />,
  },
];

export const usersConfig = [
  {
    label: "users id",
    value: "users_id",
    isDisplayed: { add: false, edit: true, delete: false },
    isEditable: false,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "name",
    value: "name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <input required {...props} />,
  },
];

export const partsConfig = [
  {
    label: "internal part number",
    value: "internal_part_number",
    isDisplayed: { add: false, edit: true, delete: false },
    isEditable: false,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "part name",
    value: "part_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "part description",
    value: "part_description",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "unit price",
    value: "unit_price",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "line price",
    value: "line_price",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "lead time",
    value: "lead_time",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "total quantity",
    value: "total_quantity",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    getElement: (props) => <input {...props} />,
  },
];
