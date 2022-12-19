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


<div class="cart-wrap">
		<div class="container">
	        <div class="row">
			    <div class="col-md-12">
			        <div class="main-heading mb-10">My wishlist</div>
			        <div class="table-wishlist">
				        <table cellpadding="0" cellspacing="0" border:0 width="100%">
				        	<thead>
					        	<tr>
					        		<th width="45%">Product Name</th>
					        		<th width="15%">Unit Price</th>
					        		<th width="15%">Stock Status</th>
					        		<th width="15%"></th>
					        		<th width="10%"></th>
					        	</tr>
					        </thead>
					        <tbody>
					        	<tr>
					        		<td width="45%">
					        			<div class="display-flex align-center">
		                                    <div class="img-product">
		                                        <img src="src/assets/Tempat tdr anjing.png" alt="" class="mCS_img_loaded">
		                                    </div>
		                                    <div class="name-product">
		                                        Tempat Tidur Anjing
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" class="price">Rp90.000</td>
					        		<td width="15%"><span class="in-stock-box">In Stock</span></td>
					        		<td width="15%"><button class="round-black-btn small-btn">Add to Cart</button></td>
					        		<td width="10%" class="text-center"><a href="#" class="trash-icon"><i class="far fa-trash-alt"></i></a></td>
					        	</tr>
					        	<tr>
					        		<td width="45%">
					        			<div class="display-flex align-center">
		                                    <div class="img-product">
		                                        <img src="src/assets/Tempat tdr anjing.png" alt="" class="mCS_img_loaded">
		                                    </div>
		                                    <div class="name-product">
		                                        Tempat Tidur Anjing
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" class="price">Rp90.000</td>
					        		<td width="15%"><span class="in-stock-box">In Stock</span></td>
					        		<td width="15%"><button class="round-black-btn small-btn">Add to Cart</button></td>
					        		<td width="10%" class="text-center"><a href="#" class="trash-icon"><i class="far fa-trash-alt"></i></a></td>
					        	</tr>
					        	<tr>
					        		<td width="45%">
					        			<div class="display-flex align-center">
		                                    <div class="img-product">
		                                        <img src="src/assets/Tempat tdr anjing.png">
		                                    </div>
		                                    <div class="name-product">
		                                        Tempat Tidur Anjing
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" class="price">Rp90.000</td>
					        		<td width="15%"><span class="in-stock-box">In Stock</span></td>
					        		<td width="15%"><button class="round-black-btn small-btn">Add to Cart</button></td>
					        		<td width="10%" class="text-center"><a href="#" class="trash-icon"><i class="far fa-trash-alt"></i></a></td>
					        	</tr>
				        	</tbody>
				        </table>
				    </div>
			    </div>
			</div>
		</div>
	</div>
	
</template>