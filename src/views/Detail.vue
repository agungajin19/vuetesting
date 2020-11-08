<template>
  <div>
    <section class="image-container">
      <figure>
        <img :src="imageUrl" alt="" srcset="" class="image" />
      </figure>
    </section>
    <section class="copywriting-container">
      <h1>{{ title }}</h1>
      <article class="description">
        <p>{{ description }}</p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    title: {
      type: String,
      default: () => "",
      required: true
    },
    description: {
      default: () => ""
    },
    imageUrl: {
      type: String,
      default: () => "",
      required: true
    }
  },
  beforeCreate() {
    console.group("this is detail page");
    console.log("beforeCreate");
    this.testingVariable = "a string";
    console.groupEnd();
  },
  created() {
    console.group("this is detail page");
    console.log("created");
    console.groupEnd();
  },
  beforeMount() {
    console.group("this is detail page");
    console.log("beforeMount");
    console.groupEnd();
  },
  mounted() {
    console.group("this is detail page");
    console.log("mounted");
    console.groupEnd();
  },
  beforeUpdate() {
    console.group("this is detail page");
    console.log("beforeUpdate");
    console.groupEnd();
  },
  updated() {
    console.group("this is detail page");
    console.log("updated");
    console.groupEnd();
  },
  beforeDestroy() {
    console.group("this is detail page");
    console.log("beforeDestroy");
    console.groupEnd();
  },
  destroyed() {
    console.group("this is detail page");
    console.log("destroyed");
    console.groupEnd();
  }
};
</script>

<style scoped>
.image-container {
  display: inline-block;
  max-width: 50%;
}

.copywriting-container {
  float: left;
  max-width: 50%;
}

.copywriting-container .description {
  margin-bottom: 100px;
}
</style>
