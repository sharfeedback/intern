import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { marked } from "marked";
import data from "../data/data.json";
import Button from "@mui/material/Button";
// import Alert from '@mui/material/Alert';
// import Box from "@mui/material/Box";
import CardWrap from "./Card";
// import { useData } from "./DataContent";
// import SearchBar from "./SearchBar";

// import { useAppBarTitle } from "./ButtonAppBar";
// import { Typography } from "@mui/material";

const Home = () => {
  const { id } = useParams();
  // const { setTitle } = useAppBarTitle();
  const [search, setSearch] = useState("");
  // setTitle("Intern");
  // const { data, loading, error } = useData();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const openGemini = () =>  navigate("/gemini");
  const filteredData = data.filter(
    (item) =>
      !item.hide &&
      item.title.toLowerCase().includes(search.toLowerCase()) |
        item.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        width: "100%",
        maxWidth: "700px",
        display: "unset",
      }}
    >
       <Button style= {{ margin:"5px" }} onClick={openGemini}>Ask AI</Button>
      {/* <Box> */}
      {/* <Typography variant="h4" component="h1">
       Intern App
      </Typography>
        <Typography>Below are different medicines/cures for different medical issues. Click on each to get an overview. Use the search box to search from the below list. Use the "Ask AI" button to ask Gemini about the data here. </Typography>
        <Alert severity="info">This information is for educational purposes.</Alert>
      <SearchBar value={search} onChange={setSearch} />
     
      </Box>
      <Box> */}
      
        {data.map((item, index) => {
          if (
            !item.hide &
            (item.title.toLowerCase().includes(search.toLowerCase()) ||
              item.content.toLowerCase().includes(search.toLowerCase()))
          ) {
        //  return item.title
            return <CardWrap key={index} id={index} title={item.title} />;
            // return null;
          }
          return null; // Ensures no rendering for non-matching items.
        })}
      {/* </Box> */}
    </div>
  );
};

export default Home;
