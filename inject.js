/* 
	Add Simple Download button for tiktok
	================================================
	FreeAngel
    my youtube channel : http://www.youtube.com/channel/UC15iFd0nlfG_tEBrt6Qz1NQ
*/

function msg(){

		alert("Please Change to Mobile View and Reload the Page !");
}

function CreateBtn(a,src){

	var btn = document.createElement('div');
	btn.innerHTML = "<br /><a href='"+src+"' target='_blank'>&nbsp; Video &nbsp;</a>";
	btn.className = "Nm9Fw";
	
	if(src.indexOf("blob") !== -1){
	
		btn.onclick = function(e){
			msg();
			e.preventDefault();
		}
	}
	
	var pr = a.closest('article');
	var secs = pr.querySelectorAll('section.EDfFK');
	if((secs) && (secs.length > 0))
	secs[0].appendChild(btn);
}

function InjectButton(){
	
	var vids = document.querySelectorAll('video.tWeCl');
	if((!vids) || (vids.length < 1)) { 
		console.log("No Video found");
		return; 
	}
	
	var vid;
	var src;
	
	for(var i=0; i<vids.length; i++){
		
		dataId = vids[i].getAttribute("data-id");
		if(dataId == "true") { continue; }
		
		src = vids[i].getAttribute('src');
		console.log("video : "+src);
		
		if(!src) { continue; }

		CreateBtn(vids[i],src);
		vids[i].setAttribute("data-id","true");
	}
}

	var CheckInterval = setInterval(function() {
	
		if (document.readyState === "complete"){

			InjectButton();
		}
		
	}, 3000);
	
