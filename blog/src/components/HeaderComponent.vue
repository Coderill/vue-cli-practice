<template>
    <!-- Header -->
    <header id="header">
        <!-- Logo -->
        <div class="logo">
            <router-link to="/" aria-label="Ancor for logo. You can back to homepage by clicking here">
                <img src="@/assets/image/logo.svg" class="img-fluid text-center" alt="logo">
            </router-link>
        </div>
        <!-- End of the logo -->

        <!-- Nav -->
        <nav class="navbar navbar-expand-lg">
           <div class="container justify-content-lg-center">
                <!-- Navbar toggler -->
                <span class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><i class="icon ion-md-menu"></i></span>
                <!-- End of the navbar toggler -->

                <div class="collapse navbar-collapse flex-lg-grow-0 order-2 order-lg-1" id="navbarNav">

                    <!-- Navbar Menu-->
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/podcast" class="nav-link">Podcast</router-link>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#" aria-label="">Pricing</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#" aria-label="" >Disabled</a>
                        </li>
                    </ul>
                    <!-- End of the navbar menu -->

                </div>

                <!-- Navbar right -->
                <div class="nav-right d-flex align-items-center order-1 order-lg-2">

                    <!-- Social -->
                    <div class="social mr-3">
                        <a href="#"><i class="icon ion-logo-github" aria-label="Github"></i></a>
                        <a href="#"><i class="icon ion-logo-twitter" aria-label="Twitter"></i></a>
                    </div>
                    <!-- End of the social -->

                    <!-- Search -->
                    <div class="search">
                        <div class="input-group">
                            <input type="text" class="form-control form-control-sm" placeholder="Search" aria-label="Serarch for article">
                            <div class="input-group-append">
                                <button class="btn btn-sm" type="button" id="button-addon2" name="btn" aria-label="Search button"><i class="icon ion-md-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <!-- Search -->
                </div>
                <!-- End of the navbar right -->
           </div>
        </nav>
        <!-- End of the nav -->
    </header>
    <!-- End of the header-->
</template>
