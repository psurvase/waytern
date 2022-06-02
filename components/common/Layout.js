import { Box, Grid } from "@mui/material";
import HeaderComponent from "./HeaderComponent";
import SideMenuComponent from "./SideMenuComponent";
import ClientOnly from "../../utility/ClientOnlyThemeComponent";
import FooterComponent from "./FooterComponent";

const Layout = props => (
    <ClientOnly>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <HeaderComponent />
                </Grid>
                <Grid item xs={1.8}>
                    <div>
                        <SideMenuComponent />
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <>{props.children}</>
                </Grid>
                <Grid item xs={12}>
                    {/* <FooterComponent /> */}
                </Grid>
            </Grid>
        </Box>

    </ClientOnly>


);

export default Layout;
