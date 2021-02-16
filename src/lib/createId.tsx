//生成标签ID的函数,每次调用都会+1
const tagIdName = 'MaxTagId'
let tagId = parseInt(window.localStorage.getItem(tagIdName) || '0');
const createTagId = () => {
  tagId += 1;
  window.localStorage.setItem(tagIdName, tagId.toString());
  return tagId;
};

//生成记账id的函数,每次调用都会+1
const recordIdName = 'MaxRecordId'
let recordId = parseInt(window.localStorage.getItem(recordIdName) || '0');
const createRecordId = () => {
  recordId += 1;
  window.localStorage.setItem(recordIdName, recordId.toString());
  return recordId;
};
export {createTagId,createRecordId};