<template>
  <div>
    <div class="box">home</div>
    <button @click="toPath">to</button>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    toPath() {
      console.log("to path")
      this.$router.push("/w_comps/resource_selector")
      console.log("to path end")

    }
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: pink;
}

</style>
