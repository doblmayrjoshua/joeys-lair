var video = document.getElementById('mainvid');
var beep = document.getElementById('beep');
var win = document.getElementById('win');
var fail = document.getElementById('fail');
var source = document.createElement('source');
var cando = false;
//source.setAttribute('src', 'joey_start.mp4');
//webViewSettings.setMediaPlaybackRequiresUserGesture(false);

//video.appendChild(source);
video.src = "./joey_start.mp4"
video.load();
video.click();

function levelended(){
	failure();
}
setTimeout(function() {  
    video.pause();

    video.src ='./joey_l1_1.mp4'

    video.load();
    ////video.play();
    video.addEventListener('ended',levelended,false);
	document.onkeydown = function (e) {
	    if (!video.paused && e.keyCode === 32){
	    	console.log("space")
	    	beep.load()
	    	beep.play()
	    	level1_win()

	    }else{
			failure()   	
	    }
	};
}, 6000);

function startgame(){
	video.src = "./joey_start.mp4"
	//video.play();

	setTimeout(function() {  
	    video.pause();

	    video.src ='./joey_l1_1.mp4'

	    video.load();
	    //video.play();
    	video.addEventListener('ended',levelended,false);

		document.onkeydown = function (e) {
		    if (!video.paused && e.keyCode === 32){
		    	console.log("space")
		    	beep.load()
		    	beep.play()
		    	level1_win()

		    }else{
				failure()   	
		    }
		};
	}, 6000);
}

function failure(){
	fail.load()
	fail.play()
	video.pause();

    video.src ='./joey_fail.mp4'

    video.load();
    //video.play();
	document.onkeydown = null;
	setTimeout(function() {
		startgame()
	}, 7000);
}
function level1_win(){
    video.pause();

    video.src ='./joey_l1_1_win.mp4'

    video.load();
    //video.play();
	document.onkeydown = null;
	setTimeout(function() {
		level2()
	}, 9000);
}
function level2(){
    video.pause();

    video.src ='./joey_l1_2.mp4'

    video.load();
    //video.play();
    video.addEventListener('ended',levelended,false);

	document.onkeydown = function (e) {
	    if (!video.paused && e.keyCode === 38){
	    	console.log("Up")
	    	beep.load()
	    	beep.play()
	    	level2_win()

	    }else{
			failure()   	
	    }
	};	
}
function level2_win(){
    video.pause();

    video.src ='./joey_l1_2_win.mp4'

    video.load();
    //video.play();
	document.onkeydown = null;
	setTimeout(function() {
		level3()
	}, 11000);
}
function level3(){
    video.pause();

    video.src ='./joey_l1_3.mp4'

    video.load();
    //video.play();
    video.addEventListener('ended',levelended,false);

	document.onkeydown = function (e) {
	    if (!video.paused && e.keyCode === 38){
	    	console.log("Up")
	    	beep.load()
	    	beep.play()
	    	level3_win()

	    }else{
			failure()   	
	    }
	};	
}
function level3_win(){
    video.pause();

    video.src ='./joey_l1_3_win.mp4'

    video.load();
    //video.play();
	document.onkeydown = null;
	setTimeout(function() {
		level4()
	}, 11000);
}
function level4(){
    video.pause();
    video.addEventListener('ended',levelended,false);

    video.src ='./joey_l1_4.mp4'

    video.load();
    //video.play();
	document.onkeydown = function (e) {
	    if (!video.paused && e.keyCode === 40){
	    	console.log("Down")
	    	beep.load()
	    	beep.play()
	    	level4_win()

	    }else{
			failure()   	
	    }
	};	
}
function level4_win(){
    video.pause();

    video.src ='./joey_l1_4_win.mp4'

    video.load();
    //video.play();
	document.onkeydown = null;
	setTimeout(function() {
		level5()
	}, 25000);
}
function level5(){
    video.pause();
    video.addEventListener('ended',levelended,false);

    video.src ='./joey_l1_5.mp4'

    video.load();
    //video.play();
	document.onkeydown = function (e) {
	    if (!video.paused && e.keyCode === 38){
	    	console.log("Up")
	    	beep.load()
	    	beep.play()
	    	level5_win()

	    }else{
			failure()   	
	    }
	};	
}
function level5_win(){
    video.pause();

    video.src ='./joey_l1_5_win.mp4'

    video.load();
    //video.play();
	document.onkeydown = null;
	setTimeout(function() {
		chapter1_end()
	}, 9000);
}

function chapter1_end(){
	win.load()
	win.play()
    video.pause();

    video.src ='./joey_l1_end.mp4'

    video.load();
    //video.play();
	document.onkeydown = null;
	setTimeout(function() {
		chapter1_end()
	}, 9000);
}