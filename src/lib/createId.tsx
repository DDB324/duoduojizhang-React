//生成标签ID的函数,每次调用都会+1
let id = 0;
const createId = () => {
  id += 1;
  return id;
};
export {createId};