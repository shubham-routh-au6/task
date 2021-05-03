import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ContainerDiv: {
    backgroundColor: "#f3f3f2",
    height: "100vh",
  },
  Container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  table: {
    minWidth: 500,
  },
  TableCell: {
    backgroundColor: "#ffc107",
    color: "white",
  },
  Link: {
    marginTop: "5rem",
    marginBottom: "2rem",
  },
  Icon: {
    color: "orange",
    fontSize: "50px",
  },
  FooterBColor: {
    backgroundColor: "grey",
  },
  FooterName: {
    color: "#ffc107",
  },
}));

export default useStyles;
