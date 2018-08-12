import { EndPoint } from "../constants/endpoints";
import { ILarObject } from "../models/lar";
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

export  async function fetchLarDataSet(endpoint:string): Promise<ILarObject> {
    const requestUrl = EndPoint.BaseUrl + endpoint;
    const response =await fetch(requestUrl);

    if(response.ok) {
        return await response.json();
    } else {
        throw new FetchError(response.status, response.statusText);
    } 
}