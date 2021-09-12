<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/a69a612d6a.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/index.css">
    <title>Potfolio</title>
</head>

<body>
    <div class="navbar">
        <nav class="navbar navbar-light bg-light " id="sidebar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                </a>
                <button class="navbar-toggler button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                            <div class="logo">
                                <img class="img-logo" src="./image/logo_size.jpg" alt="logo">
                            </div>
                        </h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="active" href="index.php">DASHBOARD</a>
                            </li>
                            <li class="nav-item">
                                <a href="pageContact.php">CONTACT</a>
                            </li>
                            <li class="nav-item">
                                <a href="aboutpage.php">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a href="cvpage.php">CV</a>
                            </li>




                            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>

                        </ul>

                    </div>
                </div>
            </div>
        </nav>


        <div class="logo">
            <img class="img-logo" src="./image/logo_size.jpg" alt="logo">
        </div>
        <ul id="nav-links">
            <li><a class="active" href="index.php">DASHBOARD</a></li>
            <li><a href="pageContact.php">CONTACT</a></li>
            <li> <a href="aboutpage.php">ABOUT</a></li>
            <li> <a href="cvpage.php">CV</a></li>

        </ul>


    </div>