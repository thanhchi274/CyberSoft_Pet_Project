import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { DateTime } from "luxon";
import {  toast } from 'material-react-toastify';
const useStyles = makeStyles((theme) => ({
 root: {
  width: "100%",
 },
 heading: {
  fontSize: theme.typography.pxToRem(15),
  fontWeight: 700,
  wordBreak: "break-all",
 },
 secondaryHeading: {
  fontSize: theme.typography.pxToRem(15),
  color: theme.palette.text.secondary,
 },
 icon: {
  verticalAlign: "bottom",
  height: 20,
  width: 20,
 },
 details: {
  alignItems: "center",
 },
 column: {
  flexBasis: "25%",
  wordBreak: "break-all",
 },
 columnSQLHeading: {
  flexBasis: "5%",
 },
 columnSQL: {
  flexBasis: "95%",
 },
 helper: {
  borderLeft: `2px solid ${theme.palette.divider}`,
  padding: theme.spacing(1, 2),
  height: "100%",
 },
 code: {},
 link: {
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
   textDecoration: "underline",
  },
 },
 pre: {
  whiteSpace: "pre-wrap",
  wordBreak: "break-all",
  "& code": {
   fontSize: "12px",
  },
 },
}));

function DetailedAccordion({ sheetData }) {
 const classes = useStyles();
 const textAreaRef = useRef(null);
 const [data, setData] = useState([]);
 useEffect(() => {
  setData(sheetData);
 }, [sheetData]);
 const handleClick = (event) => {
  let currentDate = DateTime.now().toFormat("yyyy-LL-dd HH:mm:ss");
  let copyData = [];
  let specialSheet =data.range.includes('fill_inblank_code')
  data.values.map((item, index) => {
   let rawData = [
    `N'`+`${item[1]}`,
    item[2],
    specialSheet?"":item[3],
    specialSheet?item[3]:item[4],
    'fill_inblank_code',
    "",
    item[8],
    "",
    "",
    currentDate,
   ];
   return index > 0 && item[1]!=="" ? copyData.push(rawData) : null;
  });
  let convertedData=  JSON.stringify(copyData)
  .split('"').join("'")
  .split(/[\{\[]/)
  .join("(")
  .split(/[\}\]]/)
  .join(")")
  .replaceAll(/\:'|\:\s'|\s\:'|\s\:\s'/g,':')
  .replaceAll(/\.'|\.\s'|\s\.'|\s\.\s'/g,'.')
  .replaceAll("\\'",'"')
  .replace(/'N'/g,"N'")
  .replaceAll("?''","?'")
  .replaceAll("='",'="')
.replace(/\\n|\\r/g, '')
.slice(0,-1).slice(1)
    navigator.clipboard.writeText(
       ' INSERT INTO tblBaiTap (TieuDe,NoiDung,NoiDungCSS,OUTPUT,LoaiBaiTap,NgonNgu,CapDo,GhiChu,DaXoa,NgayTao) VALUES'+
              convertedData
    );
    toast.success(`Copied Table ${data.range}!`);
 };
 return data.values.length > 0 ? (
  <div className={classes.root}>
   <AccordionDetails className={classes.details}>
    <div className={classes.columnSQLHeading}>
     <IconButton aria-label='delete' onClick={handleClick}>
      <FileCopyIcon />
     </IconButton>
    </div>
    <div className={clsx(classes.columnSQL, classes.helper)}>
     <Accordion>
      <AccordionSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls='panel1a-content'
       id='panel1a-header'
      >
       <Typography className={classes.heading}>Result</Typography>
      </AccordionSummary>
      <AccordionDetails>
       <pre className={classes.pre}>
        <code ref={textAreaRef}>
         {" "}
         "INSERT INTO <b>Tên Bảng</b>(
    TieuDe,
    NoiDung,
    NoiDungCSS,
    OUTPUT,
    LoaiBaiTap,
    NgonNgu,
    CapDo,
    GhiChu,
    DaXoa,
    NgayTao
)
VALUES
" + (<b>Dữ Liệu 1</b>),(<b>Dữ Liệu 2</b>),...
        </code>
       </pre>
       <br />
      </AccordionDetails>
     </Accordion>
    </div>
   </AccordionDetails>
   <Accordion defaultExpanded>
    <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls='panel1c-content'
     id='panel1c-header'
    >
     <div className={classes.column}>
      <Typography className={classes.heading}>Tiêu Đề</Typography>
     </div>
     <div className={classes.column}>
      <Typography className={classes.heading}>Nội Dung</Typography>
     </div>
     <div className={classes.column}>
      <Typography className={classes.heading}>OUTPUT</Typography>
     </div>
     <div className={classes.column}>
      <Typography className={classes.heading}>DS Câu trả lời</Typography>
     </div>
    </AccordionSummary>
    {data.values.map((item, index) => {
     return index > 0 ? (
      <AccordionDetails className={classes.details} key={index}>
       <div className={classes.column}>
        <Typography className={classes.heading}>
         {item[0] + ". " + item[1]}
        </Typography>
       </div>
       <div className={classes.column}>
        <b>Nội Dung (HTML): </b>
        <pre className={classes.pre}>
         <code dangerouslySetInnerHTML={{ __html: item[2] }}></code>
        </pre>
        <b>Nội Dung CSS: </b>
        <br />
        {data.values[0][3].toLocaleLowerCase().includes("input_css") ||
        data.values[0][3] === "input_CSS" ? (
         <pre className={classes.pre}>
          <code
           dangerouslySetInnerHTML={{
            __html: item[3].replace("&lsqb;&quest;&rsqb;", "&#x1F90D"),
           }}
          ></code>
         </pre>
        ) : null}
       </div>
       <div className={clsx(classes.column, classes.helper)}>
        <pre className={classes.pre}>
         <code className={classes.code}>
          {item[4] === "" ? item[3] : item[4]}
         </code>
        </pre>
       </div>
       <div className={clsx(classes.column, classes.helper)}>
        <Typography variant='caption'>
         {item[5]
          ? JSON.parse(item[5]).map((item, index) => {
             return (
              <pre className={classes.pre} key={index}>
               <code>
                <b>{item.ma}:</b> {item.noiDung}
                <br />
               </code>
              </pre>
             );
            })
          : null}
        </Typography>
        <Typography>
         <b>Đáp án:</b>
         {item[6]
          ? JSON.parse(item[6]).map((item, index) => {
             return index === 0 ? (
              <code key={index}> {item} </code>
             ) : (
              <code key={index}>
               {" và "}
               {item}
              </code>
             );
            })
          : null}
        </Typography>
        <Typography>
         <b>Độ Khó:</b> {item[8]}
        </Typography>
       </div>
      </AccordionDetails>
     ) : null;
    })}
    <Divider />
   </Accordion>
  </div>
 ) : null;
}
const mapStateToProps = (state) => {
 return {
  sheetData: state.reducer.sheetData,
 };
};
export default connect(mapStateToProps, null)(DetailedAccordion);
