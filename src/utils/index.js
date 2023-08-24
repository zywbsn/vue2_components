/**
 * toRgb 十六进制颜色转 rgb 传第二个参数 opacity 时 转为 rgba
 * 例如 toRgb("#fff"); 返回值为 rgb(255, 255, 255);
 * 例如 toRgb("#ffffff",".1"); 返回值为 rgb(255, 255, 255,.1);
 */
export function toRgb(color, opacity) {
  let str = color.toLowerCase().replace(/\#/g, "");
  let len = str.length;
  if (len == 3) {
    let t = "";
    for (let i = 0; i < len; i++) {
      t += str.slice(i, i + 1).concat(str.slice(i, i + 1));
    }
    str = t;
  }
  let arr = [];
  for (let i = 0; i < 6; i = i + 2) {
    let s = str.slice(i, i + 2);
    arr.push(parseInt("0x" + s));
  }
  if (opacity) {
    return "rgba(" + arr.join(",") + "," + opacity + ");";
  }
  return "rgb(" + arr.join(",") + ");";
}
