import {
  statusConfig,
  locationConfig,
  partsConfig,
  partCategoryConfig,
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
import { addUsers, deleteUsers, editUsers } from "../utils/usersUtils";

export default function tableManagementReducer(state, action) {
  switch (action.type) {
    case "STATUS":
      return {
        ...state,
        selectMenu: "status",
        config: statusConfig.uniqueId,
        rows: action.payload,
        getRowId: (row) => row[statusConfig.uniqueId],
        modalConfig: statusModalConfig,
        handleAdding: addStatus,
        handleDeleting: deleteStatus,
        handleEditing: editStatus,
      };
    case "LOCATION":
      return {
        ...state,
        selectMenu: "location",
        config: locationConfig.uniqueId,
        rows: action.payload,
        getRowId: (row) => row[locationConfig.uniqueId],
        modalConfig: locationModalConfig,
        handleAdding: addLocation,
        handleDeleting: deleteLocation,
        handleEditing: editLocation,
      };
    case "PART": {
      return {
        ...state,
        selectMenu: "parts",
        config: partsConfig.uniqueId,
        rows: action.payload,
        getRowId: (row) => row[partsConfig.uniqueId],
        modalConfig: partsModalConfig,
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
        getRowId: (row) => row[partCategoryConfig.uniqueId],
        config: partCategoryConfig.uniqueId,
        modalConfig: partCategoryModalConfig,
        handleAdding: addPartCategory,
        handleDeleting: deletePartCategory,
        handleEditing: editPartCategory,
      };
    }
    case "USER": {
      return {
        ...state,
        selectMenu: "users",
        rows: action.payload,
        config: usersConfig,
        getRowId: (row) => row[usersConfig.uniqueId],
        modalConfig: usersModalConfig,
        handleAdding: addUsers,
        handleDeleting: deleteUsers,
        handleEditing: editUsers,
      };
    }
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
  config: statusConfig.uniqueId,
  getRowId: (row) => row[statusConfig.uniqueId],
  selectedRow: {},
  modalConfig: statusModalConfig,
  handleAdding: addStatus,
  handleDeleting: deleteStatus,
  handleEditing: editStatus,
};
