import React, {useState} from 'react';
import {useTags} from 'hooks/useTags';
import Icon from 'components/Icon';
import {CategorySetting} from './TagsSetting/CategorySetting';
import {Link} from 'react-router-dom';
import {Layout} from '../components/Layout';
import {TagsSettingMain} from './TagsSetting/TagsSettingMain';
import {TagsSettingsFooter} from './TagsSetting/TagsSettingFooter';

//可以查看所有标签和删除标签的页面
type Tag = {
  id: number,
  chart: string,
  name: string
}

const TagsSetting: React.FC = () => {
  //获取tags数据
  const {expenditureTags, incomeTags, removeTag} = useTags();

  //声明category变量
  const [category, setCategory] = useState<'-' | '+'>('-');

  //删除tag
  const confirmRemoveTag = (removeTagId: number) => {
    if (window.confirm('确定要删除当前标签吗?')) {
      removeTag(category, removeTagId);
    }
  };

  //tag的jsx
  const tagItem = (tag: Tag) => {
    return (
      <li key={tag.id}>
        <div>
          <Icon name={tag.chart}/>
        </div>
        <span>{tag.name}</span>
        <button onClick={() => confirmRemoveTag(tag.id)}>删除</button>
      </li>
    );
  };

  return (
    <Layout
      header={
        <CategorySetting category={category}
                         onCategoryChange={(category) => {setCategory(category);}}/>
      }
      main={
        <TagsSettingMain>
          <ul>
            {(category === '-' ? expenditureTags : incomeTags).map(tag => tagItem(tag))}
          </ul>
        </TagsSettingMain>
      }
      footer={
        <TagsSettingsFooter>
          <Link to={category === '-' ? '/addExpenditureTag' : '/addIncomeTag'}>
            <Icon name='add'/>
            {category === '-' ? '添加支出标签' : '添加收入标签'}
          </Link>
        </TagsSettingsFooter>
      }
    />
  );
};

export {TagsSetting};