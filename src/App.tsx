import { Box } from "@mui/material";
import Jam from "./Jam";
import Intro from "./Intro";
import useStore from "./store";

function App() {
  const step = useStore((state) => state.step);
  return (
    <Box width={"100vw"} height={"100vh"}>
      <Intro></Intro>
      {step >= 6 && <Jam></Jam>}
    </Box>
  );
}

export default App;
