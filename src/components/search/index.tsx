import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { cityModel } from "../../models/city";
import SearchResult from "./SearchResult";
import { MaterialUISwitch, useStyles } from "./style";


interface Iprops {
  cityName: (value: cityModel) => void;
  setTemp: (value: string) => void;
}

const SearchFilter = ({ cityName, setTemp }: Iprops) => {
  const classes = useStyles;
  const [searchVal, setSearchVal] = useState("");
  const [finalVal, setFinalVal] = useState("");
  const [switchVal, setSwitchVal] = useState(
    localStorage.getItem("temp") === "true"
  );
  const handleChange = (inputVal: string) => {
    setSearchVal(inputVal);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFinalVal(searchVal);
  };

  const getCityName = (item: cityModel) => {
    cityName(item);
    setSearchVal("");
    setFinalVal("");
  };
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("temp", String(event.target.checked));
    setSwitchVal(event.target.checked);
    setTemp(String(event.target.checked));
  };

  return (
    <Box sx={classes.box}>
      <Box
        sx={classes.innerBox}
      >
        <Paper
          component="form"
          sx={classes.paperForm}
          onSubmit={handleSubmit}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={(e) => handleChange(e.target.value)}
            value={searchVal}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        {finalVal ? (
          <SearchResult
            value={finalVal}
            selectedItem={(item: cityModel) => getCityName(item)}
          />
        ) : (
          ""
        )}
      </Box>
      <FormGroup>
        <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              checked={switchVal}
              onChange={(e) => handleSwitchChange(e)}
            />
          }
          label=""
        />
      </FormGroup>
    </Box>
  );
};

export default SearchFilter;
