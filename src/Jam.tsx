import { useState } from "react";
import { Box, Grid, Grid2 } from "@mui/material";
import ReactPlayer from "react-player";

function Jam() {
  const [highlight, setHighlight] = useState(false);
  const videos = [
    {
      url: "https://www.youtube.com/shorts/J-4lB80g5iA",
      volume: 0.4,
    },
    {
      //   url: "https://youtu.be/J16OHA4MRa0?t=118",
      url: "https://www.youtube.com/shorts/yMtcaZmUBmo",
      volume: 0.2,
    },
    {
      url: "https://www.youtube.com/watch?v=sYufMmU7rk8",
      volume: 0.4,
    },
    {
      url: "https://www.youtube.com/watch?v=UW1mnJzyyn0",
      volume: 0.7,
    },
    {
      url: "https://www.youtube.com/watch?v=uGKJkOT_IgU",
      volume: 1,
    },
    {
      url: "https://www.youtube.com/watch?v=cs-RPPsg_ks",
      volume: 0.7,
    },
    {
      url: "https://www.youtube.com/watch?v=yOZbmHEG1Jg",
      volume: 1,
    },
    {
      url: "https://www.youtube.com/watch?v=Q2qXSmwpdFo",
      volume: 0.7,
    },
    {
      url: "https://www.youtube.com/watch?v=M5CLb8pZowI",
      volume: 0.4,
    },
  ];

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
              opacity: !highlight || index == 4 ? 1 : 0.2,
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
