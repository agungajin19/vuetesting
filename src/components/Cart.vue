<template>
  <div class="cart">
    <router-link :to="'/closing'">
      <img src="https://www.flaticon.com/svg/static/icons/svg/34/34568.svg" />
      <span>{{ totalItems }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    totalItems: {
      required: true,
      type: Number,
      default: () => 0
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  float: right;
  a {
    color: inherit;
  }
}

.cart span {
  display: inline-block;
}

.cart img {
  vertical-align: top;
  max-width: 35px;
}
</style>
