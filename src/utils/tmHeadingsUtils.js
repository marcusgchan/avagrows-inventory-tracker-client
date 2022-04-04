import handleStatusHeadings from "./tmStatusHeadingsUtils";
import handleLocationHeadings from "./tmLocationHeadingsUtils";
import handlePartsHeadings from "./tmPartsHeadingsUtils";
import handlePartCategoryHeadings from "./tmPartCategoryHeadingsUtils";
import handleUserHeadings from "./tmUserHeadingsUtils";

export default function handleTmHeadings(
  selectMenu,
  selectRow,
  toggleEditModal,
  toggleDeleteModal
) {
  switch (selectMenu) {
    case "status":
      return handleStatusHeadings(
        selectRow,
        toggleEditModal,
        toggleDeleteModal
      );
    case "location":
      return handleLocationHeadings(
        selectRow,
        toggleEditModal,
        toggleDeleteModal
      );
    case "parts":
      return handlePartsHeadings(selectRow, toggleEditModal, toggleDeleteModal);
    case "partCategories":
      return handlePartCategoryHeadings(
        selectRow,
        toggleEditModal,
        toggleDeleteModal
      );
    case "users":
      return handleUserHeadings(selectRow, toggleEditModal, toggleDeleteModal);
    default:
      throw new Error("Invalid selectMenu");
  }
}
