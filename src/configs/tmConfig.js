export const statusConfig = [
  {
    label: "status name",
    value: "status_name",
    isEditable: true,
    getElement: (props) => {
      return <input {...props} />;
    },
  },
  {
    label: "notes",
    value: "notes",
    isEditable: true,
    getElement: (props) => <textarea {...props} style={{ resize: "none" }} />,
  },
];
