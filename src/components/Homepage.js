import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PullRequestTable from "./PullRequestTable";

function Homepage() {
  return (
    <>
      <Header />
      <PullRequestTable />
      <Footer />
    </>
  );
}

export default Homepage;
