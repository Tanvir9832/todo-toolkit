import { AppBar } from "@mui/material";
import { MyTypography } from "../../styles/customComponents";

const Header = () => {
  return (
    <AppBar position="sticky">

        <MyTypography sx={{ textAlign: "center" ,color : "customTheme.main" }}> TODO </MyTypography>

    </AppBar>
  );
};

export default Header;
