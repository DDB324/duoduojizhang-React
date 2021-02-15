import React, {ChangeEventHandler, useState} from 'react';
import {WrapperNumberPad} from './NumberPadSection/WrapperNumberPad';
import {Input} from '../../components/Input';
import {useTags} from '../../hooks/useTags';
import {generateOutput} from './NumberPadSection/generateOutput';

//显示记账页面的数字面板的内容
type Props = {
  note: string
  amount: number
  onNoteChange: (note: string) => void
  onAmountChange: (amount: number) => void
  selectedTagId: number[]
  onOk: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
  //声明外部数据
  const {note, selectedTagId, onOk, onAmountChange} = props;

  //找到selectedTagId对应的图表
  const {findTag} = useTags();
  const selectedTagChart = findTag(selectedTagId[0])?.chart || 'repase';

  //onChange函数
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onNoteChange(e.target.value);
  };

  //数字面板计算后输出的内容,总长度不能超过16
  const [output, _setOutput] = useState(props.amount.toString());
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = parseFloat(output.slice(0, 16)).toString();
    }
    _setOutput(output);
  };

  //右下角按钮显示的内容
  const [complete, setComplete] = useState<'完成' | '='>('完成');

  //对输入的内容进行处理
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).innerHTML;
    if (text === null) return;
    if (text === '完成') {
      onAmountChange(parseFloat(output));
      onOk();
    }
    if (text === '日期') {console.log('日期');}

    //使用封装的计算逻辑
    if ('1234567890.+-='.split('').concat(['删除']).indexOf(text) >= 0) {
      const {computeOutput, computeComplete} = generateOutput(text, output);
      setOutput(computeOutput);
      computeComplete && setComplete(computeComplete);
    }

  };
  return (
    <WrapperNumberPad>
      <div className='NoteAndOutput'>
        <Input iconName={selectedTagChart} spanContent='备注:' type='text'
               placeholder='点击写备注...' value={note}
               onChange={onChange}/>
        <div className='output'>
          <span>{output}</span>
        </div>
      </div>
      <div className='pad' onClick={onClickButtonWrapper}>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>日期</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>删除</button>
        <button className='ok'>{complete}</button>
      </div>
    </WrapperNumberPad>
  );
};
export {NumberPadSection};