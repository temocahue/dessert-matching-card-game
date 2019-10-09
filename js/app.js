// class Card {

// 	constructor(text) {
// 		this.text = text;
// 		this.showText = false;
// 		this.matched = false
// 	}


// }


const emoji = ['🥞', '🥞', '🍰', '🍰', '🍪', '🍪', '🍡', '🍡', '🍮', '🍮', '🍦', '🍦'];

const game = {
	timePassed:100, 
    points:0,

    //store element
    cardClicked: null,

	display() {
		
		while(emoji.length > 0) {
			
			// get a rand index number so we can get one emoji
			const randIndex = Math.floor(Math.random() * emoji.length)

			// use randIndex to get the emoji 
			const container = emoji.splice(randIndex, 1);
			// randIndex is a variable that contains the rand index number so i start 
			// with that index number that is stored inside.
			const getemoji = container;
			// i stored the container in a new variable to store my emoji that i retrieved..

			// just get item -- text -- an emoji



			// append them to the dom
			const $div = $('<div/>');
			const $cardArea = $('#card-area')
			$div.attr('class', 'cards');
			$div.appendTo($cardArea);

			// use emoji captured above
		    const $p = $('<p/>');
			$p.text(getemoji).appendTo($div);

			
			const $img = $('<img/>')
	        $img.attr("src", "https://cdn4.iconfinder.com/data/icons/smiley-9/100/Poop-512.png")
	        $img.attr('class', getemoji)
			$img.appendTo($div)

		}


	},
	// printData(){
	// 	const timer = $('#timer')
	// 	$timer.text(`timer: ${this.timePassed}s`)
	// },

	turn(card) {
		console.log("here's the card element");
		console.log(card);

		// if previous card was clicked -- this.cardClicked not null
			
			// compare:
			// if the previous card matched the first card that was clicked 
				// (keep cards face up)
				// add point to cards matched

			/// if previous card does not match the card that was clicked 
				// both cards face down
				// (dont add points)


		// if no card was click previously (else)
			// (dont compare)
			// let game know the element that was clicked -- store in this.cardClicked
			// so any card after the first click will be compared to the previous card.
		



		// for later:
		// if all cards are matched user under time limit user wins
		// if no matches or less then total amount that can be match 
		// and or equal to time limt when done  user game is over.



		const currentOpacity = $(card).css('opacity')
		if(currentOpacity == 1) {
			$(card).css('opacity', 0)
		} else if(currentOpacity == 0){
			$(card).css('opacity', 1)
		}

	}
	

	
	
	// compare(card1, card2) {
	
	// 	if(card1.text === card2.text){
	//    		console.log(true); 
	// 	}
		
		

	// }

	

}




game.display()

// $('#start').on('click', () => {
// 	game.beginTimer()
// })


$('.cards').on('click', (e) => {
	game.turn(e.target)
})







