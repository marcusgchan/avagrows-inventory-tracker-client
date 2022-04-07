import Input from "../components/Input.js";
import Textarea from "../components/Textarea.js";

export const statusConfig = [
  {
    label: "status id",
    value: "status_id",
    isDisplayed: { add: false, edit: true, delete: false },
    isEditable: false,
    element: { getElement: (props) => <Input {...props}></Input> },
  },
  {
    label: "status name",
    value: "status_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <Input required {...props}></Input> },
  },
  {
    label: "notes",
    value: "note",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: {
      getElement: (props) => (
        <div>
          <Textarea {...props} style={{ resize: "none" }}></Textarea>
        </div>
      ),
    },
  },
];

export const locationConfig = [
  {
    label: "location id",
    value: "location_id",
    isDisplayed: { add: false, edit: true, delete: false },
    isEditable: false,
    element: { getElement: (props) => <Input {...props}></Input> },
  },
  {
    label: "location name",
    value: "location_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: {
      getElement: (props) => <Input required {...props}></Input>,
    },
  },
  {
    label: "address",
    value: "address",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <Input {...props}></Input> },
  },
  {
    label: "postal code",
    value: "postal_code",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <Input {...props}></Input> },
  },
];

export const partCategoryConfig = [
  {
    label: "part category id",
    value: "part_category_id",
    isDisplayed: { add: false, edit: true, delete: true },
    isEditable: false,
    element: { getElement: (props) => <Input {...props}></Input> },
  },
  {
    label: "Category Name",
    value: "part_category_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <Input required {...props}></Input> },
  },
];

export const usersConfig = [
  {
    label: "user id",
    value: "user_id",
    isDisplayed: { add: false, edit: true, delete: false },
    isEditable: false,
    element: { getElement: (props) => <Input {...props}></Input> },
  },
  {
    label: "name",
    value: "name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <Input required {...props}></Input> },
  },
];

export const partsConfig = [
  {
    label: "internal part number",
    value: "internal_part_number",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: false,
    element: { getElement: (props) => <Input required {...props}></Input> },
  },
  {
    label: "part name",
    value: "part_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <Input required {...props}></Input> },
  },
  {
    label: "part category",
    value: "part_category_name",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <Input required {...props}></Input> },
  },
  {
    label: "part description",
    value: "part_description",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <Input {...props}></Input> },
  },
  {
    label: "unit price",
    value: "unit_price",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <Input {...props}></Input> },
  },
  {
    label: "line price",
    value: "line_price",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <Input {...props}></Input> },
  },
  {
    label: "lead time",
    value: "lead_time",
    isDisplayed: { add: true, edit: true, delete: true },
    isEditable: true,
    element: { getElement: (props) => <Input {...props}></Input> },
  },
  {
    label: "total quantity",
    value: "total_quantity",
    isDisplayed: { add: false, edit: true, delete: true },
    isEditable: false,
    element: { getElement: (props) => <Input {...props}></Input> },
  },
];
