import { useState } from "react";
import { Box, Button, Grid, Grid2, TextField, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import useStore, { getVideosFromURL, setVideosInURL } from "./store";

function Settings() {
  const setSettingsOpen = useStore((state) => state.setSettingsOpen);
  const videos = useStore((state) => state.videos);
  const setVideoUrl = useStore((state) => state.setVideoUrl);
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      padding={"12px"}
      onClick={() => {}}
    >
      <Box>
        <Typography variant="h4">
          Have you ever caught yourself thinking I could do the same?
        </Typography>
        <Typography variant="h4">Why don't you give it a try?</Typography>
      </Box>
      <Box marginTop={"32px"}>
        {videos.map((v, index) => {
          return (
            <TextField
              key={`video-${index}}`}
              value={v?.url}
              fullWidth
              onChange={(event) => {
                setVideoUrl(index, event.target.value);
              }}
            ></TextField>
          );
        })}
      </Box>
      <Button onClick={() => setSettingsOpen(false)}>close</Button>
    </Box>
  );
}

export default Settings;
