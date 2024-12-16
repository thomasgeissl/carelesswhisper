import { Box } from "@mui/material";
import Jam from "./Jam";
import Intro from "./Intro";
import useStore, { setVideosInURL } from "./store";
import SettingsIcon from "@mui/icons-material/Settings";
import ShareIcon from "@mui/icons-material/Share";
import Settings from "./Settings";

function App() {
  const step = useStore((state) => state.step);
  const settingsOpen = useStore((state) => state.settingsOpen);
  const setSettingsOpen = useStore((state) => state.setSettingsOpen);
  return (
    <Box width={"100vw"} height={"100vh"}>
      <Intro></Intro>
      {step >= 6 && (
        <>
          {!settingsOpen && (
            <>
              <Jam></Jam>
              <ShareIcon
                sx={{ position: "fixed", top: 15, right: 50 }}
                onClick={() => setVideosInURL()}
              ></ShareIcon>
              <SettingsIcon
                sx={{ position: "fixed", top: 15, right: 15 }}
                onClick={() => setSettingsOpen(true)}
              ></SettingsIcon>
            </>
          )}
          {settingsOpen && <Settings></Settings>}
        </>
      )}
    </Box>
  );
}

export default App;
