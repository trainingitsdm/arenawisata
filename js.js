LINK = location.href+"";
function scrZN(z) {
	if(z<50){
		window.scrollTo(0, z*100);
		z=z+1;
		setTimeout(function(){scrZN(z);},1000);
	} else scrZN(0);
}

if(LINK=="about:blank"){	
	LStatus=["1033880969365712896","1031433658006007808","1031433299929919488","1033983001401511936"];
	LRedirect=["PEwOo3WzW0","TT11IHesZH","vTyabc1YR2","QkIZ5Ch6DJ"];
	//N=Math.floor(Math.random()*(LStatus.length));
	N=Math.floor(Math.random()*(0));
	HTML = "<html><head><style>body{background:#2C789F} body a{display:;}</style></head><body>";
	HTML+='<blockquote class="twitter-tweet"><p lang="in" dir="ltr">Start Now'
		+ ' <a href="https://t.co/'+LRedirect[N]+'" id="StartNow" >https://t.co/'+LRedirect[N]+'</a></p>&mdash; '
		+ ' Paket Wisata Murah (@Paket_Wisata_Ok) <a href="https://twitter.com/Paket_Wisata_Ok/status/'+LStatus[N]
		+ '?ref_src=twsrc%5Etfw">August 20, 2018</a></blockquote>'
		+ '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
	HTML+='</body></html>';
	document.body.innerHTML = HTML;
}else document.body.innerHTML = "asd";
if(LINK.indexOf("medium.com")>-1){	
	var L = document.querySelector("a[href*='paket-wisata-jogja.html']");
	L.removeAttribute("rel");
	L.removeAttribute("target");
	L.click();
	
}else if(LINK.indexOf("plus.google.com")>-1){
	document.body.innerHTML = "asd";
	var a = document.querySelectorAll("[data-oid='114771181492638643285']");
	[].forEach.call(a,function(A,B){
		if(A.innerText=='Arena wisata id')A.click();
	});
	
	function CekLink(){
		var src = document.querySelectorAll("[src='https://s2.googleusercontent.com/s2/favicons?sz=32&domain_url=https%3A%2F%2Fwww.arenawisata.id%2Fpaket-wisata-jogja.html']");
		if(src.length) src[0].nextElementSibling.click();
		else setTimeout(function(){ CekLink()},1000);
	}
	 CekLink();
}else if(LINK.indexOf("arenawisata.")>-1){
	var Uriz= (LINK).split("/");
	if(Uriz[3]==""){
		setTimeout(function(){scrZN(0)},1000);
		setTimeout(function(){document.querySelector("[href='paket-wisata-jogja']").click();},((100*Math.floor((Math.random() * 100) + 1))+30000));
		
	}else if(Uriz[3]=="paket-wisata-jogja.html"){
		setTimeout(function(){scrZN(0)},1000);
		setTimeout(function(){document.querySelectorAll(".entry p>a")[6].click();},((100*Math.floor((Math.random() * 100) + 1))+30000));
	}else if(Uriz[4]=="paket-wisata-jogja-murah"){
		var CekL = document.querySelectorAll("a[href*='paket-wisata-jogja.html']");
		if(CekL){
			setTimeout(function(){scrZN(0)},2000);
			setTimeout(function(){CekL[0].click();},((100*Math.floor((Math.random() * 100) + 1))+30000));
		}
	}else if(Uriz[3]=="paket-wisata-jogja"){
		aLink = document.querySelectorAll(".konten a");
		setTimeout(function(){scrZN(0)},1000);
		setTimeout(function(){
			var L = aLink[Math.floor((Math.random() * aLink.length) + 0)];
			L.href = L.href;
			L.click();
		},((100*Math.floor((Math.random() * 100) + 1))+30000));
	} else{
		setTimeout(function(){scrZN(0)},1000);
		setTimeout(function(){
			if(Math.floor(Math.random()*2)){
				var Related = document.querySelectorAll("#related-posts a");
				Related[Math.floor(Math.random()*Related.length)].click();
			} else location.href='http://www.w3-directory.com/vote-w3-directory.php?id_site_vote=87144';
		},((100*Math.floor((Math.random() * 100) + 1))+30000));
	}
	
}else if(LINK.indexOf(".w3-directory.com")>-1){
	location.href='about:blank';
}else if(LINK.indexOf("mobile.twitter")>-1){
	//setTimeout(function(){document.body.innerHTML = "SAPI";},5000);
	function CekLink(No=0){
		//G-Plus , Arena Wisata, Medium, Facebook
		var A=document.querySelectorAll("[href*='PEwOo3WzW0'],[href*='TT11IHesZH'],[href*='vTyabc1YR2'],[href*='QkIZ5Ch6DJ']");
		if(A.length){
			A[0].click();
		} else if(No<200)setTimeout(function(){CekLink(No+1)},1000);
		//return A.length?A[0].click():(No<20?setTimeout(function(){CekLink(No+1)},1000):false);
	}
	CekLink();
} 
