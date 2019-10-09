class Card {

	constructor(text) {
		this.text = text;
		this.showText = false;
		this.matched = false
	}

	


}


const emoji = ['🥞', '🥞', '🍰', '🍰', '🍪', '🍪', '🍡', '🍡', '🍮', '🍮', '🍦', '🍦'];

const game = {
	timePassed:100, 
    points:0,

  

	display() {
		
		

			while(emoji.length > 0) {
				
				// get a rand index number so we can get one emoji
				const randIndex = Math.floor(Math.random() * emoji.length)

				// use randIndex to get the emoji 
				const container = emoji.splice(randIndex, 1);
				// randIndex is a variable that contains the rand index number so i start 
				// with that index number that is stored inside.
				const getemoji = container;
				// i stored the container in a new variable to store my emoji that i retrieved.

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
				$img.appendTo($div)

				// console.log($img);
					// console.log(emoji.length);


			}





		// for(let i = 0; i < emoji.length; i++){

		// 	// add text using Math.floor(Math.random())
		// 	// give them id or class



		// 	// create divs
		// 	const $div = $('<div/>');
		// 	const $p = $('<p/>');

		// 	// append them to the dom
		// 	const $cardArea = $('#card-area')
		// 	$div.appendTo($cardArea);
		// 	$p.text(emoji[i]).appendTo($div);

		// 	// Math.floor(Math.random() * emoji.length)
  //  //          emoji.splice()
		// 	$div.attr('class', 'cards');
		// 	// console.log($('.cards'));
		// 	const $img = $('<img/>')
		// 	// $img.attr('id', i)
		// 	$img.attr("src", "https://cdn4.iconfinder.com/data/icons/smiley-9/100/Poop-512.png")
		// 	$img.appendTo($div)
		// 	console.log($img);

		// }

	},
	// printData(){
	// 	const timer = $('#timer')
	// 	$timer.text(`timer: ${this.timePassed}s`)
	// },

	turn(card) {
		console.log("now we're in turn and we're changing the opacity");
		const currentOpacity = $(card).css('opacity')
		console.log(currentOpacity);
		if(currentOpacity == 1) {
			console.log("currentOpacity is 0 and we're switching it");
			$(card).css('opacity', 0)
		} else if(currentOpacity == 0){
			console.log("currentOpacity is 1 and we're switching it");
			$(card).css('opacity', 1)
		}
	

	}
	

	
	
	// compare(card1, card2) {
	
	// 	if(card1.text === card2.text){
	//    		console.log(true); 
	// 	}
		
		

	// }

	

}





// const card1 = new Card(emoji[0])
// // console.log(card1); 
// const card2 = new Card(emoji[1])
// console.log(card2);
// game.compare(card1, card2);
game.display()
// $('#start').on('click', () => {
// 	game.beginTimer()
// })



$('.cards').on('click', (e) => {
	console.log(e.target);
	game.turn(e.target)
})







