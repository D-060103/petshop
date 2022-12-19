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
      <a class="text-reset mt-1" href="../Keranjang">
        <i class="fas fa-shopping-cart"></i>
      </a>
      <a class="text-reset mx-3 mt-1" href="../wishlist">
        <i class="fas fa-heart"></i>
      </a>
     </div>

      <!-- Notifications -->

      <div class="dropdown show">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <!-- <img src="/src/assets/tempat tdr.png" width="20" alt=""> -->
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="../Login">Login</a>
          <a class="dropdown-item" href="../Register">Register</a>
        </div>
      </div>
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->


<div class="container-fluid mx-5 my-5">
  <div class="card" style="width: 75em; background: #F1F1F1;">
    <div class="single category" id="kategori">
      <h3 class="side-title">Category</h3>
      <div class="row">
        <div class="col">
          <a href="" title="">Makanan<span class="pull-right"></span></a>
          <div class="image">
            <img src="src/assets/makanan kucing.png" width="150">
          </div>
        </div>
        <div class="col">
          <a href="" title="">Aksesoris<span class="pull-right"></span></a>
          <div class="image">
            <img src="src/assets/pottybells.png" width="150">
          </div>
        </div>
        
        <div class="col">
          <a href="" title="">Baju<span class="pull-right"></span></a>
          <div class="image">
          <img src="src/assets/baju.png" width="150">
          </div>
        </div>

        <div class="col">
          <a href="" title="">Obat<span class="pull-right"></span></a>
          <div class="image">
            <img src="src/assets/obat kucing.png" width="150">
          </div>
        </div>

        <div class="col">
          <a href="" title="">Mainan<span class="pull-right"></span></a>
          <div class="image">
            <img src="src/assets/mainan.png" width="150">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




<section class="Home" id="home">
    <div class="row">
    <div class="col">
    <div class="container-fluid mx-5 my-5">
      <h3 class="side-title">Product</h3>
      <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem; background: #F1F1F1;">
            <img class="card-img-top" src="src/assets/tempat tdr.png" width="150">
            <div class="card-body">
              <h5 class="card-title">Tempat tidur kucing</h5>
              <p class="card-text">Rp80.000</p>
              <a href="../TempatTDR" class="btn btn-primary">Buy</a>
              <a class="text-reset mx-5 mt-5" href="../Wishlist">
                <i class="like btn btn-default btn-danger" style="background: #;" type="button"><span class="fa fa-heart"></span></i>
              </a>
            </div>  
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem; background: #F1F1F1;">
            <img class="card-img-top" src="src/assets/obat kucing.png" width="150">
            <div class="card-body">
              <h5 class="card-title">Catystress</h5>
              <p class="card-text">Rp57.000</p>
              <a href="../CattyStress" class="btn btn-primary">Buy</a>
              <a class="text-reset mx-5 mt-1" href="../Wishlist">
                <i class="like btn btn-default btn-danger" style="background: #;" type="button"><span class="fa fa-heart"></span></i>
              </a>
            </div>  
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem; background: #F1F1F1;">
            <img class="card-img-top" src="src/assets/makanan kucing.png" width="150">
            <div class="card-body">
              <h5 class="card-title">Whiskas</h5>
              <p class="card-text">Rp20.000</p>
              <a href="../Makanan" class="btn btn-primary">Buy</a>
              <a class="text-reset mx-5 mt-5" href="../Wishlist">
                <i class="like btn btn-default btn-danger" style="background: #;" type="button"><span class="fa fa-heart"></span></i>
              </a>
            </div>  
          </div>
        </div>
      </div>
    </div>
    </div>
</div>
</section>

<selection class="layanan" id="layanan">
  <div class="container-fluid">
    <div class="row justify-content-lg-center">
      <div class="col col-lg-5">
          <div class="layanan"> Layanan <span> Kami </span></div>
          <h1 class="side-title" style="font-size: 1rem">List Produk</h1>
          <h1 class="side-title" style="font-size: 1rem">Status Pemesanan</h1>
          <h1 class="side-title" style="font-size: 1rem">Keranjang</h1>
          <h1 class="side-title" style="font-size: 1rem">Akun Saya</h1>
      </div>
      <div class="col col-lg-2">
        <div class="layanan"> <span> Support </span></div>
        <h1 class="side-title" style="font-size: 1rem">Tentang</h1>
        <h1 class="side-title" style="font-size: 1rem">Kontak Kami</h1>
      </div>
    </div>
  </div>
</selection>

<selection>
<div class="container-fluid" >
<div class="row" style="display:grid; justify-content:center;">
        <div class="col">
          <h3 class="side-title" style="font-size: 1rem;">E-commerce penyedia kebutuhan hewan peliharaan anda</h3>
          <div class="share">
        <a href="#" class="btn" > <i class="fab fa-facebook-f"></i> facebook </a>
        <a href="#" class="btn"> <i class="fab fa-twitter"></i> twitter </a>
        <a href="#" class="btn"> <i class="fab fa-instagram"></i> instagram </a>
        </div>
        </div>
          </div>
        </div>
      </selection>

      <selection>
        <div class="credit text-center mt-5"> by <span> Petshop </span> | 2022
      </div>
    </selection>
</template>