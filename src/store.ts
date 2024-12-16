import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import packageJson from "../package.json";

interface State {
  version: string;
  videos: any[];
  started: boolean;
  step: number;
  settingsOpen: boolean;
  setStarted(value: boolean): void;
  setStep(value: number): void;
  setVideos(videos: Video[]): void;
  setSettingsOpen(value: boolean): void;
  setVideoUrl(index: number, value: string): void;
}
interface Video {
  url: string;
  volume: number;
}

function extractVideoId(url: string) {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*[?&]v=([^&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

async function copyToClipboard(text: string) {
  try {
      await navigator.clipboard.writeText(text);
      console.log("Copied to clipboard:", text);
  } catch (err) {
      console.error("Failed to copy text:", err);
  }
}


function setVideosInURL() {
  const videos = useStore.getState().videos;
  const urls = videos.map((video) => {
    return extractVideoId(video.url);
  });
  const params = new URLSearchParams(window.location.search);
  params.set("videos", encodeURIComponent(JSON.stringify(urls)));
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}?${params.toString()}`
  );

  copyToClipboard(window.location.href)
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
        started: false,
        step: -1,
        settingsOpen: false,
        setStarted: (value: boolean) => {
          set({ started: value });
        },
        setStep: (value: number) => {
          set({ step: value });
        },
        setVideos: (videos: Video[]) => {
          set({ videos });
        },
        setSettingsOpen: (value: boolean) => {
          set({ settingsOpen: value });
        },
        setVideoUrl(index, value) {
          const videos = get().videos;
          videos[index].url = value;
          set({ videos });
        },
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

function getVideosFromURL(): Video[] {
  const params = new URLSearchParams(window.location.search);
  const videos = params.get("videos");
  if (videos) {
    const urls = JSON.parse(decodeURIComponent(videos));
    const videoObjects = urls.map((url: string) => {
      return {
        url: `https://www.youtube.com/watch?v=${url}`,
        volume: 0.4,
      };
      // useStore.set
    });
    useStore.getState().setVideos(videoObjects);
  }
  return [];
}

export default useStore;
export { setVideosInURL, getVideosFromURL };
