import React, { useState } from "react";
import { TextField, Paper } from "@material-ui/core";

const SearchBar = ({ keyword, onSubmit }) => {
  const [localkey, setLocalKey] = useState(() => keyword || "");

  const handleChange = ({ target: { value } }) => {
    setLocalKey(value);
  };

  const handleSubmit = ({ key }) => {
    if (key === "Enter") {
      onSubmit(localkey);
    }
  };
  return (
    <Paper elevation={1} style={{ padding: ".7em" }}>
      <TextField
        fullWidth
        value={localkey}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </Paper>
  );
};

export default SearchBar;
