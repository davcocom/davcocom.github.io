window.onload=function(){
	var navbar = document.getElementById("navbar");
	navbar.innerHTML = "<div class='container'>"
	+"<!-- Brand and toggle get grouped for better mobile display -->"
	+"<div class='navbar-header'>"
	+"  <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>"+
	+"    <span class='sr-only'>Toggle navigation</span>"
	+"   <span class='icon-bar'></span>"
	+" <span class='icon-bar'></span>"
	+"<span class='icon-bar'></span>"
	+"</button>"
	+"<a class='navbar-brand' href='index.html'>Home</a>"
	+"</div>"
	+"<!-- Collect the nav links, forms, and other content for toggling -->"

	+"<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>"

	+"  <form class='navbar-form navbar-right' role='search'>"
	+"    <div class='form-group'>"
	+"       <input type='text' class='form-control' placeholder='Buscar'>"
	+" </div>"
	+"<button type='submit' class='btn btn-default'>Buscar</button>"
	+"</form>"
	+"<ul class='nav navbar-nav'>"
	+"   <li><a class='bg-primary' href='consultas.html'>Consulta</a></li>"
	+"</ul>"
	+"<ul class='nav navbar-nav navbar-right'>"
	+"   <li><a href='registro.html'>Registrate</a></li>"
	+" <li>"
	+"   <a href='#'>Iniciar sesión</a>"
    +"<form class='inicioSesion' action='perfil.html'>"
    +"<label class='label' for='usuario'>Usuario</label>"
    +"<input class='form-control' id='usuario' type='text' placeholder='Usuario'/>"
    +"<label class='label' for='clave'>Contraseña</label>"
    +"<input class='form-control' type='text' id='clave' placeholder='Contraseña'/>"
    +"<a href=''>¿Haz olvidado tu contraseña?</a>"
    +"<input class='btn btn-success' type='submit' value='Iniciar sesión'/>"
    +"<div>¿Aun no eres usuario? <a href='registro.html'>Registrate aqui</a></div>"
    +"</form>"
	+"</li>"
	+"<li><a href='#'>Ayuda</a></li>"
	+"</ul>"

	+"</div><!-- /.navbar-collapse -->"
	+"</div><!-- /.container-fluid -->";
};