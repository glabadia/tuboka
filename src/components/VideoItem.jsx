import React from "react";
import { Typography, Grid } from "@material-ui/core";
const VideoItem = ({ video, onSelect }) => {
  const {
    snippet: {
      title,
      thumbnails: {
        default: { url },
      },
    },
  } = video;
  return (
    <div
      className="side-container"
      style={{ cursor: "pointer" }}
      onClick={() => onSelect(video)}
    >
      <Grid container spacing={1}>
        <img src={url} alt={title} />
        <Typography variant="subtitle2">{title}</Typography>
      </Grid>
    </div>
  );
};

export default VideoItem;
