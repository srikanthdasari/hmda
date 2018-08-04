import { EndPoint } from "../constants/endpoints";
import { IRootObject } from "../models/schema";
import FetchError from "./fetch-error";

export  async function fetchDataSet(): Promise<IRootObject> {
    const requestUrl = EndPoint.DateSetUrl
    const response =await fetch(requestUrl);

    if(response.ok) {
        return await response.json();
    } else {
        throw new FetchError(response.status, response.statusText);
    } 
}