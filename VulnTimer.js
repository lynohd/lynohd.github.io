
/// <reference path="alt1/runeappslib.js">
/// <reference path="alt1/alt1lib.js">
/// <reference path="alt1/alt1intellisense.js">
/// <reference path="alt/chatbox.js">



const VULN_TIME = 600;
const DEBUG_MODE = true;


var reader = new ChatBoxReader();

var old_vuln = [];
var old_lines = [];
var stamps_used = false;


function sanitisePercentage(i) {
     Math.min(100, Math.max(0,i));
}

function start(){
    if(true || window.alt1){
        reader.find();
        setInterval(() => readChatbox(),1000);
    }
}

var vulnTimer = new Timer(function(time){
    var time_left = (Math.floor(time/600) * .6).toFixed(0);
    var percent = sanitisePercentage(time_left / VULN_TIME * 1000);

    $("#vuln_txt").html(time_left + "s");
    if(time <= 10){ 
        //remind 
    }

    if(time <= 0){
        $("#vuln_txt").html("0s");
        vulnTimer.stop();
    }

});

function readChatbox(){
    reader.diffRead = !stamps_used;
    reader.readargs = {
		colors: [
		a1lib.mixcolor(132,212,119),
		a1lib.mixcolor(255,255,255),
		a1lib.mixcolor(127,169,255),
		a1lib.mixcolor(119,159,240),
		a1lib.mixcolor(127,169,255),
		a1lib.mixcolor(195,16,16),
		a1lib.mixcolor(0,255,0)
		
		//	[132, 212, 119],
		//	[255, 255, 255]
		],
		backwards: true
	};
    var minoverlap = 50;
    var new_lines = [];
    var opts = reader.read() || [];
    if(stamps_used){
        for(var a = 0; a < opts.length; a++){
            var match = false;
            for(var i = 0; i < old_lines.length;i++){
                if(reader.matchLines(opts[a].text, old_lines[i].text)){
                    match = true;
                    break;
                }
            }
            if(!match){
                old_lines.push(opts[a]);
                new_lines.push(opts[a]);
            }
        }
        if(old_lines.length > minoverlap)
            old_lines.splice(0, old_lines.length - minoverlap);
            opts = new_lines;
    }
    for(var a = 0; a < opts.length; a++){
		var stamp = opts[a].text.match(/(\d\d:\d\d:\d\d)/);
        if (stamp) stamps_used = true;
        if(opts[a].text.indexOf("hex to your target") !== -1){
            console.log(opts[a].text);

            if(stamp){
                if(old_vuln.indexOf(stamp[1]) == -1){
                    vulnTimer.reset(VULN_TIME);
                    vulnTimer.start(100);
                    old_vuln.push(stamp[1]);
                }
            }
            else{
                vulnTimer.reset(VULN_TIME);
                vulnTimer.start(100);
            }
        }
    }

}

function Timer(callback){
    var time = 0;
    var mode = 0;
    var status = 0;
    var timer_id;
    var start_time = new Date().getTime();

    this.start = function(interval) {
        interval = (typeof(interval) !== 'undefined') ? interval : 1000;

        if(status == 0){
            status = 1;
            timer_id = setInterval(() => {
                time = start_time - (new Date().getTime());
                if(typeof(callback) === 'function') callback(time);
            }, interval);
        }
    }

    this.stop = function(){
        if(status == 1){
            status = 0;
            clearInterval(timer_id);
            callback(0);
        }
    }

    this.reset = function(sec){
        sec = (typeof(sec) !== 'undefined') ? sec : 0;
        start_time = (new Date().getTime()) + (sec*100);
    }

    this.mode = function(timer_mode){
        mode = timer_mode;
    }

    this.getTime = function(){
        return time;
    }

    this.getMode = function(){
        return mode;
    }

    this.getStatus = function(){
        return status;
    }

}