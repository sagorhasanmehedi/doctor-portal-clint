import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import DHompage from "../DHompage/DHompage";
import Makeadmin from "../Makeadmin/Makeadmin";
import Adddoctor from "../AddDoctor/Adddoctor";
import Manageservices from "../ManageServices/Manageservices";
import Useauth from "../../../Hook/Useauth";
import Payment from "../Payment/Payment";

const drawerWidth = 200;

function Dashbord(props) {
  const { window } = props;
  const { admin } = Useauth();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let { path, url } = useRouteMatch();
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to={`${url}`}>
        <Button color="inherit">Dashboard</Button>
      </Link>

      {admin && (
        <Box>
          <Link style={{ textDecoration: "none" }} to={`${url}/makeadmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`${url}/adddoctor`}>
            <Button color="inherit">Add Doctor</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`${url}/manageservices`}>
            <Button color="inherit">Manage Services</Button>
          </Link>
        </Box>
      )}
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashbord
          </Typography>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "10px",
            }}
            to={"/appionment"}
          >
            <Button color="inherit">Appionment</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Switch>
          <Route exact path={path}>
            <DHompage />
          </Route>
          <Route path={`${path}/adddoctor`}>
            <Adddoctor />
          </Route>
          <Route path={`${path}/makeadmin`}>
            <Makeadmin />
          </Route>
          <Route path={`${path}/payment/:id`}>
            <Payment />
          </Route>
          <Route path={`${path}/manageservices`}>
            <Manageservices />
          </Route>
        </Switch>

        <Toolbar />
      </Box>
    </Box>
  );
}

Dashbord.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashbord;
