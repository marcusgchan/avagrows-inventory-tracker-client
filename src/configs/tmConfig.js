export const statusConfig = [
  {
    label: "status id",
    value: "status_id",
    isDisplayed: false,
    isEditable: false,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "status name",
    value: "status_name",
    isDisplayed: true,
    isEditable: true,
    getElement: (props) => <input {...props} />,
  },
  {
    label: "notes",
    value: "notes",
    isDisplayed: true,
    isEditable: true,
    getElement: (props) => <textarea {...props} style={{ resize: "none" }} />,
  },
];
