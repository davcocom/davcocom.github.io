<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
<head>
    <title>Subir archivo</title>
    <link rel="stylesheet" href="css/bootstrapYeti.css">
    <link rel="stylesheet" href="css/main.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/navbar.js"></script>
    <?php 
    print_r($_POST);
    $archivo = $_FILES['archivoCVS']['name'];
    $nombre = $_POST["nombre"];
    $descripcion = $_POST["descripcion"];
    $area = $_POST["area"];

    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["archivoCVS"]["name"]);
    $uploadOk = 1;
    $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image

    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["archivoCVS"]["tmp_name"], $target_file)) {
            echo "The file ". basename( $_FILES["archivoCVS"]["name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
    ?>
</head>
<body>

    <nav id="navbar" class="navbar-default navbar-fixed-top" role="navigation"></nav>

    <div class="container" >  
        <div id="paginacion">

            <div id="pagina-1">
                <br>
                <label class="col-lg-2 control-label">Selecciona la columna principal</label> 
                <br>
                <select class="form-control" id="selectColumnaPrincipal">
                    <?php  
                    $row = 1;
                    if (($handle = fopen($target_file, "r")) !== FALSE) {
                      while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                        $num = count($data);
                        //echo "<p> $num fields in line $row: <br /></p>\n";
                        $row++;
                        for ($c=0; $c < $num; $c++) {
                            echo "<option>".$data[$c] . "</option>";
                        }
                        break;
                    }
                    fclose($handle);
                }
                ?>
            </select>
            <br>
            <label class="col-lg-2 control-label">Escribe las etiquetas separadas por comas.</label> 
            <textarea class="form-control" rows="2" id="textAreaEtiquetas"></textarea>
        </div>
        <div id="pagina-2">
            <br>
            <label class="control-label">Selecciona la manera en que se realizaran los puntos de corte</label>
            <br>
            <div class="btn-group">
                <input name="optionsRadios" id="optionsRadios1" value="option1" checked="" type="radio">Automatico
                <input name="optionsRadios" id="optionsRadios2" value="option2" type="radio"> Manual
            </div>
            <br>
            <br>
            <label class="control-label">Escribe los puntos de corte separados por comas. (Si aplica)</label> 
            <input class="form-control" id="inputCortes" placeholder="Puntos de corte" type="text">
        </div>
        <div id="pagina-3">
            <br>
            <label>Nombre</label>
            <p><?php echo $nombre; ?></p> 
            <label>Descripcion</label>
            <p><?php echo $descripcion; ?></p>  
            <label>Área</label>
            <p><?php echo $area; ?></p>
            <br>
            <button class="col-lg-3 btn btn-success" onclick="btnCancelar()">Enviar</button>
            <br>
        </div>
    </div>


</div>  
<br>
<div class="container">
    <button class="btn btn-danger" onclick="btnCancelar()">Cancelar</button>
</div>
<script src = "js/paginacion.js"></script>
<script src="http://c.fzilla.com/1286136086-jquery.js"></script>  
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.js"><\/script>')</script>
<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>
