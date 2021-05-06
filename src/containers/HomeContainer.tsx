import React, { useEffect } from "react";
import Api from "../api/api";

const HomeContainer = () => {
  useEffect(() => {
    Api.GetCases()
      .then((response: any) => {
        console.log("GET CASES", response);
      })
      .catch((error: Error) => {
        console.log("GET CASES ERROR", error);
      });
    Api.GetCountries()
      .then((response: any) => {
        console.log("GET COUNTRIES", response);
      })
      .catch((error: Error) => {
        console.log("GET COUNTRIES ERROR", error);
      });
  }, []);

  return <div>Hi</div>;
};

export default HomeContainer;
