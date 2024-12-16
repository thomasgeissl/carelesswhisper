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
              <Box
                sx={{
                  position: "fixed",
                  top: 15,
                  right: 15,
                  backgroundColor: "red",
                  padding: "8px",
                  borderRadius: "12px",
                }}
                display={"flex"}
                gap={3}
              >
                <ShareIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => setVideosInURL()}
                ></ShareIcon>
                <SettingsIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => setSettingsOpen(true)}
                ></SettingsIcon>
              </Box>
            </>
          )}
          {settingsOpen && <Settings></Settings>}
        </>
      )}
    </Box>
  );
}

export default App;
