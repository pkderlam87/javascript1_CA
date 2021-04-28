const resultsContainer = document.querySelector(".results");
const welcome = document.querySelector(".welcome");

resultsContainer.innerHTML = `<div class="loader"></div>`;

async function corona() {
    try {
        const response = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Canada", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "17f5526fa0msh47d427d5c345fa2p1d470fjsn83cad74f92a1",
                "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
            }
        });
        const results = await response.json();
        const covid19Stats = results.data.covid19Stats;
        resultsContainer.innerHTML = " ";
        welcome.innerHTML = `<h1>${covid19Stats[0].country} Covid-19</h1>
            <h4>Here you will find some information about coronavirus in ${covid19Stats[0].country}</h4>
            <h5>The last update was: ${covid19Stats[0].lastUpdate}</h5>`;
        for (let i = 0; i < covid19Stats.length; i++) {
            const province = covid19Stats[i].province;
            if (province === "Diamond Princess" || province === "Grand Princess" || province === "Repatriated Travellers") {
                continue;
            } else {
                resultsContainer.innerHTML += `<div class= "card"><a href="details.html?provinceIndex=${i}" class= "link">${province}</a></div>`;
            }
        }
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = createMessage("error", "An error occurred");
    }
}
corona();


