<template>
    <div>
        <form @submit.prevent="addproduct">
            <div>
                <p>
                    <input 
                    v-model="product.nama"
                    class="input" 
                    type="text" 
                    placeholder="Name product">
                </p>
                <p>
                    <input 
              v-model="product.deskripsi"
              class="input" 
              type="text" 
              placeholder="Description product">
          </p>
          <p>
              <input 
              v-model="product.harga"
              class="input" 
              type="text" 
              placeholder="Product Price">
            </p>
            <p>
                <button 
            :disabled="!product.nama">
            Add Product
        </button>
        </p>
        <button class="button is-light" @click="$router.go(-1)">Back</button>
    </div>
</form>
</div>
</template>
    
<script>
import { setDoc, doc, collection, getDoc } from "firebase/firestore";
import db from "../firebase/firebase";
export default {
    data() {
      return {
        product: {
          nama: "",
          deskripsi: "",
          harga: "",
        }
      };
    },
    mounted() {
      if (this.$route.name === "product_edit") {
        (async () => {
          const tempProduct = await getDoc(doc(db, "products", this.$route.params.id));
          this.product = tempProduct.data();
        })();
      }
    },
    methods: {
      addproduct() {
        (async () => {
          await setDoc(doc(collection(db, "products")), this.product);
        })();
        console.log("halo product")
      },

    },
  };


</script>