//生成标签ID的函数,每次调用都会+1
let id = parseInt(window.localStorage.getItem('MaxId') || '0');
const createId = () => {
  id += 1;
  window.localStorage.setItem('MaxId', id.toString());
  return id;
};
export {createId};