describe('memory game tests',function () {
	const jsdom = require('jsdom')
	const {JSDOM} = jsdom;

	// using jsDom's VirtualConsole method
	// and telling it to use the default nodejs console. 
	const virtualConsole = new jsdom.VirtualConsole();
	virtualConsole.sendTo(console);
	
	// this function simulates a click on one of the game tiles.
	// const buildArray = ()=>{
	// 	let event = new global.view.MouseEvent('click', {
	// 		view: global.view,
	// 		bubbles: true,
	// 		cancelable: false
	// 	})

	// 	let element = global.window.getElementById('gameboard'); // arg is the index of the jsdom list in li element.
	// 	element.dispatchEvent(event);
	// };

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
              <script src="https://raw.githubusercontent.com/MasixoleMax/DOM_memoryGame/master/src/script.js"></script>
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
		game = require("../src/script")

	})
    it("should be able to add addEventListener to all html elements", ()=>{
		let shuffleArray = require("../src/script")

		// 3 is the index of the div element in the html which is empty by default.
		expect(shuffleArray).toBeDefined();
		
	 })

	 it("should be able to add addEventListener to all html elements", ()=>{
  		let gameover = require("../src/script")

		// 3 is the index of the div element in the html which is empty by default.
		expect(gameover).toBeDefined();
		
	 })
})
