"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import GTranslateIcon from "@mui/icons-material/GTranslate";

import { Fitbit } from "@mui/icons-material";
import Link from "next/link";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default function TemporaryDrawer({ user }) {
  const [state, setState] = React.useState({
    left: false,
  });
  const [isListOpen, setIsListOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: Fitbit || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-[#e9e9e9] h-screen px-5"
    >
      <List>
        <Link href={"/"}>
          <ListItem key={"text"} disableGutters>
            <ListItemButton>
              <ListItemIcon className="h-12 w-12 mt-6 -mr-4">
                <HolidayVillageIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link href={"/student/prefrence"}>
          <ListItem key={"text"} disableGutters>
            <ListItemButton>
              <ListItemIcon className="h-12 w-12">
                <img
                  className="h-full w-full object-contain"
                  src={"/prefrencepng.png"}
                  alt=""
                />
              </ListItemIcon>
              <ListItemText primary={"Edit prefrence"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem key={"text"} disableGutters>
          <ListItemIcon className="h-12 w-12 mt-4 -mr-6 ml-3">
            <GTranslateIcon />
          </ListItemIcon>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Language</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Language"
              onChange={handleChange}
              defaultChecked={"English"}
            >
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Hindi"}>Hindi</MenuItem>
              <MenuItem value={"Punjabi"}>Punjabi</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
