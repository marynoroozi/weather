import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

export const useStyles = {
  paper: {
    p: "2px 4px",
    mx: 3,
    display: "flex",
    flexGrow: 1,
  },
  box: { m: 2, mx: "auto", display: "flex" },
  innerBox: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  paperForm: {
    p: "2px 4px",
    mx: 3,
    display: "flex",
    flexGrow: 1,
    marginLeft:0
  }
};
export const MaterialUISwitch = styled(Switch)(() => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          content: "'\u00B0F'",
          top: "7px",
          left: "7px",
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#252f30",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "'\u00B0C'",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "6px",
        top: "7px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#252f30",
      borderRadius: 20 / 2,
    },
  }));
  