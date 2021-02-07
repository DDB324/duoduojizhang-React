import React from 'react';
import {TopBar} from './TagsSetting/CategorySetting/TopBar';

//新增标签的页面
const AddTag: React.FC = () => {
  return (
    <TopBar leftChart='left' leftName='返回'
            centerName='添加支出类别'
            rightChart='' rightName='完成'/>
  );
};

export {AddTag};