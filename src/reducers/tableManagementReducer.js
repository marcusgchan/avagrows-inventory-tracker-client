import {
  statusHeadings,
  statusConfig,
  locationHeadings,
  locationConfig,
} from "../configs/tableHeadingsConfig";
import { addStatus, deleteStatus, editStatus } from "../utils/statusUtils";
import {
  addLocation,
  deleteLocation,
  editLocation,
} from "../utils/locationUtils";
import { statusConfig as modalConfig } from "../configs/tmConfig";

export default function tableManagementReducer(state, action) {
  switch (action.type) {
    case "STATUS":
      return {
        ...state,
        selectMenu: "status",
        rows: action.payload,
        headings: statusHeadings,
        config: statusConfig,
        modalConfig: modalConfig,
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
        defaultSortedHeading: "location_id",
        handleAdding: addLocation,
        handleDeleting: deleteLocation,
        handleEditing: editLocation,
      };
    case "UPDATE_SELECT_MENU":
      return {
        ...state,
        selectMenu: action.payload,
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
