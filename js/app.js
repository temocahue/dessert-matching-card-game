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

	display() {
		
		for(let i = 0; i < emoji.length; i++){

			const $div = $('<div/>');
			const $p = $('<p/>');
			const $cardArea = $('#card-area')
			$div.appendTo($cardArea);
			$p.text(emoji[i]).appendTo($div);
			$div.attr('class', 'cards');
			console.log($('.cards'));
			const $img = $('<img/>')

		$img.attr("src", "https://cdn4.iconfinder.com/data/icons/smiley-9/100/Poop-512.png")
		$img.appendTo($div)
		console.log($img);

		}

	},

	turn() {

		// see if you can get it printing what card was clicked -- use a listener

		// 3. visual -- see card face instead card back

		// 4. make it flip back either after some time or after they click again
		// const $img = $('<img/>')

		// $img.attr("src", "https://cdn4.iconfinder.com/data/icons/smiley-9/100/Poop-512.png")
		// $img.appendTo($div)
		// console.log($img);

		//to show front, hide this image?

		// to show back, hide the emoji <p>, show the image?

	},
	
	compare(card1, card2) {
	
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






