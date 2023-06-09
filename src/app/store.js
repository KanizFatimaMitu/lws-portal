import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import videoReducer from "../features/video/videoSlice";
import tagReducer from "../features/tags/tagsSlice"

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagReducer,
        video: videoReducer,
    },
});
