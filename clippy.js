(function() {
	"use strict";
	
	let mappings = {
		"65": agent => agent.show(),
		"49": agent => agent.speak("Where am I?"), //1
		"50": agent => agent.speak("Uh nice, hello Zuehlke!"), //2
		"51": agent => agent.speak("You could use custom elements"), //3
		"52": agent => agent.speak("Of course there is"), //3
	};
	
	clippy.load('Clippy', registerKeyDownListener);
	
	function registerKeyDownListener(agent) {
		document.addEventListener('keydown', function (event) {
			if(mappings[event.keyCode]) {
				mappings[event.keyCode](agent);
			} else {
                agent._hidden != undefined && !agent._hidden && agent.hide();
			}
    	});
	}
})();
