import {
  statusHeadings,
  statusConfig,
  locationHeadings,
  locationConfig,
} from "../configs/tableHeadingsConfig";

export default function tableManagementReducer(state, action) {
  switch (action.type) {
    case "STATUS":
      return {
        ...state,
        selectMenu: "status",
        rows: action.payload,
        headings: statusHeadings,
        config: statusConfig,
        defaultSortedHeading: "status_id",
      };
    case "LOCATION":
      return {
        ...state,
        selectMenu: "location",
        rows: action.payload,
        headings: locationHeadings,
        config: locationConfig,
        defaultSortedHeading: "location_id",
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
};
