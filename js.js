LINK = location.href+"";
function scrZN(z) {
	if(z<50){
		window.scrollTo(0, z*100);
		z=z+1;
		setTimeout(function(){scrZN(z);},1000);
	} else scrZN(0);
}
LinkTwitArr=["1033880969365712896","1031433658006007808","1031433299929919488","1033983001401511936"];
if(LINK=="about:blank"){	
	HTML = "<h3><center><a href=''>Reload</a></center></h3>";
	LTwt = LinkTwitArr[Math.floor(Math.random()*(LinkTwitArr.length))];
	u='https://mobile.twitter.com/Paket_Wisata_Ok/status/'+LTwt;
	//u='https://medium.com/@arenawisataid/paket-wisata-jogja-murah-arena-wisata-f5eb743fae7c';
	HTML+='<a class="start" href="'+u+'">Post: '+LTwt+'</a>';
	document.body.innerHTML = HTML;
}else if(LINK.indexOf("medium.com")>-1){	
	var L = document.querySelector("a[href*='paket-wisata-jogja.html']");
	L.removeAttribute("rel");
	L.removeAttribute("target");
	L.click();
	
}else if(LINK.indexOf("arenawisata.")>-1){
	var Uriz= (LINK).split("/");
	if(Uriz[3]==""){
		setTimeout(function(){scrZN(0)},3000);
		setTimeout(function(){document.querySelector("[href='paket-wisata-jogja']").click();},((100*Math.floor((Math.random() * 100) + 1))+60000));
		
	}else if(Uriz[3]=="paket-wisata-jogja.html"){
		setTimeout(function(){scrZN(0)},3000);
		setTimeout(function(){document.querySelectorAll(".entry p>a")[6].click();},((100*Math.floor((Math.random() * 100) + 1))+60000));
	}else if(Uriz[4]=="paket-wisata-jogja-murah"){
		var CekL = document.querySelectorAll("a[href*='paket-wisata-jogja.html']");
		if(CekL){
			setTimeout(function(){scrZN(0)},2000);
			setTimeout(function(){CekL[0].click();},((100*Math.floor((Math.random() * 100) + 1))+60000));
		}
	}else if(Uriz[3]=="paket-wisata-jogja"){
		aLink = document.querySelectorAll(".konten a");
		setTimeout(function(){scrZN(0)},3000);
		setTimeout(function(){
			var L = aLink[Math.floor((Math.random() * aLink.length) + 0)];
			L.href = L.href+"?Z=Yes";
			L.click();
		},((100*Math.floor((Math.random() * 100) + 1))+60000));
	} else{
		setTimeout(function(){
			if(Math.floor(Math.random()*2)){
				var Related = document.querySelectorAll("#related-posts a");
				Related[Math.floor(Math.random()*Related.length)].click();
			} else location.href='http://www.w3-directory.com/vote-w3-directory.php?id_site_vote=87144';
		},((100*Math.floor((Math.random() * 100) + 1))+60000));
	}
	
}
