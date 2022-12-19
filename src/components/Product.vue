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
          <a class="nav-link" href="../Product">Product</a>
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
        <li class="nav-item">
          <router-link class="nav-link" to="/product_create">Create Product</router-link>
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

<section class="Home" id="home">
    <div class="row">
    <div class="col">
    <div class="container-fluid mx-5 my-5">
      <h3 class="side-title">Product</h3>
      <div class="row">
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card" style="width: 18rem; background: #F1F1F1;">
            <img class="card-img-top" src="src/assets/tempat tdr.png" width="150">
            <div class="card-body">
              <h5 class="card-title">{{product.nama}}</h5>
              <p class="card-text">Rp{{product.harga}}</p>
              <a href="../TempatTDR" class="btn btn-primary">Buy</a>
              <a class="text-reset mx-5 mt-5" href="../Wishlist">
                <i class="like btn btn-default btn-danger" style="background: #;" type="button"><span class="fa fa-heart"></span></i>
              </a>
              <button @click="
                          $router.push({ 
                          name: 'product_edit', 
                          params: { id: product.id } 
                          })">Edit Product</button>
              <button @click="deleteProduct(product.id)">Delete</button>
            </div>  
          </div>
        </div>
        <!-- <div class="col">
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
              <a href="Makanan" class="btn btn-primary">Buy</a>
              <a class="text-reset mx-5 mt-5" href="../Wishlist">
                <i class="like btn btn-default btn-danger" style="background: #;" type="button"><span class="fa fa-heart"></span></i>
              </a>
            </div>  
          </div>
        </div> -->
      </div>
    </div>
    </div>
    
</div>
</section>
</template>


<script>
  // import { v4 as uuidv4 } from 'uuid'
  import { collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc, getDocs } from 'firebase/firestore'
  import db from "../firebase/firebase";
  
  export default {
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.getproducts2();
  },
  methods: {
    getproducts2() {
      onSnapshot(collection(db, "products"), (querySnapshot) => {
        this.products = [];
        querySnapshot.forEach((doc) => {
          const prods ={
            id: doc.id,
            nama: doc.data().nama,
            deskripsi: doc.data().deskripsi,
            harga: doc.data().harga
          }
          
          // this.products.push({ id: doc.id, ...doc.data() });
          this.products.push(prods);
          // fbproducts.push(this.products)
        });
        // this.products.value = fbproducts
      });
      console.log(this.products);
    },

    deleteProduct(productID) {
      deleteDoc(doc(collection(db, "products"), productID));
      console.log('deleteproduct:', productID)
    },
  },
};
</script>