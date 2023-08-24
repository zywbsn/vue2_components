<template>
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div class="p-4 rounded border text-center" :style="'background:' + color.result">
        <h3 class="mb-2">十六进制颜色转 rgb 或 rgba</h3>
        <el-input v-model="color.color" placeholder="请输入十六进制颜色"></el-input>
        <div class="mb-2">颜色格式 #fff 或者 #ffffff</div>
        <el-input v-model="color.opacity" class="mb-2" placeholder="请输入透明度"></el-input>
        <div class="mb-2">结果：{{ color.result }}</div>
        <el-button @click="changeRgb()" type="primary" size="mini">转换</el-button>
      </div>
      <div class="p-4 rounded border text-center">
        <h3 class="mb-2">自定义指令 - 防抖</h3>
        <!-- <div class="mb-2">鼠标点击次数：{{ sub.handleCount }}</div> -->
        <div class="mb-2">submitForm 执行次数：{{ sub.submitFormCount }}</div>
        <el-button @click="submitForm" v-antiShake type="primary" size="mini">submit</el-button>
      </div>
      <div class="p-4 rounded border text-center">
        item
      </div>
      <div class="p-4 rounded border text-center">Item 1</div>
      <div class="p-4 rounded border text-center">
        <h3 class="mb-2">el-message 连续出现造成滚屏问题</h3>
        <el-button class="mb-2" @click="$message.success('el-message')" type="primary" size="mini">el-message</el-button>
        <el-button class="mb-2" @click="onMsg" type="primary" size="mini">更改后
          el-message</el-button>
      </div>
      <div class="p-4 rounded border text-center">Item 1</div>
    </div>
  </div>
</template>

<script>
import { toRgb } from "@/utils/index";
export default {
  name: "fn_library",
  data() {
    return {
      //颜色转换数据
      color: {
        color: "",//十六进制颜色
        opacity: "",//透明度
        result: ""//返回结果
      },
      //表单提交防抖数据
      sub: {
        submitFormCount: 0,//表单提交次数
        handleCount: 0//鼠标按下次数
      }
    };
  },
  methods: {
    //十六进制颜色转 rgb 或 rgba
    changeRgb() {
      console.log(this.color);
      const { color, opacity } = this.color;
      this.color.result = toRgb(color, opacity);
    },
    //提交表单防抖测试
    submitForm() {
      this.sub.submitFormCount++;
    },
    onMsg() {
      this.$msg({
        type: "success",
        message: '更改后 el-message'
      })
    }
  }
}
</script>

<style scoped></style>
