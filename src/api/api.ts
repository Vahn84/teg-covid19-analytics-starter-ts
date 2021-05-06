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
