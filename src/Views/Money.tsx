import React, {useEffect, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {TagsSection} from './Money/TagsSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useTags} from '../hooks/useTags';
import {useRecords} from '../hooks/useRecords';
import {useGoPage} from '../lib/goPage';
import {today} from 'lib/date';
import {Layout} from '../components/Layout';

type Category = '-' | '+';
const defaultFormData = () => ({
  category: '-' as Category,
  selectedTagId: [] as number[],
  note: '',
  amount: 0,
  createAt: today()
});

let onSubmit = 0;

const Money = () => {
  //获取的tags
  const {incomeTags, expenditureTags} = useTags();

  //储存数据
  const [selected, setSelected] = useState(defaultFormData());

  //接受子组件的参数来修改数据
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  //onOk函数,设置开关为1
  const onOk = () => {
    onSubmit = 1;
  };

  //componentDidUpdate,当开关为1执行函数
  useEffect(() => {
    if (onSubmit === 1) {
      submit();
      onSubmit = 0;
    }
  });

  //点击完成按钮执行的函数
  const {addRecord} = useRecords();
  const {goTo} = useGoPage();
  const submit = () => {
    addRecord(selected);
    setTimeout(() => goTo('/'));
  };

  return (
    <Layout
      header={<CategorySection category={selected.category}
                               onCategoryChange={(category, selectedTagId) =>
                                 onChange({category: category, selectedTagId: selectedTagId})}/>
      }
      main={<TagsSection selectedTagId={selected.selectedTagId}
                         onTagChange={(selectedTagId: number[]) => onChange({selectedTagId})}
                         tags={selected.category === '-' ? expenditureTags : incomeTags}/>
      }
      footer={
        selected.selectedTagId.length > 0 &&
        <NumberPadSection note={selected.note}
                          onNoteChange={(note: string) => onChange({note})}
                          amount={selected.amount}
                          onAmountChange={(amount) => onChange({amount})}
                          selectedTagId={selected.selectedTagId}
                          onOk={onOk}
                          onDateChange={(createAt: string) => onChange({createAt})}
                          date={selected.createAt}/>

      }
    />
  );
};

export {Money};
