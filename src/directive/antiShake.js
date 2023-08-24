import Vue from "vue";

//防抖自定指令
export default () => {
  Vue.directive("antiShake", {
    inserted(el, binding) {
      el.addEventListener("click", () => {
        el.classList.add("is-disabled");
        el.disabled = true;
        setTimeout(() => {
          el.disabled = false;
          el.classList.remove("is-disabled");
        }, binding.value || 2000); //默认 2000ms
      });
    },
  });
};
