import { Message } from "element-ui";

//不支持 this.$message.success 写法

const messageEvent = (options) => {
  console.log("options", options);
  const dom = document.querySelectorAll(".el-message")[0];
  if (dom === undefined) Message(options);
};

const typeList = ["success", "error", "info", "warning"];

typeList.forEach((item) => {
  messageEvent[item] = (options) => {
    const element = document.querySelectorAll(".el-message")[0];
    if (element === undefined) Message(options);
  };
});

export const message = messageEvent;
