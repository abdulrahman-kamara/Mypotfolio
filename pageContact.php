<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/pageContact.css">
    <script src="https://kit.fontawesome.com/a69a612d6a.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./assets/index.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Potfolio</title>
</head>

<body>

    <?php
    require "./components/header.php";
    ?>


    <div id="container-body">
        <div class="main">

            <img class="img-banner" src="./image/logo_size.jpg" alt="logo">

            <h1><span>Kamara Abdulrahman </span></h1>
            <p>Développeur Web et Web Mobile</p>
        </div>
        <h2><span>WHERE YOU CAN FIND ME</span></h2>

        <div id="aside">

            <ul class="call-me-baby">
                <li><i class="fas fa-phone-alt fa-1g fa-3x"></i></li>
                <li><span class="span">CALL ME</span> </li>
                <li>
                    +336.72.78.05.28
                </li>
            </ul>

            <ul class="mail-me-baby">
                <li><i class="far fa-envelope fa-3g fa-3x"></i></li>
                <li><span class="span">Email Address</span> </li>
                <li>rahmankamara@icloud.com</li>
                <li>abdulrahman.kamara@laplateforme.io
                </li>
            </ul>

            <ul class="link-me-baby">
                <li> <i class="fab fa-linkedin fa-4g fa-3x "></i></li>
                <li><span class="span">Linkedin</span></li>
                <li>kamara-abdulrahman-906438200/</li>

            </ul>




        </div>
        <div id="map"></div>
    </div>





    <?php
    require "./components/footer.php";
    ?>









    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXUiZwhfegfOQxEfXWDaWTZS8NJqF_RhA&callback=initMap"></script>
    <script src="index.js"></script>
</body>

</html>