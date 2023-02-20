import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";

const MainPageLayout = ({ childern }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navbar />
      {childern}
    </div>
  );
};

export default MainPageLayout;
