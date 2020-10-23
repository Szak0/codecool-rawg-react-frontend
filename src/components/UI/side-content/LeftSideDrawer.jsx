import React from "react";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Drawer from "@material-ui/core/Drawer";
import DrawerContent from "../../UI/side-content/DrawerContent";

const LeftSideDrawer = ({
  classes,
  handleDrawerClose,
  theme,
  open,
  handleMenuClose,
  handleMobileMenuClose,
  anchorEl,
  mobileMoreAnchorEl,
  setOpen,
}) => {
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <DrawerContent setOpen={setOpen} />
    </Drawer>
  );
};

export default LeftSideDrawer;
