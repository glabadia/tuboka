import React from "react";
import VideoItem from "./VideoItem";
import { Paper, Grid } from "@material-ui/core";

const VideoList = ({ videos, onSelectVideo }) => {
  const videosList = videos.map((video, idx) => (
    <VideoItem key={idx} video={video} onSelect={onSelectVideo} />
  ));
  return (
    <div className="container-right">
      <Paper elevation={7}>{videosList}</Paper>
    </div>
  );
};

export default VideoList;
