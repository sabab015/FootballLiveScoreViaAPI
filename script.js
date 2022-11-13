fetch("https://api.football-data.org/v4/matches")
    .then((data) => {
        return data.json();
    })
    .then((objectData) => {
        //console.log(objectData.data[0].name);
        let scoreData1 = "";
        let scoreData2 = "";
        let scoreData3 = "";
        objectData.map((values) => {
            scoreData1 = `
            
            <p>${values.event_home_team}</p>
            
            `;
            console.log(scoreData1);

            scoreData2 = `
            
            <p>${values.event_away_team}</p>
            
            `;
            console.log(scoreData2);

            scoreData3 = `
            
            <p>${values.event_final_result}</p>
            
            `;
            console.log(scoreData2);
        });
        document.getElementById("F_Team").innerHTML = scoreData1;
        document.getElementById("L_Team").innerHTML = scoreData2;
        document.getElementById("F_Score").innerHTML = scoreData3;
    })