
//window.onload = function(){
	paginacion = document.getElementById("paginacion");
	var divs = paginacion.getElementsByTagName("div").length;
	paginas = new Array();
	actual = 0;
	establecerBotones();
	for (var i = 1; i < divs; i++) {
		if(document.getElementById("pagina-"+i)!=NaN && i>0){
			paginas[paginas.length] = document.getElementById("pagina-"+i);
		}
	};

	for (var i = 0; i < paginas.length; i++) {
		paginas[i].style.display = "none";
	};

	paginas[actual].style.display = "block";

	establecerClases();
//};

function mostrarSiguiente (elemento){
	if (actual+1<paginas.length) {
		actual += 1;
		for (var i = 0; i < paginas.length; i++) {
			paginas[i].style.display = "none";
		};
		paginas[actual].style.display = "block";
	};
	establecerClases();
}

function mostrarAnterior (elemento){
	if (actual-1>=0) {
		actual -= 1;
		for (var i = 0; i < paginas.length; i++) {
			paginas[i].style.display = "none";
		};
		paginas[actual].style.display = "block";
	};
	establecerClases();
}

function establecerClases (argument){
	if (actual-1<0) {
		document.getElementById("li-anterior").className = "previous disabled";
	}else{
		document.getElementById("li-anterior").className = "previous";
	}
	if (actual+1>=paginas.length) {
		document.getElementById("li-siguiente").className = "next disabled";
	}else{
		document.getElementById("li-siguiente").className = "next";
	}
}

function establecerBotones(){
	paginacion.innerHTML = paginacion.innerHTML + "<ul class='pager'>"+
	"<li id='li-anterior'><a href='#' onclick='mostrarAnterior()'>Anterior</a></li>"+
	"<li id='li-siguiente'><a href='#' onclick='mostrarSiguiente()'>Siguiente</a></li>"+
	"</ul>";

}
