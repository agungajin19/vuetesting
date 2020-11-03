<template>
  <div class="products-container">
    <detail
      v-if="$route.params.id"
      :title="selectedItemToBeShown.productName"
      :description="selectedItemToBeShown.description"
      :imageUrl="selectedItemToBeShown.imageProductUrl"
    />
    <div class="product-list">
      <router-link
        v-for="product in products"
        :key="product.id"
        :to="{ name: 'Product', params: { id: product.id } }"
        class="product"
      >
        <div class="card">
          <div class="product-image">
            <figure>
              <img :src="product.imageProductUrl" alt="" srcset="" />
            </figure>
          </div>
          <div class="product-copywriting">
            <h3>{{ product.productName }}</h3>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Detail from "./Detail.vue";
export default {
  name: "Home",
  components: {
    detail: Detail
  },
  data() {
    return {
      products: [
        {
          id: "0",
          productName: "T-Shirt",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageProductUrl:
            "https://e7.pngegg.com/pngimages/140/752/png-clipart-blue-crew-neck-t-shirt-art-t-shirt-navy-blue-polo-shirt-shirt-tshirt-blue.png",
          colors: ["blue", "grey", "white"]
        },
        {
          id: "1",
          productName: "Trouser",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          imageProductUrl:
            "https://www.selected.com/dw/image/v2/ABBT_PRD/on/demandware.static/-/Sites-pim-catalog/default/dw344f7cc3/pim-static/large/16048097_Camel_003_ProductLarge.jpg?sw=685",
          colors: ["camel", "phantom", "sapphire"]
        },
        {
          id: "2",
          productName: "Flanel",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          imageProductUrl:
            "https://d15udtvdbbfasl.cloudfront.net/catalog/product/large_image/08_431484.jpg",
          colors: ["blue", "grey"]
        }
      ]
    };
  },
  computed: {
    selectedItemToBeShown() {
      return (
        this.products.find(product => product.id === this.$route.params.id) ||
        {}
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.products-container {
  clear: both;

  .product-list {
    display: flex;
    flex-direction: row;
    clear: both;

    .product {
      max-width: 30%;
      h3 {
        text-align: center;
      }
    }
  }
}
</style>

<style lang="scss">
.products-container {
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
