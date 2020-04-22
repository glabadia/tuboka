import React from "react";
import { Typography, Paper } from "@material-ui/core";

const MainVideo = ({ video }) => {
  const {
    id: { videoId },
    snippet: { title, channelTitle, description, publishedAt },
  } = video;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="container-left">
      <div className="video-container">
        <iframe
          height="100%"
          width="100%"
          src={videoUrl}
          title="Video Player"
          frameborder="0"
        ></iframe>
      </div>
      <Paper elevation={3} style={{ padding: ".3em" }}>
        <Typography
          variant="h4"
          style={{ marginTop: ".5em", fontWeight: "bold" }}
        >
          {title} - {channelTitle}
        </Typography>
        <Typography variant="subtitle1">{channelTitle}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
        <Typography variant="subtitle2">
          {new Date(publishedAt).toLocaleDateString()}
        </Typography>
      </Paper>
    </div>
  );
};

export default MainVideo;
