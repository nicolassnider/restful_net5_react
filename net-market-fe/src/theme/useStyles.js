import { makeStyles } from "@mui/styles";
import theme from "../theme/theme";

const useStyles = makeStyles({
  containermt: {
    marginTop: 30,
  },
  card: {
    padding: 30,
  },
  avatar: {
    backgroundColor: "#0f80aa",
    width: 80,
    height: 80,
  },
  icon: {
    fontSize: 60,
  },
  form: {
    marginTop: 40,
    marginBottom: 10,
  },
  gridmb: {
    marginTop: 5,
    marginBottom: 20,
  },
  link: {
    marginTop: 8,
    fontSize: "1.1rem",
    fontFamily: "Roboto",
    lineHeight: 1.5,
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  appBar: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  grow: {
    flexGrow: 0,
    [theme.breakpoints.up("md")]: {
      flexGrow: 1,
    },
  },
  linkAppBarLogo: {
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    textDecoration: "none",
  },
  mr: {
    marginRight: 3,
  },
  buttonIcon: {
    fontSize: 14,
    padding: 0,
  },
  link_app_bar_desktop: {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 16px",
    color: "inherit",
    textDecoration: "none",
  },
  list: {
    width: 250,
  },
  list_item: {
    padding: 0,
  },
  link_app_bar_mobile: {
    display: "inline-flex",
    alignItems: "center",
    width: "100%",
    padding: "8px 16px",
    color: "inherit",
    textDecoration: "none",
  },
  list_item_icon: {
    minWidth: 35,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  text_title: {
    fontWeight: 600,
    color: "#494949",
    marginBottom: 10,
  },
  media: {
    height: 250,
    backgroundColor: "#F2F2F2",
    margin: "15px 15px 0 15px",
  },
  price: {
    float: "right",
    padding: "0 20px 0 20px",
    backgroundColor: "#0f80aa",
  },
  text_card: {
    fontWeight: "bold",
    color: "#656565",
    marginBottom: 8,
  },
  paper_img: {
    backgroundColor: "#F2F2F2",
  },
  media_detail: {
    width: 380,
    height: 380,
    margin: "auto",
  },
  text_detail: {
    fontWeight: 500,
    color: "#494949",
    marginBottom: 5,
  },
  img_product_cc: {
    backgroundColor: "#F2F2F2",
    width: 80,
    height: 70,
  },
  paper_padding: {
    padding: 20,
  },
  grid_pc:{
    margin:"auto",
    marginTop:20
  },
  button_back:{
    marginRight:8
  },
  form_control:{
    margin:12
  },
  grid_lr:{
    paddingLeft:30,
    paddingBottom:20,
    paddingRight:30
  },
  divider:{
    marginTop:12,
    marginBottom:12
  },
  img_product_pc:{
    backgroundColor:"#F2F2F2",
    width:50,
    height:40
  },
  text_shipping:{
    lineHeight:3
  },
  alert_not_delivered:{
    margin:5,
    padding:"15px 15px 5px 15px",
    marginBottom:20,
    backgroundColor:"#FFCCCC"
  },
  alert_delivered:{
    margin:5,
    padding:"15px 15px 5px 15px",
    marginBottom:20,
    backgroundColor:"#D6F5D6"
  },
  image_uploader:{
    padding:0,
    margin:"-25px auto 15px",
    width:0
  },
  avatar_profile:{
    width:130,
    height:130,
    backgroundColor:"#0f80aa"
  },
  table:{
    border:"1px solid #e0e0e0"
  },
  icon_delivered:{
    color:"green",
    fontWeight:900
  },
  icon_not_delivered:{
    color:"red",
    fontWeight:900
  },
  avatar_profile_app_bar:{
    marginRight:8,
    backgroundColor:"#f2f2f2"
  },
  list_sub_item:{
    padding:"0 0 0 30px"
  }
});

export default useStyles;
