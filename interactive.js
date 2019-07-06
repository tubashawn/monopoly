let tokens = ["battleship", "boot", "cannon", "horse", "iron", "racecar", "dog", "thimble", "tophat", "wheelbarrow", "moneybag"];

let player = {
    name : "Player 1",
    token : "battleship",
    money: 1500,
    ownedProperties: [],
    justVisiting: true,
    getOutOfJail: false,  
    location: 0
    };

// initiate board spaces and names
let boardSpot = [{
  spaceName: "GO",
  description: "You have passed go. Collect $200",
  action: function() {
      player.money += 200;
      displayMoney();
      displayDescription(this);
  }
}, {
  spaceName: "Mediterranean Avenue",
  purchasePrice: 60,
  houseCost: 50,
  rent: {
    unimproved: 2,
    oneHouse: 10,
    twoHouses: 30,
    threeHouses: 90,
    fourHouses: 160,
    hotel: 250
  },
  colorGroup: "purple",
  mortgagePrice: 30
}, {
  spaceName: "Community Chest",
  description: "Draw a Community Chest card.",
  action: displayDescription(this)
    // draw(chestCards) // TODO: make sure draw function works
}, {
  spaceName: "Baltic Avenue",
  purchasePrice: 60,
  houseCost: 50,
  rent: {
    unimproved: 4,
    oneHouse: 20,
    twoHouses: 60,
    threeHouses: 180,
    fourHouses: 320,
    hotel: 450
  },
  colorGroup: "purple",
  mortgagePrice: 30
}, {
  spaceName: "Income Tax",
  description: "Pay $200 tax bill",
  action: displayDescription(this)
    // player.money -= 200 // TODO: Create a function to prompt a choice on how this works, but will be 200 for now
}, {
  spaceName: "Reading Railroad",
  purchasePrice: 200,
  rent: {
    oneRR: 25,
    twoRR: 50,
    threeRR: 100,
    fourRR: 200
  },
  colorGroup: "RR",
  mortgagePrice: 100
}, {
  spaceName: "Oriental Avenue",
  purchasePrice: 100,
  houseCost: 50,
  rent: {
    unimproved: 6,
    oneHouse: 30,
    twoHouses: 90,
    threeHouses: 270,
    fourHouses: 400,
    hotel: 550
  },
  colorGroup: "lightBlue",
  mortgagePrice: 50
}, {
  spaceName: "Chance",
  description: "Draw a Chance card.",
//   action: draw(chanceCards)
}, {
  spaceName: "Vermont Avenue",
  purchasePrice: 100,
  houseCost: 50,
  rent: {
    unimproved: 6,
    oneHouse: 30,
    twoHouses: 90,
    threeHouses: 270,
    fourHouses: 400,
    hotel: 550
  },
  colorGroup: "lightBlue",
  mortgagePrice: 50
}, {
  spaceName: "Connecticut Avenue",
  purchasePrice: 120,
  houseCost:50,
  rent: {
    unimproved: 8,
    oneHouse: 40,
    twoHouses: 100,
    threeHouses: 300,
    fourHouses: 450,
    hotel: 600
  },
  colorGroup: "lightBlue",
  mortgagePrice: 60 
}, {
  spaceName: "Jail",
  description: "Just visiting",
  // TODO: create an inJail function to countdown,
}, {
  spaceName: "St. Charles Place",
  purchasePrice:  140,
  houseCost: 100,
  rent: {
    unimproved: 10,
    oneHouse: 50,
    twoHouses: 150,
    threeHouses: 450,
    fourHouses: 625,
    hotel: 750
  },
  colorGroup: "magenta",
  mortgagePrice: 70
}, {
  spaceName: "Electric Company",
  purchasePrice: 150,
  rent: 20, // TODO: create function to process dice roll
  colorGroup: "utility",
  mortgagePrice: 75
}, {
  spaceName: "States Avenue",
  purchasePrice: 140,
  houseCost: 100,
  rent: {
    unimproved: 10,
    oneHouse: 50,
    twoHouses: 150,
    threeHouses: 450,
    fourHouses: 625,
    hotel: 750
  },
  colorGroup: "magenta",
  mortgagePrice: 70
},{
  spaceName: "Virgina Avenue",
  purchasePrice: 160,
  houseCost:100,
  rent: {
    unimproved: 12,
    oneHouse: 60,
    twoHouses: 180,
    threeHouses: 500,
    fourHouses: 700,
    hotel: 900
  },
  colorGroup: "magenta",
  mortgagePrice: 80
}, {
  spaceName: "Pennsylvania Railroad",
  purchasePrice: 200,
  rent: {
    oneRR: 25,
    twoRR: 50,
    threeRR: 100,
    fourRR: 200
  },
  colorGroup: "RR",
  mortgagePrice: 100
}, {
  spaceName: "St. James Place",
  purchasePrice: 180,
  houseCost:100,
  rent: {
    unimproved: 14,
    oneHouse: 70,
    twoHouses: 200,
    threeHouses: 550,
    fourHouses: 750,
    hotel: 950
  },
  colorGroup: "orange",
  mortgagePrice: 90
}, {
  spaceName: "Community Chest",
  description: "Draw a Community Chest card.",
  action: displayDescription(this)
    // draw(chestCards)
}, {
  spaceName: "Tennessee Avenue",
  purchasePrice: 180,
  houseCost:100,
  rent: {
    unimproved: 14,
    oneHouse: 70,
    twoHouses: 200,
    threeHouses: 550,
    fourHouses: 750,
    hotel: 950
  },
  colorGroup: "orange",
  mortgagePrice: 90
},{
  spaceName: "New York Avenue",
  purchasePrice: 200,
  houseCost:100,
  rent: {
    unimproved: 16,
    oneHouse: 80,
    twoHouses: 220,
    threeHouses: 600,
    fourHouses: 800,
    hotel: 1000
  },
  colorGroup: "orange",
  mortgagePrice: 100
},{
  spaceName: "Free Parking",
  description: "You get to stay for free!",
  action: displayDescription(this)
  //TODO: create a function to give all the money in the free parking pool
}, {
  spaceName: "Kentucky Avenue",
  purchasePrice: 220,
  houseCost:150, 
  rent: {
    unimproved: 18,
    oneHouse: 90,
    twoHouses: 250,
    threeHouses: 700,
    fourHouses: 875,
    hotel: 1050
  },
  colorGroup: "red",
  mortgagePrice: 110
}, {
  spaceName: "Chance",
  description: "Draw a Chance card.",
  action: displayDescription(this)
//   draw(chanceCards)
}, {
  spaceName: "Indiana Avenue",
  purchasePrice: 220,
  houseCost:150,
  rent: {
    unimproved: 18,
    oneHouse: 90,
    twoHouses: 250,
    threeHouses: 700,
    fourHouses: 875,
    hotel: 1050
  },
  colorGroup: "red",
  mortgagePrice: 110
},{
  spaceName: "Illinois Avenue",
  purchasePrice: 240,
  houseCost:150,
  rent: {
    unimproved: 20,
    oneHouse: 100,
    twoHouses: 300,
    threeHouses: 750,
    fourHouses: 925,
    hotel: 1100
  },
  colorGroup: "red",
  mortgagePrice: 120
}, {
  spaceName: "B & O Railroad",
  purchasePrice: 200,
  rent: {
    oneRR: 25,
    twoRR: 50,
    threeRR: 100,
    fourRR: 200
  },
  colorGroup: "RR",
  mortgagePrice: 100
}, {
  spaceName: "Atlantic Avenue",
  purchasePrice: 260,
  houseCost:150,
  rent: {
    unimproved: 22,
    oneHouse: 110,
    twoHouses: 330,
    threeHouses: 800,
    fourHouses: 975,
    hotel: 1150
  },
  colorGroup: "yellow",
  mortgagePrice: 130
}, {
  spaceName: "Ventnor Avenue",
  purchasePrice: 260,
  houseCost:150,
  rent: {
    unimproved: 22,
    oneHouse: 110,
    twoHouses: 330,
    threeHouses: 800,
    fourHouses: 975,
    hotel: 1150
  },
  colorGroup: "yellow",
  mortgagePrice: 130
}, {
  spaceName: "Water Works",
  purchasePrice: 150,
  rent: 20, // TODO: create function to process dice roll
  colorGroup: "utility",
  mortgagePrice: 75
}, {
  spaceName: "Marvin Gardens",
  purchasePrice: 280,
  houseCost:150,
  rent: {
    unimproved: 24,
    oneHouse: 120,
    twoHouses: 360,
    threeHouses: 850,
    fourHouses: 1025,
    hotel: 1200
  },
  colorGroup: "yellow",
  mortgagePrice: 140
}, {
  spaceName: "Go to Jail",
  description: "Go directly to jail",
  //TODO: create a goToJail function to handle this space and other jail possibilities
}, {
  spaceName: "Pacific Avenue",
  purchasePrice: 300,
  houseCost:200,
  rent: {
    unimproved: 26,
    oneHouse: 130,
    twoHouses: 390,
    threeHouses: 900,
    fourHouses: 1100,
    hotel: 1275
  },
  colorGroup: "green",
  mortgagePrice: 150
}, {
  spaceName: "North Carolina Avenue",
  purchasePrice: 300,
  houseCost:200,
  rent: {
    unimproved: 26,
    oneHouse: 130,
    twoHouses: 390,
    threeHouses: 900,
    fourHouses: 1100,
    hotel: 1275
  },
  colorGroup: "green",
  mortgagePrice: 150
}, {
  spaceName: "Community Chest",
  description: "Draw a Community Chest card.",
  action: displayDescription(this)
//   draw(chestCards)
}, {
  spaceName: "Pennsylvania Avenue",
  purchasePrice: 320,
  houseCost:200,
  rent: {
    unimproved: 28,
    oneHouse: 150,
    twoHouses: 450,
    threeHouses: 1000,
    fourHouses: 1200,
    hotel: 1400
  },
  colorGroup: "green",
  mortgagePrice: 160
}, {
  spaceName: "Short Line Railroad",
  purchasePrice: 200,
  rent: {
    oneRR: 25,
    twoRR: 50,
    threeRR: 100,
    fourRR: 200
  },
  colorGroup: "RR",
  mortgagePrice: 100
}, {
  spaceName: "Chance",
  description: "Draw a Chance card.",
//   action: draw(chanceCards)
}, {
  spaceName: "Park Place",
  purchasePrice: 350,
  houseCost:200,
  rent: {
    unimproved: 35,
    oneHouse: 175,
    twoHouses: 500,
    threeHouses: 1100,
    fourHouses: 1300,
    hotel: 1500
  },
  colorGroup: "blue",
  mortgagePrice: 175
}, {
  spaceName: "Luxury Tax",
  description: "Pay luxury tax",
  //action: player.money = player.money - 75
}, {
  spaceName: "Boardwalk",
  purchasePrice: 400,
  houseCost:200,
  rent: {
    unimproved: 50,
    oneHouse: 200,
    twoHouses: 600,
    threeHouses: 1400,
    fourHouses: 1700,
    hotel: 2000
  },
  colorGroup: "blue",
  mortgagePrice: 200
}]; 

let chanceCards = [{
  cardName: "Advance to GO",
//   action: player.location = 0
}, {
  cardName: "Advance to Illinois Ave",
//   action: player.location = 24
}, {
  cardName: "Advance to St. Charles Place",
//   action: player.location = 11
}, {
  cardName: "Advance to nearest utility",
//   action: player.location = 28//TODO: create a function to determine which utility to advance to
}, {
  cardName: "Advance to the nearest railroad",
//   action: player.location = 5 //TODO: create a function to determine which RR to advance to
}, {
  cardName: "Bank pays dividend of $50",
//   action: player.money = player.money + 50
}, {
  cardName: "Get out of jail free",
//   action: player.getOutOfJail = true
}, {
  cardName: "Go back three spaces",
//   action: player.location -= 3
}, {
  cardName: "Go to jail",
//   action: player.location = 10
}, {
  cardName: "Make general repairs",
  //TODO: create a function to handle repairs card
}, {
  cardName: "Pay poor tax of $15",
//   action: player.money -= 15
}, {
  cardName: "Take a trip on Reading Railroad",
//   action: player.location = 5
}, {
  cardName: "Take a walk on Boardwalk",
//   action: player.location = 39
}, {
  cardName: "You have been elected chairman of the board. Pay each player $50",
  //TODO: create a function to handle this card
}, {
  cardName: "Your building and loan matures, collect $150",
//   action: player.money += 150
}];

let chestCards = [{
  cardName: "Advance to GO",
//   action: player.location = 0
}, {
  cardName: "Bank error in your favor, collect $200",
//   action: player.money += 200
}, {
  cardName: "Doctor's fee, pay $50",
//   action: player.money -= 50
}, {
  cardName: "From sale of stock you get $45",
//   action: player.money += 45
}, {
  cardName: "Get out of jail free",
//   action: player.getOutOfJail = true
}, {
  cardName: "Go to jail",
//   action: player.location = 10 //TODO: create function that sets inJail to true
}, {
  cardName: "Opening night at the opera, collect $50 from every player",
//   action: player.money += 50 //TODO: create function to handle this card
}, {
  cardName: "Christmas fund matures, collect $100",
//   action: player.money += 100
}, {
  cardName: "Tax refund, collect $20",
//   action: player.money += 20
}, {
  cardName: "It's your birthday, collect $10 from each player",
//   action: player.money =+ 10 //TODO: create function to handle this card, maybe use the same as opera
}, {
  cardName:  "Life insurance matures, collect $100",
//   action: player.money += 100
}, {
  cardName: "Hospital fees, pay $50",
//   action: player.money -= 50
}, {
  cardName: "School fees, pay $50",
//   action: player.money -= 50
}, {
  cardName:  "Receive for services $25",
//   action: player.money += 25
}, {
  cardName: "Street repairs",
  //TODO: create a function to handle this card
}, {
  cardName: "You have won second prize in a beauty contest, collect $10",
//   action: player.money += 10
}, {
  cardName: "You inherit $100",
//   action: player.money += 100
}];
//create a draw function to process chest/chance card drawing

//create an income tax function to determine tax amount and choice between flat vs. %

//Fisher-Yates algorithm for shuffling
let shuffle = (array) => {
    array = array.slice();
	let currentIndex = array.length;
	let temporaryValue, randomIndex;
	// While there remain elements to shuffle.
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
	}
	return array;
};

let drawCard = (deck) => {
    if (deck.length < 1) {
        shuffle(deck);
        return deck.pop();
    } else {
        return deck.pop();
    }
};


// let displayCard = () => {
//     document.getElementById("cardDraw").addEventListener("click", function() {
//         document.getElementById("card").innerHTML = "You drew " + drawCard(chanceCards).cardName;
//     });
// };

function diceRoll() {
    return Math.floor(Math.random() * 6 + 1);
}

let rollTheDice = () => document.getElementById("diceRoll").addEventListener("click", function() {
    document.getElementById("message").innerHTML = "";
    let firstRoll = diceRoll();
    let secondRoll = diceRoll();
    let total = firstRoll + secondRoll;
    document.getElementById("firstDie").innerHTML = "Your first die is " + firstRoll;
    document.getElementById("secondDie").innerHTML = "Your second die is " + secondRoll;
    document.getElementById("total").innerHTML = "Your total is " + total;
    player.location += total; // player.location = player.location + total
    displayLocation();
});



function displayLocation() { 
    if (player.location <= 39) {
        document.getElementById("location").innerHTML = "You are at " + locationFinder(player.location);
    } else {
        player.location -= 40;
        boardSpot[0].action();
        document.getElementById("location").innerHTML = "You are at " + locationFinder(player.location);
    }
}

function displayMoney() {
    document.getElementById("money").innerHTML = "You have " + player.money + " dollars.";
}

function displayDescription(spot) {  
    document.getElementById("message").innerHTML = spot.description;
}



function locationFinder(address) {
    return boardSpot[address].spaceName;
} 


function playerTurn() {
    if(player.ownedProperties === null) {
        if (improveQuestion != true) {
            displayLocation();
        }
    } else {
        rollTheDice(); 
    }
}

let gameSetup = () => {
    shuffle(chanceCards);
    shuffle(chestCards);
}


gameSetup();
playerTurn();
displayMoney();
// displayLocation();
// displayCard();
