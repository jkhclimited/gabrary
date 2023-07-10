import { Card } from "../models/card";

export async function getSetData(setName: string):Promise<Card[]> {
    let reqURL = encodeURI(`https://api.gatcg.com/cards/search?prefix=${setName}`)
    // return fetch(reqURL).then(async res => (await res.json())["data"]);
    return fetch(reqURL, {headers: {"Content-Type": "application/json; charset=utf-8"},}).then(res => (res.json()));
}