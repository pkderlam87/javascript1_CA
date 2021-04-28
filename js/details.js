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
        const covid19Stats = details.data.covid19Stats[id];
        createHtml(covid19Stats);
    } catch (error) {
        console.log(error);
        detailsContainer.innerHTML = createMessage("error", "An error occurred!");
    }
}
fetchProvince();
function createHtml(covid19Stats) {
    document.title = `Data about Covid19 in Canada|${covid19Stats.province}`;
    detailsContainer.innerHTML = `<h1> ${covid19Stats.country}</h1>
                                    <div class = "datas"><h4>Province: ${covid19Stats.province}</h4>
                                    <h4>Number of Deaths: ${covid19Stats.deaths}</h4>
                                    <h4>Confirmed cases: ${covid19Stats.confirmed}</h4>
                                    <h4>Recovered: ${covid19Stats.recovered}</h4></div>`;
};