
const resultsContainer = document.querySelector(".results");
const list = document.querySelector(".list");
resultsContainer.addEventListener("change", buildList);

function buildList(event) {
    console.log(event.target.value);
    const amount = event.target.value;
    list.innerHTML = " ";
    for (let i = 0; i <= amount; i++) {
        list.innerHTML += `<a href = "details.html?covid19Stats=${i}">${i}</a>`;
    }
}




/*async function canadaCorona() {
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
        console.log(covid19Stats);
        resultsContainer.innerHTML = "";
        for (let i = 0; i < covid19Stats.length; i++) {
            resultsContainer.innerHTML += `<div>Province:${covid19Stats[i].province}</div>
                                            <div>${covid19Stats[i].deaths}</div>
                                            <div>${covid19Stats[i].lastUpdate}</div>`;
        }
    } catch (error) {
        console.log("An error occurred", error);
        resultsContainer.innerHTML = "Something is wrong... Try again!";
    }
}
canadaCorona();*/