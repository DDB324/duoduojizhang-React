import {createId} from './lib/createId';

//储存了除了收入支出的其他所有标签
type Tag = {
  id: number,
  chart: string
}
const amusement = ['diannao', 'dianshi', 'dujia', 'fangyu', 'huihua'];
const food = ['bingun', 'dangao', 'hanbao', 'jitui', 'pijiu', 'pisa', 'riliao', 'shutiao', 'yinliao'];
const shopping = ['bao', 'biaoqian', 'bijiben', 'cuxiao', 'daochu', 'dianpu', 'huoche', 'jianshao', 'paixu', 'qianbao'];
const study = ['baozhi', 'biyezheng', 'changge', 'chengji', 'chizi', 'citie', 'dadie', 'dianziqing', 'duihua', 'gupiao'];
const traffic = ['changtuqiche', 'danjia', 'diandongche', 'feiji', 'jiuhuche', 'lunyi', 'shoutuiche', 'xiaochuan', 'xiaoqiche'];

let amusementTags: Tag[] = [];
let foodTags: Tag[] = [];
let shoppingTags: Tag[] = [];
let studyTags: Tag[] = [];
let trafficTags: Tag[] = [];

const iconCategoryMap = {amusement, food, shopping, study, traffic};

const tagCategoryMap = {
  amusement: amusementTags,
  food: foodTags,
  shopping: shoppingTags,
  study: studyTags,
  traffic: trafficTags
};

type Keys = keyof typeof iconCategoryMap
const tagCategoryList: Keys[] = ['amusement', 'food', 'shopping', 'study', 'traffic'];

tagCategoryList.forEach(category => {
  iconCategoryMap[category].forEach(icon => tagCategoryMap[category].push({id: createId(), chart: icon}));
});
//数据格式:amusementTags=[{id:x,chart:'diannao'}...]
export {amusementTags, foodTags, shoppingTags, studyTags, trafficTags};