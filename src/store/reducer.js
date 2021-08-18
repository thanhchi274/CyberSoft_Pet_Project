import * as ActionType from "./action.type";
let initialState = {
 data: [],
 sheetData: [],
 loading: true,
};
const reducer = (state = initialState, action) => {
 switch (action.type) {
  case ActionType.GET_SHEETS: {
   state.data = action.data;
   return { ...state, loading: false };
  }
  case ActionType.GET_SHEETS_DETAIL: {
   state.sheetData = action.sheetData;
   return { ...state, loading: false };
  }
  default:
   return { ...state };
 }
};
export default reducer;
