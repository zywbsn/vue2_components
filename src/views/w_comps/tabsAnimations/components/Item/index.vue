<template>
  <div>
    <li ref="liRef" class="cursor-pointer p-4 rounded border text-center bg-pink-100 hover:border-gray-800"
      @mouseenter="mouserOver">item {{ item
      }}</li>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Number,
      default: 0
    },
    hovered: {
      type: Boolean,
      default: false
    },
    left: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  methods: {
    mouserOver() {
      console.log("this.$refs===", this.$refs.liRef);
      this.$emit("setHovered", true);
      const { offsetLeft, offsetTop, clientWidth, clientHeight } = this.$refs.liRef;
      console.log("offsetLeft", offsetLeft);

      this.$emit("setLeft", offsetLeft);
      this.$emit("setTop", offsetTop);
      this.$emit("setWidth", clientWidth);
      this.$emit("setHeight", clientHeight);
    },
    mouserOut() {
      console.log("this.$refs---", this.$refs.liRef);
      this.$emit("setHovered", false);
      const { offsetLeft, offsetTop } = this.$refs.liRef;
      this.$emit("setLeft", offsetLeft);
      this.$emit("setTop", offsetTop);
    },
  }
}
</script>

<style lang="scss" scoped></style>