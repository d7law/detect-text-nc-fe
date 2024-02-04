import LoadingPage from "../components/loading-page";
import useRedirect from "../hooks/use-redirect";
import React from "react";

const RootPage = () => {
  useRedirect("detect");
  return <LoadingPage loading={true} />;
};

export default RootPage;
