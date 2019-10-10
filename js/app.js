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
    matchPoints:0,

    //store element
    cardClicked: null,

	display() {
		
		while(emoji.length > 0) {
			console.log(this.cardClicked);
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
		const $card = $(card)
		const currentOpacity = $(card).css('opacity')
		if(currentOpacity == 1) {
			$(card).css('opacity', 0)
		} else if(currentOpacity == 0){
			$(card).css('opacity', 1)
		}
		// const getCard = $(card)[0].className
		// console.log("this is the card jquery object");
		// console.log($card[0].className);
		// console.log(this.cardClicked);

		// if no card was click previously (else)
		if(this.cardClicked === null) {
			// let game know the element that was clicked -- store in this.cardClicked
			// so any card after the first click will be compared to the previous card.
			this.cardClicked = $card
		
		} else if (this.cardClicked !== null){
			
			//new function where you pass in  and $card
			this.compareCards($card)
			



		}


		// if previous card was clicked -- this.cardClicked not null
			

			// (dont compare)



		// for later:
		// if all cards are matched user under time limit user wins
		// if no matches or less then total amount that can be match 
		// and or equal to time limt when done  user game is over.



		
	},
	

	
	compareCards($card){

		const $card3 = $(this.cardClicked)
		const $card2 = $card3[0].className
		const $card1 = $card[0].className
       
		
		
		// get the val



		// if the previous card matched the first card that was clicked 
		if($card1 === $card2){
		
			console.log(true);
			this.matchPoints +=1

			setTimeout(() => {
		    $('p').hide()



			}, 500)

			// setTimeout
				// (keep cards face up -- remove emoji?)
			
				// add point to cards matched
    	

		
		/// if previous card does not match the card that was clicked 
		} else {
			setTimeout(() => {
				$card.css('opacity', 1)
				$card3.css('opacity', 1)





			}, 500)
			
			console.log(false);


			// setTimeout
				// both cards face down currentOpacity = 1

				// (dont add points)
		}




	},
	
	endturn(){
	  	//user shouldnt be able to click the card thats flipped face up
       	// end turn if match of two is made and true,
       	// end turn after two cards are clicked and match is false, face down
       	// only two cards at a time .. after 2 card clicks disable listiner
       //



	}

 }


		
 

	





game.display()

// $('#start').on('click', () => {
// 	game.beginTimer()
// })


$('.cards').on('click', (e) => {
	game.turn(e.target)
})







