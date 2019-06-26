let tokens = ["battleship", "boot", "cannon", "horse", "iron", "racecar", "dog", "thimble", "tophat", "wheelbarrow", "moneybag"];

let player = {
    name : "",
    token : "",
    money: 1500,
    ownedProperties: [],
    justVisiting: true,
    getOutOfJail: false,  
    location: 0
    };

// initiate board spaces and names
let boardSpot = [{
  spaceName: "GO",
  description: "Collect $200",
  action: player.money += 200
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
//   action: draw(chestCards) // TODO: make sure draw function works
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
  //action: player.money -= 200 // TODO: Create a function to prompt a choice on how this works, but will be 200 for now
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
  mortgagePrice: 1
}, {
  spaceName: "Jail",
  description: "Just visiting",
  // TODO: create an inJail function to countdown,
}, {
  spaceName: "St. Charles Place",
  purchasePrice:  140,
  rent: {
    unimproved: 10,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "magenta",
  mortgagePrice: 1
}, {
  spaceName: "Electric Company",
  purchasePrice: 150,
  rent: 20, // TODO: create function to process dice roll
  colorGroup: "utility",
  mortgagePrice: 1
}, {
  spaceName: "States Avenue",
  purchasePrice: 140,
  rent: {
    unimproved: 10,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "magenta",
  mortgagePrice: 1
},{
  spaceName: "Virgina Avenue",
  purchasePrice: 160,
  rent: {
    unimproved: 12,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "magenta",
  mortgagePrice: 1
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
  mortgagePrice: 1
}, {
  spaceName: "St. James Place",
  purchasePrice: 180,
  rent: {
    unimproved: 14,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "orange",
  mortgagePrice: 1
}, {
  spaceName: "Community Chest",
  description: "Draw a Community Chest card.",
//   action: draw(chestCards)
}, {
  spaceName: "Tennessee Avenue",
  purchasePrice: 180,
  rent: {
    unimproved: 14,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "orange",
  mortgagePrice: 1
},{
  spaceName: "New York Avenue",
  purchasePrice: 200,
  rent: {
    unimproved: 16,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "orange",
  mortgagePrice: 1
},{
  spaceName: "Free Parking",
  description: "You get to stay for free!",
  //TODO: create a function to give all the money in the free parking pool
}, {
  spaceName: "Kentucky Avenue",
  purchasePrice: 220,
  rent: {
    unimproved: 18,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "red",
  mortgagePrice: 1
}, {
  spaceName: "Chance",
  description: "Draw a Chance card.",
//   action: draw(chanceCards)
}, {
  spaceName: "Indiana Avenue",
  purchasePrice: 220,
  rent: {
    unimproved: 18,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "red",
  mortgagePrice: 1
},{
  spaceName: "Illinois Avenue",
  purchasePrice: 240,
  rent: {
    unimproved: 20,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "red",
  mortgagePrice: 1
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
  mortgagePrice: 1
}, {
  spaceName: "Atlantic Avenue",
  purchasePrice: 260,
  rent: {
    unimproved: 22,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "yellow",
  mortgagePrice: 1
}, {
  spaceName: "Ventnor Avenue",
  purchasePrice: 260,
  rent: {
    unimproved: 22,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "yellow",
  mortgagePrice: 1
}, {
  spaceName: "Water Works",
  purchasePrice: 150,
  rent: 20, // TODO: create function to process dice roll
  colorGroup: "utility",
  mortgagePrice: 1
}, {
  spaceName: "Marvin Gardens",
  purchasePrice: 280,
  rent: {
    unimproved: 24,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "yellow",
  mortgagePrice: 1
}, {
  spaceName: "Go to Jail",
  description: "Go directly to jail",
  //TODO: create a goToJail function to handle this space and other jail possibilities
}, {
  spaceName: "Pacific Avenue",
  purchasePrice: 300,
  rent: {
    unimproved: 26,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "green",
  mortgagePrice: 1
}, {
  spaceName: "North Carolina Avenue",
  purchasePrice: 300,
  rent: {
    unimproved: 26,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "green",
  mortgagePrice: 1
}, {
  spaceName: "Community Chest",
  description: "Draw a Community Chest card.",
//   action: draw(chestCards)
}, {
  spaceName: "Pennsylvania Avenue",
  purchasePrice: 320,
  rent: {
    unimproved: 28,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "green",
  mortgagePrice: 1
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
  mortgagePrice: 1
}, {
  spaceName: "Chance",
  description: "Draw a Chance card.",
//   action: draw(chanceCards)
}, {
  spaceName: "Park Place",
  purchasePrice: 350,
  rent: {
    unimproved: 35,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "blue",
  mortgagePrice: 1
}, {
  spaceName: "Luxury Tax",
  description: "Pay luxury tax",
  //action: player.money = player.money - 75
}, {
  spaceName: "Boardwalk",
  purchasePrice: 400,
  rent: {
    unimproved: 50,
    oneHouse: 2,
    twoHouses: 2,
    threeHouses: 2,
    fourHouses: 2,
    hotel: 2
  },
  colorGroup: "green",
  mortgagePrice: 1
}]; 

console.log("Is this working?" + " WHy, yes it is!!!");
console.log(boardSpot);
console.log(boardSpot[1]);
console.log(boardSpot[1].rent);
console.log("The cost for rent with two houses is " + boardSpot[1].rent.twoHouses);

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

 

function shuffle(arr) {

    for (let i = arr.length - 1; i > 0; i--) {

        let rnd = Math.floor(Math.random() * i);

        let temp = arr[i];

        arr[i] = arr[rnd];

        arr[rnd] = temp;

    }

    return arr;

}

 



 

function diceRoll() {

    return Math.floor(Math.random() * 6 + 1);

}

 

function displayRoll() {

    document.getElementById("diceRoll").addEventListener("click", function() {

      console.log("buttonclicked");

        let firstRoll = diceRoll();

        let secondRoll = diceRoll();

        let total = firstRoll + secondRoll;

        document.getElementById("firstDie").innerHTML = "Your first die is " + firstRoll;

        document.getElementById("secondDie").innerHTML = "Your second die is " + secondRoll;

        document.getElementById("total").innerHTML = "Your total is " + total;

       

    });

 

}

 

function displayLocation() {

  return boardSpot[player.location];

}

 

// function playerLocation(displayRoll()) {

 

// }

 

function initialSetup() {

  alert("test");

  document.getElementById("location").innerHTML = "I exist!"

 

}

document.getElementById("location").innerHTML = "I exist!"

 

 

displayRoll();

initialSetup();

function diceRoll() {
    return Math.floor(Math.random() * 6 + 1);
}

function displayRoll() {
    document.getElementById("diceRoll").addEventListener("click", function() {
        let firstRoll = diceRoll();
        let secondRoll = diceRoll();
        let total = firstRoll + secondRoll;
        console.log("You clicked the button");
        document.getElementById("firstDie").innerHTML = "Your first die is " + firstRoll;
        document.getElementById("secondDie").innerHTML = "Your second die is " + secondRoll;
        document.getElementById("total").innerHTML = "Your total is " + total;
        
    });
}

displayRoll();
