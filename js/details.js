const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("provinceIndex");
if (id === null) {
    location.href = "/";
}
const url = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Canada";
const detailsContainer = document.querySelector(".detailsContainer");
detailsContainer.innerHTML = `<div class="loader"></div>`;
async function fetchProvince() {
    try {
        const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "17f5526fa0msh47d427d5c345fa2p1d470fjsn83cad74f92a1",
                "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
            }
        });
        const details = await response.json();
        console.log(details);
        const covid19Stats = details.data.covid19Stats[id];
        createHtml(covid19Stats);
    } catch (error) {
        console.log(error);
        detailsContainer.innerHTML = createMessage("error", "An error occurred!");
    }
}
fetchProvince();
function createHtml(covid19Stats) {
    detailsContainer.innerHTML = `<h1> ${covid19Stats.country}</h1>
                                    <p>Province: ${covid19Stats.province}</p>
                                    <p>Number of Deaths: ${covid19Stats.deaths}</p>
                                    <time>Last Update:${covid19Stats.lastUpdate}</time>`;
};