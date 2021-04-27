const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<div class="loader"></div>`;

async function canadaCorona() {
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
        for (let i = 0; i < covid19Stats.length; i++) {
            const province = covid19Stats[i].province;
            resultsContainer.innerHTML += `<div class= "card"><a href="details.html?provinceIndex=${i}" class= "link">${province}</a></div>`;
        }
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = createMessage(error, "An error occurred");
    }
}
canadaCorona();