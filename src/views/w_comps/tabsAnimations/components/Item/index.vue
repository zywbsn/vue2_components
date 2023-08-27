<template>
  <li ref="liRef" class="cursor-pointer rounded-lg w-full p-4 h-full bg-pink-200 object-cover" @mouseover="mouserOver()"
    @mouseout="mouserOut()">
    item {{ item }}
  </li>
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
    //鼠标移入 设置边框位置 宽度 高度
    mouserOver() {
      this.$emit("setHovered", true);
      const { offsetLeft, offsetTop, clientWidth, clientHeight } = this.$refs.liRef;
      this.$emit("setLeft", offsetLeft);
      this.$emit("setTop", offsetTop);
      this.$emit("setWidth", clientWidth);
      this.$emit("setHeight", clientHeight);
    },
    //鼠标移出隐藏边框 记录当前位置
    mouserOut() {
      this.$emit("setHovered", false);
      const { offsetLeft, offsetTop } = this.$refs.liRef;
      this.$emit("setLeft", offsetLeft);
      this.$emit("setTop", offsetTop);
    },
  }
}
</script>

<style lang="scss" scoped></style>