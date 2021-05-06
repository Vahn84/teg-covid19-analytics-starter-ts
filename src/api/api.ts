/* 

ENDPOINTS 

[GET] /case?country=SGP
[GET] /case?country=SGP&from=08/01/2020
[GET] /case?country=SGP&from=08/01/2020&to=21/01/2021

[GET] /case-summary
[GET] /case-summary?country=SGP
[GET] /case-summary?country=SGP&from=08/01/2020
[GET] /case-summary?country=SGP&from=08/01/2020&to=21/01/2021

[POST] /case
{
         "yearWeek" : "2021/08/01",
         "casesWeekly" : 8,
         "deathsWeekly" : 8,
         "countriesAndTerritories" : "Afghanistan",
         "geoId" : "AF",
         "countryTerritoryCode" : "AFG",
         "popData2019" : 38041757,
         "continentExp" : "Asia",
         "notificationRate" : "1.33"
}

[PUT] /case
{
    "id": XXXXXXX,
         "yearWeek" : "2021/08/01",
         "casesWeekly" : 8,
         "deathsWeekly" : 8,
         "countriesAndTerritories" : "Afghanistan",
         "geoId" : "AF",
         "countryTerritoryCode" : "AFG",
         "popData2019" : 38041757,
         "continentExp" : "Asia",
         "notificationRate" : "1.33"
}

[DELETE] /case/13

*/

import axios from "axios";

export default class Api {
  static BASE_URL: string =
    "https://academy-may-2021-webapi.azurewebsites.net/web-api/";

  static CASE_ENDP: string = `${Api.BASE_URL}case`;
  static CASE_SUM_ENDP: string = `${Api.BASE_URL}case-summary`;
  static COUNTRIES_ENDP: string = `${Api.BASE_URL}countries`;

  static GetCases = (params?: any) => {
    let queryString: string = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";
    return axios.get(`${Api.CASE_ENDP}${queryString.toString()}`);
  };

  static GetCasesSummary = (params?: any) => {
    let queryString: string = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";
    return axios.get(`${Api.CASE_SUM_ENDP}${queryString}`);
  };

  static GetCountries = () => {
    return axios.get(Api.COUNTRIES_ENDP);
  };
}
