import { EndPoint } from "../constants/endpoints";
import { QueryParser } from '../core-lib/QueryParser';
import { IGeoObject } from "../models/geo";
import { ILarObject } from "../models/lar";
import { IQuery } from "../models/query";
import { IRootObject } from "../models/schema";
import FetchError from "./fetch-error";

export async function fetchDataSet(): Promise<IRootObject> {
    const requestUrl = EndPoint.DateSetUrl
    const response = await fetch(requestUrl);

    if (response.ok) {
        return await response.json();
    } else {
        throw new FetchError(response.status, response.statusText);
    }
}

export async function fetchLarDataSet(endpoint: string, query: IQuery): Promise<ILarObject> {
    const requestUrl = EndPoint.BaseUrl + endpoint + ".json";
    const queryString = QueryParser.Parse(query);
    const response = await fetch(requestUrl + queryString);

    if (response.ok) {
        return await response.json();
    } else {
        throw new FetchError(response.status, response.statusText);
    }
}

export async function fetchGeoData(): Promise<IGeoObject> {
    const requestUrl = EndPoint.GeoLocationApiUrl;
    const response = await fetch(requestUrl);

    if (response.ok) {
        return await response.json();
    } else {
        throw new FetchError(response.status, response.statusText);
    }
}