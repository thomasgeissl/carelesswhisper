import { useState } from "react";
import { Box, Grid, Grid2, Typography } from "@mui/material";
import ReactPlayer from "react-player";

function Intro() {
  const [step, setStep] = useState(0);
  const steps = [
    "Have you ever been to a FREE jazz performance",
    "One that was truly free",
    "Free like playing simple melodies such as 'Careless Whisper'",
    "",
    "Have you ever seen a FREE jazz performance where the sax player wasn't center stage?",
    "And was not a man",
  ];
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
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
    </Box>
  );
}

export default Intro;
