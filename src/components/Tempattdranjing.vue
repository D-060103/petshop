<template>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="src/assets/Petshop.png"
          height="50"
          alt="Petshop Logo"
          loading="lazy"
        />
      </a>
      
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="hha">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../product">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../DogsItem">Dogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../CatsItem">Cats</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://wa.me/6281262333558">Contact</a>
        </li>

      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="d-flex align-items-center mx-5 px-5">
      <!-- Icon -->
      
      
      <div class="input-group">
        <div id="search-autocomplete" class="form-outline">
           <input type="search" id="form1" class="form-control" />
             <label class="form-label" for="form1">Search</label>
       </div>
       <button type="button" class="btn btn-primary mx-3">
          <i class="fas fa-search"></i>
      </button>
      <a class="text-reset mt-1" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>
      <a class="text-reset mx-3 mt-1" href="#">
        <i class="fas fa-heart"></i>
      </a>
     </div>

      <!-- Notifications -->

      <div class="dropdown show">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <!-- <img src="/src/assets/tempat tdr.png" width="20" alt=""> -->
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">Login</a>
          <a class="dropdown-item" href="#">Register</a>
        </div>
      </div>
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->

  <div class="container mx-6 my-5">
  <div class="card">
    <div class="container-fliud ">
      <div class="wrapper row">
        <div class="preview col-md-6" style="background: #FCFFE7;">
          
          <div class="preview-pic tab-content">
            <div class="tab-pane active" id="pic-1"><img src="src/assets/Tempat tdr anjing.png" /></div>
            <div class="tab-pane" id="pic-2"><img src="src/assets/Tempat tdr anjing.png" /></div>
            <div class="tab-pane" id="pic-3"><img src="src/assets/Tempat tdr anjing.png" /></div>
            <div class="tab-pane" id="pic-4"><img src="src/assets/Tempat tdr anjing.png" /></div>
          </div>
          <ul class="preview-thumbnail nav nav-tabs" >
            <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="src/assets/Tempat tdr anjing.png" width="120"/></a></li>
            <li><a data-target="#pic-2" data-toggle="tab"><img src="src/assets/Tempat tdr anjing.png" width="120" /></a></li>
            <li><a data-target="#pic-3" data-toggle="tab"><img src="src/assets/Tempat tdr anjing.png" width="120" /></a></li>
            <li><a data-target="#pic-4" data-toggle="tab"><img src="src/assets/Tempat tdr anjing.png" width="120"/></a></li>
            <li><a data-target="#pic-5" data-toggle="tab"><img src="src/assets/Tempat tdr anjing.png" width="120"/></a></li>
          </ul>
          
        </div>
        <div class="details col-md-6">
          <h3 class="product-title">Tempat Tidur Anjing</h3>
          <div class="rating mt-3">
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <span class="review-no">41 reviews</span>
          </div>
          <p class="product-description mt-5">Bahan bulunya sangat nyaman, Kualitas premium. Kenapa nyaman? Ergonomi kasur kami sudah disesuaikan agar anabul NYAMAN: posisi tidak terlalu tinggi agar anabul nyaman naik turun.
Isi kasur PAS, tidak terlalu keras, tidak terlalu lembek.</p>
          <h4 class="price">Harga: <span>Rp80.000</span></h4>

          <h5 class="sizes mt-3">sizes:
            <span class="size" data-toggle="tooltip" title="small">Diameter: 31 cm, </span>
            <span class="size" data-toggle="tooltip" title="medium">Ketinggian: 13  cm </span>
          </h5>
      
          <div class="action mt-5">
            <button onclik="" class="add-to-cart btn btn-default btn-primary" type="button">add to cart</button>
            <button class="like btn btn-default btn-danger" type="button"><span class="fa fa-heart"></span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>