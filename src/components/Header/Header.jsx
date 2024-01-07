import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ImageListItem } from "@mui/material";
import ContactDialog from "../../Dialogs/ContactDialog.tsx"
import PricingDialog from "../../Dialogs/PricingDialog.tsx"




const drawerWidth = 240;
const navItems = ["Price List", "Contact"];

function Header(props) {
  const [open, setOpen] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <ImageListItem sx={{ my: 2 }}>
        <img src="./logo.png" alt="logo"></img>
      </ImageListItem>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" , color:"#0a1a42" , ':hover' :{backgroundColor: "rgba(10, 26, 66, 0.58)", color: "rgba(222, 157, 8, 1)"}}}
              onClick={() => {
                item === "Price List"
                  ? setOpen(true)
                  : item === "Contact"
                  ? setOpenContact(true)
                  : setOpen(false);
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "transparent ",
          borderBottom: "1px solid #dfdfdf",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" },backgroundColor:"rgba(222, 157, 8, 1)" } }
          >
            <MenuIcon />
          </IconButton>
          <ImageListItem>
            <img src="./logo.png" alt="logo"></img>
          </ImageListItem>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "rgba(222, 157, 8, 1)", fontWeight:"700", fontSize:"18px" }}
                onClick={() => {
                  item === "Price List"
                    ? setOpen(true)
                    : item === "Contact"
                    ? setOpenContact(true)
                    : setOpen(false);
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
              background:
                "rgba(222, 157, 8, 0.58)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
<ContactDialog openContact={openContact}
        onClose={() => {
          setOpenContact(false);
        }}/>


    
      <PricingDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </Box>
  );
}

export default Header;
