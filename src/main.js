import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./index.css";
import antiShake from "@/directive/antiShake"; //引入防抖自定义指令
import { message } from "@/utils/message";

Vue.use(ElementUI);
Vue.use(antiShake); //使用防抖自定义指令

//Vue.prototype.$message = message; 代替 element el-message 不支持 this.$message.success 写法
Vue.prototype.$msg = message;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
