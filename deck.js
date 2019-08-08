// This is the array that holds the deck of cards
var deck = [
	{id: 1, name:"El Gallo", src: "./images/1.elGallo.jpg"}, 
	{id: 2, name:"El Diabltio", src: "./images/2.elDiablito.jpg"},
	{id: 3, name:"La Dama", src: "./images/3.laDama.jpg"},
	{id: 4, name:"El Catrin", src: "./images/4.elCatrin.jpg"},
	{id: 5, name:"El Paraguas", src: "./images/5.elParaguas.jpg"},
	{id: 6, name:"La Sirena", src: "./images/6.laSirena.jpg"},
	{id: 7, name:"La Escalera", src: "./images/7.laEscalera.jpg"},
	{id: 8, name:"La Botella", src: "./images/8.laBotella.jpg"},
	{id: 9, name:"El Barril", src: "./images/9.elBarril.jpg"},
	{id: 10, name:"El Arbol", src: "./images/10.elArbol.jpg"},
	{id: 11, name:"El Melon", src: "./images/11.elMelon.jpg"},
	{id: 12, name:"El Valiente", src: "./images/12.elValiente.jpg"},
	{id: 13, name:"El Gorrito", src: "./images/13.elGorrito.jpg"},
	{id: 14, name:"La Muerte", src: "./images/14.laMuerte.jpg"},
	{id: 15, name:"La Pera", src: "./images/15.laPera.jpg"},
	{id: 16, name:"La Bandera", src: "./images/16.laBandera.jpg"},
	{id: 17, name:"El Bandolon", src: "./images/17.elBandolon.jpg"},
	{id: 18, name:"El Violoncello", src: "./images/18.elVioloncello.jpg"},
	{id: 19, name:"La Garza", src: "./images/19.laGarza.jpg"},
	{id: 20, name:"El Pajaro", src: "./images/20.elPajaro.jpg"},
	{id: 21, name:"La Mano", src: "./images/21.laMano.jpg"},
	{id: 22, name:"La Bota", src: "./images/22.laBota.jpg"},
	{id: 23, name:"La Luna", src: "./images/23.laLuna.jpg"},
	{id: 24, name:"El Cotorro", src: "./images/24.elCotorro.jpg"},
	{id: 25, name:"El Borracho", src: "./images/25.elBorracho.jpg"},
	{id: 26, name:"El Negrito", src: "./images/26.elNegrito.jpg"},
	{id: 27, name:"El Corazon", src: "./images/27.elCorazon.jpg"},
	{id: 28, name:"La Sandia", src: "./images/28.laSandia.jpg"},
	{id: 29, name:"El Tambor", src: "./images/29.elTambor.jpg"},
	{id: 30, name:"El Camaron", src: "./images/30.elCamaron.jpg"},
	{id: 31, name:"Las Jaras", src: "./images/31.lasJaras.jpg"},
	{id: 32, name:"El Musico", src: "./images/32.elMusico.jpg"},
	{id: 33, name:"La Arana", src: "./images/33.laArana.jpg"},
	{id: 34, name:"El Soldado", src: "./images/34.elSoldado.jpg"},
	{id: 35, name:"La Estrella", src: "./images/35.laEstrella.jpg"},
	{id: 36, name:"El Cazo", src: "./images/36.elCazo.jpg"},
	{id: 37, name:"El Mundo", src: "./images/37.elMundo.jpg"},
	{id: 38, name:"El Apache", src: "./images/38.elApache.jpg"},
	{id: 39, name:"El Nopal", src: "./images/39.elNopal.jpg"},
	{id: 40, name:"El Alacran", src: "./images/40.elAlacran.jpg"},
	{id: 41, name:"La Rosa", src: "./images/41.laRosa.jpg"},
	{id: 42, name:"La Calavera", src: "./images/42.laCalavera.jpg"},
	{id: 43, name:"La Campana", src: "./images/43.laCampana.jpg"},
	{id: 44, name:"El Cantarito", src: "./images/44.elCantarito.jpg"},
	{id: 45, name:"El Venado", src: "./images/45.elVenado.jpg"},
	{id: 46, name:"El Sol", src: "./images/46.elSol.jpg"},
	{id: 47, name:"La Corona", src: "./images/47.laCorona.jpg"},
	{id: 48, name:"La Chalupa", src: "./images/48.laChalupa.jpg"},
	{id: 49, name:"El Pino", src: "./images/49.elPino.jpg"},
	{id: 50, name:"El Pescado", src: "./images/50.elPescado.jpg"},
	{id: 51, name:"La Palma", src: "./images/51.laPalma.jpg"},
	{id: 52, name:"La Maceta", src: "./images/52.laMaceta.jpg"},
	{id: 53, name:"El Arpa", src: "./images/53.elArpa.jpg"},
	{id: 54, name:"La Rana", src: "./images/54.laRana.jpg"},
];

// Display cards onto Game 
function displayGameCard(){
	var i = 0;
	while(i < 16){
		var currentCard = document.getElementById("b" + (i+1))
		currentCard.setAttribute("src", cardsOnGameCard[i].src);
		i++;
	}
}

// When card is clicked, display image of pinto bean, if it's clicked again, remove the image 
function displayBean(){
	let i = 1;
	while(i <= 16){
		let theCard = document.getElementById("b" + i)
		theCard.addEventListener("click", onCardClick);
		i++;
	}
}

function onCardClick(e) {
	var newId = e.target.id.replace("b", "p");
	console.log('card id is', e.target.id, 'so the bean id is', newId);
	var bean = document.getElementById(newId)
	console.log("beanVisibility", bean);
	let computedStyle = window.getComputedStyle(bean);
	console.log(computedStyle.visibility);
	console.dir(bean);
	// IF BEAN IS INVISIBLE
	if (computedStyle.visibility == "hidden"){
		console.log("Bean is now visible");
		bean.style.visibility = "visible";
		//tally goes up
		beanCount++;
		showWinButton();
		bean.addEventListener('click', onBeanClick);
	}
	else{
		bean.parentElement.children[1].style.visibility = "hidden";
		beanCount--;
	}
};

function onBeanClick(e){
	e.target.style.visibility = "hidden";
	console.log("Bean is now invisible");
	// document.getElementById("buenas").style.visibility = "hidden";
	// document.getElementById("buenas").removeEventListener("click", endGame);
	//tally goes down
	beanCount--;
}

function removeAllClicks(){
	let i = 1;
	while(i <= 16){
		let theCard = document.getElementById("b" + i)
		console.log(theCard);
		theCard.removeEventListener("click", onCardClick);
		var newId = theCard.id.replace("b", "p");
		document.getElementById(newId).removeEventListener("click", onBeanClick);
		i++;
	}
}

