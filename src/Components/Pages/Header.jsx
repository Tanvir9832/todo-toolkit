import { AppBar } from "@mui/material";
import { MyTypography } from "../../styles/customComponents";

const Header = () => {
  return (
    <AppBar color="secondary" position="sticky">

        <MyTypography sx={{ textAlign: "center" }}> TODO </MyTypography>

    </AppBar>
  );
};

export default Header;
