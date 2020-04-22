import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";

import "./App.css";

import { MainVideo, VideoList, SearchBar } from "./components";
import { youtube, apikey } from "./utils";

function App() {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [keyword, setKeyWord] = useState("cats");

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { items },
      } = await youtube.get("search", {
        params: {
          maxResults: 10,
          q: keyword,
          part: "snippet",
          type: "video",
          key: apikey,
        },
      });

      setVideos(await items);
      setActiveVideo(items[0]);
    };

    fetchData();
  }, [keyword]);

  const handleSelectVideo = (video) => {
    setActiveVideo(video);
  };

  if (!videos) return null;
  if (!activeVideo) return null;
  return (
    <>
      <Helmet>
        <title>{activeVideo.snippet.title}</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchBar keyword={keyword} onSubmit={setKeyWord} />
        </Grid>

        <div className="main-container">
          <MainVideo video={activeVideo} />

          <VideoList videos={videos} onSelectVideo={handleSelectVideo} />
        </div>
        {/* <pre>{JSON.stringify(videos, null, 2)}</pre> */}
      </Grid>
    </>
  );
}

export default App;
