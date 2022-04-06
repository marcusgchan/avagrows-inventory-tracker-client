import handleStatusColumns from "./tmStatusColumnsUtils";
import handleLocationColumns from "./tmLocationColumnsUtils";
import handlePartsColumns from "./tmPartsColumnsUtils";
import handlePartCategoryColumns from "./tmPartCategoryColumnsUtils";
import handlePeopleColumns from "./tmPeopleColumnsUtils";

export default function handleTmColumns(
  selectMenu,
  selectRow,
  toggleEditModal,
  toggleDeleteModal
) {
  switch (selectMenu) {
    case "status":
      return handleStatusColumns(selectRow, toggleEditModal, toggleDeleteModal);
    case "location":
      return handleLocationColumns(
        selectRow,
        toggleEditModal,
        toggleDeleteModal
      );
    case "parts":
      return handlePartsColumns(selectRow, toggleEditModal, toggleDeleteModal);
    case "partCategories":
      return handlePartCategoryColumns(
        selectRow,
        toggleEditModal,
        toggleDeleteModal
      );
    case "users":
      return handlePeopleColumns(selectRow, toggleEditModal, toggleDeleteModal);
    default:
      throw new Error("Invalid selectMenu");
  }
}
