// let {
// 	shuffleArray,
// 	checkSrc,
// 	cardFlip,
// 	isinArray,
// 	gameover,
// 	clearInterval,
// 	hideCard,
// 	buildBoard,
// 	pickCard,
// 	buildArray,
// 	startGame
//   } = require('../src/script')
describe('memory game tests',function () {
	const jsdom = require('jsdom')
	const {JSDOM} = jsdom;

	// using jsDom's VirtualConsole method
	// and telling it to use the default nodejs console. 
	const virtualConsole = new jsdom.VirtualConsole();
	virtualConsole.sendTo(console);
	
	// this function simulates a click on one of the game tiles.
	const clickSimulator = (arg)=>{
		let event = new global.view.MouseEvent('click', {
			view: global.view,
		})

		let element = global.window.getElementsByTagName('div')[arg]; // arg is the index of the jsdom list in li element.
		element.dispatchEvent(event);
    };
    
    beforeEach(()=>{

        dom = new JSDOM(`<!DOCTYPE html>
            <html>
            <head>
              <title>Memory Game</title>
              <link rel="stylesheet" href="../css/style.css">
            </head>
            <body>
              <div id="wrapper">
                <div id="start" class="btn">Start</div>
                <div id="score"></div>
                <div id="message"></div>
                <div stlye="main"><div id="gameboard"></div></div>
              </div>
              <script src=""></script>
            </body>
            </html>`, {
				// enabling jsDom to run scripts and use external
				// resource via i.e <link>, <script>, <img>, etc
				runScripts: "dangerously",
				resources: "usable"
			}
		)

		global.view = dom.window;
		global.window = dom.window.document;
		game = require("../script/src/script")
    })
    
    it("should be able to add addEventListener to all game tiles and ,make them clickable", ()=>{
		
		clickSimulator(0) // specify which card index to click
		expect(global.window.getElementsByClassName('start').length).toEqual()
		
		clickSimulator(5) //flip another card at index 5
		expect(global.window.getElementsByClassName('start').length).toEqual()
	})

	it("should dosomething", ()=>{
		expect(typeof 1).toEqual('number')
	})
})
