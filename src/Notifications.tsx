// import useStore, { getVideosFromURL, setVideosInURL } from "./store";

import { Snackbar } from "@mui/material";
import useStore from "./store";

function Notifications() {
  const showCopiedNotification = useStore(
    (state) => state.showCopiedNotification
  );
  const setShowCopiedNotification = useStore(
    (state) => state.setShowCopiedNotification
  );
  return (
    <>
      <Snackbar
        open={showCopiedNotification}
        autoHideDuration={6000}
        onClose={() => setShowCopiedNotification(false)}
        message="Copied to clipboard!"
      />
    </>
  );
}

export default Notifications;
