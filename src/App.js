import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Feed from "./Components/Feed";
import VideoDetails from "./Components/VideoDetails";
import Navbar from "./Components/Navbar";
import ChannelDetails from "./Components/ChannelDetails";
import SearchFeed from "./Components/SearchFeed";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "black" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route path="/search/:searchedValue" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
