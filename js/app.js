class Card {

	constructor(text) {
		this.text = text;
		this.showText = false;
		this.matched = false
	}

	


}

const game = {
	// timer
	// points
	// 

	display() {
		// jquery: 
			// create cards in a loop
			// append to div with id of 'card-area'
			// give each card a class -- use this class to create styling in the css
		// 2. show card (back) to the user using jquery
	   	// create element with jquery 
	   	// append to DOM

	},

	turn() {
		// 3. visual -- see card face instead card back

		// 4. make it flip back either after some time or after they click again
	},
	
	compare(card1, card2) {
		// 1. compare the two cards

		// boolean -- true or false
		// print true or false
		if(card1.text === card2.text){
	   		console.log(true); 
		}
		
		

	}

}




const emoji = ['🥞', '🥞', '🍰', '🍰', '🍪', '🍪', '🍡', '🍡', '🍮', '🍮', '🍦', '🍦'];



const card1 = new Card(emoji[0])
console.log(card1);
const card2 = new Card(emoji[1])
console.log(card2);

game.compare(card1, card2);
game.display()


// const card3 = new Card(emoji[2])
// const card4 = new Card(emoji[3])
// const card5 = new Card(emoji[4])
// const card6 = new Card(emoji[5])
// const card7 = new Card(emoji[6])
// const card8 = new Card(emoji[7])
// const card9 = new Card(emoji[8])
// const card10 = new Card(emoji[9])
// const card11 = new Card(emoji[10])
// const card12 = new Card(emoji[11])


// event listeners -- part of step 3






