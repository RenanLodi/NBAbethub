
// function getApi(){
//     fetch ("https://v1.basketball.api-sports.io/games?league=12&season=2023&date=2023-01-31", {
// 	    "method": "GET",
// 	    "headers": {
// 		    "x-rapidapi-host": "v1.basketball.api-sports.io",
// 		    "x-rapidapi-key": "899ae7af4ff633f8e77f19cb19037169"
// 	    }
//     })
//     .then(response => {
//         console.log(response.json());
//     return response.json();
    
//     })
//     .catch(err => {
// 	console.log(err);
//     });
// }

// getApi();


function getApi(){
    fetch ("https://v1.basketball.api-sports.io/status", {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "v1.basketball.api-sports.io",
		    "x-rapidapi-key": "899ae7af4ff633f8e77f19cb19037169"
	    }
    })
    .then(response => {
        console.log(response.json());
    return response.json();
    
    })
    .catch(err => {
	console.log(err);
    });
}

getApi();
















var teamName;

function getGifApi(){
    fetch ("https://api.giphy.com/v1/gifs/search?api_key=F6a8XYTRkUMdxsTcwsoz13tuoKcObSik&q="+ teamName +"&limit=25&offset=0&rating=pg-13&lang=en")
    
        .then(response => {
            console.log(response.json());
            return response.json();
        	
            })
        .catch(err => {
        	console.log(err);
            });
    }


getGifApi();