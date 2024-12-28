import { useState } from "react";
import { Box, Grid } from "@mui/material";
import ReactPlayer from "react-player";
import useStore from "./store";

function Jam() {
  const [highlight, setHighlight] = useState(false);
  const videos = useStore((state) => state.videos);

  return (
    <Box width={"100vw"} height={"100vh"}>
      <Grid container spacing={0} sx={{ width: "100%", height: "100%" }}>
        {videos.map((video, index) => (
          <Grid
            item
            xs={4}
            key={index}
            sx={{
              border: "1px solid #000",
              // opacity: !highlight || index == 4 ? 1 : 0.4,
            }}
            onClick={() => {
              if (index !== 4) {
                return;
              }
              setHighlight(!highlight);
            }}
          >
            {(index !== 4 || (index == 4 && highlight)) && (
              <ReactPlayer
                url={video.url}
                loop={true}
                width="100%"
                height="100%"
                volume={video.volume}
              ></ReactPlayer>
            )}
            {index == 4 && !highlight && (
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=23I8OtXCs3o"}
                onStart={() => setHighlight(true)}
                width="100%"
                height="100%"
              ></ReactPlayer>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Jam;
