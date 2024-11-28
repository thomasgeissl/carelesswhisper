import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import packageJson from "../package.json";

interface State {
  version: string;
  videos: any[];
}
interface Video {
  url: string;
  volume: number;
}

function getVideosFromURL(): Video[] {
  const params = new URLSearchParams(window.location.search);
  const videos = params.get("videos");
  console.log(videos);
  return videos ? JSON.parse(decodeURIComponent(videos)) : [];
}

function setVideosInURL() {
  const videos = useStore.getState().videos;
  const params = new URLSearchParams(window.location.search);
  params.set("videos", encodeURIComponent(JSON.stringify(videos)));
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}?${params.toString()}`
  );
}

const useStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        version: packageJson.version,
        videos: [
          {
            url: "https://www.youtube.com/shorts/J-4lB80g5iA",
            volume: 0.4,
          },
          {
            url: "https://www.youtube.com/watch?v=yOZbmHEG1Jg",
            volume: 1,
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
            //   url: "https://youtu.be/J16OHA4MRa0?t=118",
            url: "https://www.youtube.com/shorts/yMtcaZmUBmo",
            volume: 0.2,
          },
          {
            url: "https://www.youtube.com/watch?v=Q2qXSmwpdFo",
            volume: 0.7,
          },
          {
            url: "https://www.youtube.com/watch?v=M5CLb8pZowI",
            volume: 0.4,
          },
        ],
      }),
      {
        name: "app",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => {},
      }
    ),
    { name: "app" }
  )
);

export default useStore;
export { setVideosInURL, getVideosFromURL };
