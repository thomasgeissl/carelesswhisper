import { useState } from "react";
import { Box, Button, Grid, Grid2, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import useStore, { getVideosFromURL, setVideosInURL } from "./store";

function Intro() {
  const started = useStore((state) => state.started);
  const setStarted = useStore((state) => state.setStarted);
  const [step, setStep] = useState(-1);
  const steps = [
    "Have you ever been to a FREE jazz performance?",
    "One that was truly free?",
    "Free like playing simple melodies such as 'Careless Whisper?'",
    "",
    "Have you ever seen a FREE jazz performance where the sax player wasn't center stage?",
    "And was not a man?",
    "Have you ever caught yourself thinking I could do the same?",
  ];
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
    display={"flex"}
    flexDirection={"column"}
      padding={"12px"}
      onClick={() => {
        setStep(step + 1);
        if (step > steps.length - 2) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth", // for a smooth scroll effect; you can omit this if you want an instant scroll
          });
        }
      }}
    >
      {!started && (
        <Box>
          <Button variant="outlined" onClick={() => setStarted(true)}>
            start
          </Button>
        </Box>
      )}
      {started && (
        <>
          {step === -1 && (
            <Box width={"100%"} height={"100%"} textAlign={"center"}>
              <img
                src={
                  "https://www.musikmachen.de/app/uploads/webp/2019/04/SAX_Saxophon_reinigen_Teaser_1200x780.webp"
                }
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></img>
              {/* <img src={"https://media.gettyimages.com/id/942171920/photo/musician-with-saxophone.jpg?s=612x612&w=0&k=20&c=8SNPWLiw-KZ7ASc2NGe6dp0kOFaMHlVDXJmbaRF3YXw="}></img> */}
            </Box>
          )}
          {steps.map((text, index) => {
            if (step < index) {
              return <Box key={`step-${index}`}></Box>;
            }
            return (
              <Typography key={`step-${index}`} variant="h2">
                {text}
              </Typography>
            );
          })}
          {step === 3 && (
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=iZcWtrE33FI"}
              autoplay={true}
            ></ReactPlayer>
          )}
          {/* <Button onClick={()=>{
        setVideosInURL()
      }}>save</Button>
     <Button onClick={()=>{
        getVideosFromURL();
      }}>load</Button> */}
      <Box flex={1}></Box>
          <Box display={"flex"} padding={"50px"}>
            <Box flex={1}></Box>
            <Button variant="outlined" onClick={() => setStep(step + 1)}>
              next
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Intro;
