import {
  statusHeadings,
  statusConfig,
  locationHeadings,
  locationConfig,
  partsHeadings,
  partsConfig,
  partCategoryHeadings,
  partCategoryConfig,
  usersHeadings,
  usersConfig,
} from "../configs/tableHeadingsConfig";
import { addStatus, deleteStatus, editStatus } from "../utils/statusUtils";
import {
  addLocation,
  deleteLocation,
  editLocation,
} from "../utils/locationUtils";
import { addParts, deleteParts, editParts } from "../utils/partsUtils";
import {
  statusConfig as statusModalConfig,
  locationConfig as locationModalConfig,
  partsConfig as partsModalConfig,
  partCategoryConfig as partCategoryModalConfig,
  usersConfig as usersModalConfig,
} from "../configs/tmConfig";
import {
  addPartCategory,
  editPartCategory,
  deletePartCategory,
} from "../utils/partCategoryUtils";
// import { addUsers, deleteUsers, editUsers } from "../utils/usersUtils";

export default function tableManagementReducer(state, action) {
  switch (action.type) {
    case "STATUS":
      return {
        ...state,
        selectMenu: "status",
        rows: action.payload,
        headings: statusHeadings,
        config: statusConfig,
        modalConfig: statusModalConfig,
        defaultSortedHeading: "status_id",
        handleAdding: addStatus,
        handleDeleting: deleteStatus,
        handleEditing: editStatus,
      };
    case "LOCATION":
      return {
        ...state,
        selectMenu: "location",
        rows: action.payload,
        headings: locationHeadings,
        config: locationConfig,
        modalConfig: locationModalConfig,
        defaultSortedHeading: "location_id",
        handleAdding: addLocation,
        handleDeleting: deleteLocation,
        handleEditing: editLocation,
      };
    case "PART": {
      return {
        ...state,
        selectMenu: "parts",
        rows: action.payload,
        headings: partsHeadings,
        config: partsConfig,
        modalConfig: partsModalConfig,
        defaultSortedHeading: "internal_part_number",
        handleAdding: addParts,
        handleDeleting: deleteParts,
        handleEditing: editParts,
      };
    }
    case "CATEGORY": {
      return {
        ...state,
        selectMenu: "partCategories",
        rows: action.payload,
        headings: partCategoryHeadings,
        config: partCategoryConfig,
        modalConfig: partCategoryModalConfig,
        defaultSortedHeading: "part_category_id",
        handleAdding: addPartCategory,
        handleDeleting: deletePartCategory,
        handleEditing: editPartCategory,
      };
    }
    // case "USER": {
    //   return {
    //     ...state,
    //     selectMenu: "users",
    //     rows: action.payload,
    //     headings: usersHeadings,
    //     config: usersConfig,
    //     defaultSortedHeading: "user_id",
    //     handleAdding: addUsers,
    //     handleDeleting: deleteUsers,
    //     handleEditing: editUsers,
    //   };
    // }
    case "UPDATE_SELECT_MENU":
      return {
        ...state,
        selectMenu: action.payload,
      };
    case "UPDATE_SELECTED_ROW":
      return {
        ...state,
        selectedRow: action.payload,
      };
    default:
      return { ...state };
  }
}

export const DEFAULT_STATE = {
  selectMenu: "status",
  rows: [],
  headings: statusHeadings,
  config: statusConfig,
  defaultSortedHeading: "status_id",
  selectedRow: {},
  handleAdding: addStatus,
  handleDeleting: deleteStatus,
  handleEditing: editStatus,
};
