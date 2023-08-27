<template>
  <div class="w-full text-center">
    <h1>单行（完成）</h1>
    <div class="text-white p-8">
      <ul class="flex gap-4 text-3xl bg-gray-500  relative rounded-lg">
        <li v-for="(item, index) in list" :key="index" @mouseenter="setCurrent(index)"
          class="w-full h-16 relative cursor-pointer">
          <div class="absolute z-20 inset-0 grid place-content-center text-green-200">{{ item }}</div>
        </li>
        <div :style="'width:' + 100 / list.length + '%;transform: translateX(' + current * 100 + '%);'"
          class="absolute inset-0 z-10 transition-all duration-1000 rounded-lg after:absolute after:inset-2 after:bg-pink-50 after:rounded-lg">
        </div>
      </ul>
    </div>
    <h1>多行（完成）</h1>
    <div class="container mx-auto p-8">
      <ul class="relative grid grid-cols-1 md:grid-cols-5 gap-4">
        <item @setHovered="setHovered" @setLeft="setLeft" @setTop="setTop" @setWidth="setWidth" @setHeight="setHeight"
          v-for=" item in 10" :key="item" :item="item" />
        <div
          class="pointer-events-none absolute transition-all duration-1000 after:absolute after:-inset-2 after:border-4 after:rounded-lg"
          :style="styleComputed">
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import Item from "./components/Item/index";
export default {
  components: { Item },
  data() {
    return {
      /** 单行 */
      list: ["HTML", "CSS", "JavaScript", "Vue", "React", "Angular"],
      current: 0,
      /** end */

      /** 多行 */
      hovered: false,
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      /** end */
    }
  },
  computed: {
    /** 多行 */
    //设置边框显示的位置 宽度 高度
    styleComputed() {
      return { transform: this.hovered ? "scale(1)" : "scale(0)", left: this.left + "px", top: this.top + "px", width: this.width + "px", height: this.height + "px" };
    }
    /** end */
  },
  methods: {
    /** 单行 */
    setCurrent(val) {
      this.current = val;
    },
    /** end */

    /** 多行 */
    setHovered(val) {
      this.hovered = val;
    },
    setLeft(val) {
      this.left = val;
    },
    setTop(val) {
      this.top = val;
    },
    setWidth(val) {
      this.width = val;
    },
    setHeight(val) {
      this.height = val;
    },
    /** end */
  }
}
</script>

<style lang="scss" scoped></style>