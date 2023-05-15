export function getCardData(name) {
    let reqURL = `https://api.gatcg.com/cards/search?name=${name}`
    return fetch(reqURL).then(res => res.json());
}