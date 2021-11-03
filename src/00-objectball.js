function gameObject() {
    return {
        "home": {
            "teamName": "Brooklyn Nets", 
            "colors": ["Black", "White"], 
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 19,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunk": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "block": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "block": 11,
                    "slamDunks": 1
                }
            }
        },
        "away": {
            "teamName": "Charlotte Hornets", 
            "colors": ["Turquoise", "Purple"], 
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
}// --- returning this whole object as a function stores the info only when the function is called, whereas if the object were a variable the info would be stored directly and take up space ---

function homeTeamName() {
    const object = gameObject()
    return object["home"]["teamName"]
}

function awayTeamName() {
    return gameObject().away.teamName
}

function allPlayers() {
    const game = gameObject()
    const homePlayers = game.home.players
    const awayPlayers = game.away.players
    return Object.assign({}, homePlayers, awayPlayers)
}

function numPointsScored(player) {
    /*if (allPlayers()[player])
        return allPlayers()[player].points //dont even really need if statement, can just return info with player input value*/
    return allPlayers()[player].points
}

function shoeSize(player) {
    return allPlayers()[player].shoe
}

function teamColors(teamNameInput) {
    if (homeTeamName() === teamNameInput)
        return gameObject()["home"]["colors"]
    else if (awayTeamName() === teamNameInput)
        return gameObject()["away"]["colors"]
}

function playerNumbers(teamNameInput) {
    const homePlayerArray = Object.values(gameObject().home.players)
    const awayPlayerArray = Object.values(gameObject().away.players)
    const homeJerseyNumbers = []
    const awayJerseyNumbers = []
    function compileHomeArray() {
        homePlayerArray.forEach(players => {
            playerPoints = players.points
            homeJerseyNumbers.push(playerPoints)
        })
    }
    function compileAwayArray() {
        awayPlayerArray.forEach(players => {
            playerPoints = players.points
            awayJerseyNumbers.push(playerPoints)
        })
    }
    compileHomeArray()
    compileAwayArray()
    return homeTeamName() === teamNameInput ? homeJerseyNumbers : awayJerseyNumbers
}

function playerStats(player) {
    return allPlayers()[player]
}

function bigShoeRebounds() {
    const playerArray = Object.entries(allPlayers())
    const largestShoeSize = playerArray.find(player => player[1].shoe > 18)
    return largestShoeSize[1].rebounds
}

function mostPointsScored() {
    const playerArray = Object.entries(allPlayers())
    const mostPoints = playerArray.find(player => player[1].points > 28)
    return mostPoints[0]
}

function winningTeam() {
    const homePlayerArray = Object.values(gameObject().home.players)
    const awayPlayerArray = Object.values(gameObject().away.players)
    const homeTeamPoints = homePlayerArray.reduce((total, player) => player.points + total, 0)
    const awayTeamPoints = awayPlayerArray.reduce((total, player) => player.points + total, 0)
    return homeTeamPoints > awayTeamPoints ? homeTeamName() : awayTeamName()
}

function playerWithLongestName() {
    const playerArray = Object.keys(allPlayers())
    const reducer = playerArray.reduce((element, player) => element.length > player.length ? element : player, 0) //works only when false
    const longestPlayerName = playerArray.filter(player => player.length === reducer.length)
    return longestPlayerName[0]
}

function doesLongNameStealATon() {
    const playerArray = Object.entries(allPlayers())
    const mostSteals = playerArray.filter(player => player[1].steals > 20)
    const playerWithMostSteals = mostSteals[0]
    if (playerWithLongestName() === playerWithMostSteals[0])
        return true
}
