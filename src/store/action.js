import * as ActionTypes from "./action.type";
import axios from "axios";
export const getSheets = (spreadsheetsId) => {
 return (dispatch) => {
  axios({
   method: "GET",
   url: `https://googlesheetapi274.herokuapp.com/?id=${spreadsheetsId}&sheets=fill_inblank_html_css`,
  })
   .then(async (result) => {
    dispatch({
     type: await ActionTypes.GET_SHEETS,
     data: await result.data,
    });
   })
   .catch((err) => {
    return err;
   });
 };
};
export const getSheetsDetail = (data) => {
 let { id, option } = data;
 return (dispatch) => {
  axios({
   method: "GET",
   url: `https://googlesheetapi274.herokuapp.com/sheets?id=${id}&sheets=${option}`,
  })
   .then(async (result) => {
    dispatch({
     type: await ActionTypes.GET_SHEETS_DETAIL,
     sheetData: await result.data,
    });
   })
   .catch((err) => {
    return err;
   });
 };
};
