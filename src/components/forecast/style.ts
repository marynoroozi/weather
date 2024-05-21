export const useStyles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    column: {
      display: "flex",
      flexDirection: "column",
    },
    forecastBox: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      "& > :not(style)": {
        m: 1,
        width: 90,
        height: 130,
      },
    },
    paper: {
      borderRadius: "45%",
      display: "flex",
      flexDirection: "column-reverse",
      background: "#09898bbd",
    },
    papernow: {
      borderRadius: "45%",
      display: "flex",
      flexDirection: "column-reverse",
      background: "#0000003b",
    },
    centeredText: {
      textAlign: "center" as const,
      textShadow: "0 0 2px #fff",
    },
    marginBottom: {
      margin: "0 0 19px 0",
      color: "#fff",
      textShadow: "none",
    },
  };
  