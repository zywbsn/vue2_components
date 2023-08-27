<template>
  <div class="w-full text-center">
    <h1>单行</h1>
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
    <h1>支持多行（未完成）</h1>
    <div class="container mx-auto p-8">
      <ul class="relative grid grid-cols-1 md:grid-cols-5 gap-4">
        <item @setHovered="setHovered" @setLeft="setLeft" @setTop="setTop" @setWidth="setWidth" @setHeight="setHeight"
          v-for=" item in 10" :key="item" :item="item" />
        <div
          class="bg-black pointer-events-none absolute transition-all duration-700 after:absolute after:-inset-2 after:border-4 after:rounded-lg"
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
      list: ["HTML", "CSS", "JavaScript", "Vue", "React", "Angular"],
      current: 0,
      hovered: false,
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    }
  },
  computed: {
    styleComputed() {
      return { left: this.left, top: this.top, width: this.width, height: this.height };
    }
  },
  methods: {
    setCurrent(val) {
      console.log("setCurrent");
      this.current = val;
    },
    setHovered(val) {
      console.log("val", val);
      this.hovered = val;
    },
    setLeft(val) {
      console.log("val", val);
      this.left = val;
    },
    setTop(val) {
      console.log("val", val);
      this.top = val;
    },
    setWidth(val) {
      console.log("val", val);
      this.width = val;
    },
    setHeight(val) {
      console.log("val", val);
      this.height = val;
    },
  }
}
</script>

<style lang="scss" scoped></style>