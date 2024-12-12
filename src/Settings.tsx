import { useState } from "react";
import { Box, Button, Grid, Grid2, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import useStore, { getVideosFromURL, setVideosInURL } from "./store";

function Settings() {
  const setSettingsOpen = useStore((state) => state.setSettingsOpen);
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      padding={"12px"}
      onClick={() => {}}
    >
      settings
      <Button onClick={() => setSettingsOpen(false)}>cancel</Button>
      <Button onClick={() => setSettingsOpen(false)}>save</Button>
    </Box>
  );
}

export default Settings;
