// class Card {

// 	constructor(text) {
// 		this.text = text;
// 		this.showText = false;
// 		this.matched = false
// 	}


// }


const emoji = ['🥞', '🥞', '🍰', '🍰', '🍪', '🍪', '🍡', '🍡', '🍮', '🍮', '🍦', '🍦'];

const game = {
	timePassed: 31, 
    matchPoints: 0,
    gameOver: false,

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

    beginTimer(){
    	const timer = setInterval(()=> {
			this.timePassed--
    		
    		if(this.matchPoints === 6 || this.timePassed === 0  ){
	    		clearInterval(timer)
	    	    this.gameOver = true;

    		}
			this.endGame()
    		this.printData()
    	},1000)
    	
    },
	
	printData(){	
		const $timer = $('#timer')
		$timer.text(`Timer: ${this.timePassed}s`)
		const $matches = $('#matches')
		$matches.text(`CardsMatched: ${this.matchPoints}`)
		
	},

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
	},
	
	compareCards($card){

		const $card2 = $(this.cardClicked)
		const $card2Emoji = $card2[0].className
		const $card1Emoji = $card[0].className
       
		
		
		// get the val



		// if the previous card matched the first card that was clicked 
		if($card1Emoji === $card2Emoji){
			// add point to cards matched
			this.matchPoints +=1
			setTimeout(() => {
			    $card.remove()
			    $card2.remove()
				this.cardClicked = null;
		}, 500)
		/// if previous card does not match the card that was clicked 
		} else {
			setTimeout(() => {
				// both cards face down currentOpacity = 1
				$card.css('opacity', 1)
				$card2.css('opacity', 1)
				this.cardClicked = null

			}, 500)
			
		}

	},
	
	endGame(){
		
		if(this.matchPoints < 6 && this.gameOver){
			$('#lose').text(`Game Over!`)
			this.turn()
			$('.cards').off('click');
     
        } else if(this.matchPoints === 6) {
			$('#win').text(`You Won !`)
			$('.cards').off('click');
		}
	}

}


		
game.display()

$('#start').on('click', () => {
	game.beginTimer()

})



$('.cards').on('click', (e) => {
	game.turn(e.target)

})


// user shouldnt be able to click the card thats flipped face up
// end turn if match of two is made and true,
// end turn after two cards are clicked and match is false, face down
// only two cards at a time .. after 2 card clicks disable listiner
// not able to press cards until press start
// clicking blue space 
// fast clicks allow too many flips
