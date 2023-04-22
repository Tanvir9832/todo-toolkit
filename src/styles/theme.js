import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode : "dark",
    body: {
      main: "#0052cc",
      mainLight: "rgba(0, 48, 73 , 0.5)",
    },
    primary :{
      main: "#0052cc",
      mainLight: "#eee",
    },
    secondaryMain: "rgb(247, 127, 0)",
    secondaryMainLight: "rgb(247, 127, 0.5)",
    tertiaryMain: "rgb(234, 226, 183)",
    tertiaryMainLight: "rgb(234, 226, 183,0.5 )",
    text: {
      dark: "rgb(0, 0, 0)",
      light: "rgb(255, 255, 255)",
    },
    customTheme : {
      main : "#0052cc",
      superDark : "#0052cc"
    }
  },
});
