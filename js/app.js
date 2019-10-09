class Card {

	constructor(text) {
		this.text = text;
		this.showText = false;
		this.matched = false
	}

	


}

const game = {
	timePassed:100, 
    points:0,



    // beginTimer(){
    // 	const timer = setInterval(() => {
    // 		this.timePassed--
    // 		this.printData()
    // 		console.log(timer)

    // 	}, 1000)

    // },

	display() {
		
		for(let i = 0; i < emoji.length; i++){

			const $div = $('<div/>');
			const $p = $('<p/>');
			const $cardArea = $('#card-area')
			$div.appendTo($cardArea);
			$p.text(emoji[i]).appendTo($div);
			$div.attr('class', 'cards');
			// console.log($('.cards'));
			const $img = $('<img/>')
			$img.attr('id', i)
			$img.attr("src", "https://cdn4.iconfinder.com/data/icons/smiley-9/100/Poop-512.png")
			$img.appendTo($div)
			// console.log($img);

		}

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

	// if(e  === 0){
	//   e = 100;
	//  }
	// if (e.target === 0) {
	// 	e.target = 100;
	

	},

	

	
	
	// compare(card1, card2) {
	
	// 	if(card1.text === card2.text){
	//    		console.log(true); 
	// 	}
		
		

	// }

	

}




const emoji = ['🥞', '🥞', '🍰', '🍰', '🍪', '🍪', '🍡', '🍡', '🍮', '🍮', '🍦', '🍦'];



// const card1 = new Card(emoji[0])
// // console.log(card1);
// const card2 = new Card(emoji[1])
// console.log(card2);
// game.compare(card1, card2);
game.display()
// $('#start').on('click', () => {
// 	game.beginTimer()
// })

// $('div').on('click', (e) => {
// 	$(e.target).css('opacity', 1)
// 	// game.turn()
// })


$('.cards').on('click', (e) => {
	console.log(e.target);
	game.turn(e.target)
})







