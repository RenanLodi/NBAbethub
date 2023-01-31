var currentDate = dayjs().format('YYYY-MM-DD');
var liveScores = document.querySelector(".card-content");
var odds = document.querySelector("#odds");

// GET ALL NBA GAMES
function getGames(){
    fetch ("https://v1.basketball.api-sports.io/games?league=12&season=2022-2023&timezone=America/New_York&date=" + currentDate, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "v1.basketball.api-sports.io",
		    "x-rapidapi-key": "899ae7af4ff633f8e77f19cb19037169"
	    }
    })
    .then(response => {

    return response.json();
    
    })
    .then (function(data) {
        console.log(data);

        for (i=0; i < data.response.length - 1; i++){
            var span = document.createElement("span");
            var line = document.createElement("li");

            span.setAttribute("id", "teamnames"+i);
            liveScores.appendChild(span);
            var teamNames = document.querySelector("#teamnames"+i)

            line.setAttribute("id", "game"+i);
            liveScores.appendChild(line);
            var gameScores = document.querySelector("#game"+i);

            // data.response[i].status.long -> What Quarter game is in

            teamNames.textContent = data.response[i].teams.home.name + "  VS.  " + data.response[i].teams.away.name;
            gameScores.textContent = data.response[i].scores.away.total + " - " + data.response[i].scores.home.total;
        }

    })
    .catch(err => {
	console.log(err);
    });

    
    
}

// getGames();

var teamName;

function getGifApi(){
    fetch ("https://api.giphy.com/v1/gifs/search?api_key=F6a8XYTRkUMdxsTcwsoz13tuoKcObSik&q="+ teamName +"&limit=25&offset=0&rating=pg-13&lang=en")
    
        .then(response => {
            
            return response.json();
        	
            })
        .then(data => {
            console.log(data);

        })
        .catch(err => {
        	console.log(err);
            });
    }


getGifApi();