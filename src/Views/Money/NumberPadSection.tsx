import React, {ChangeEventHandler, useRef, useState} from 'react';
import {WrapperNumberPad} from './NumberPadSection/WrapperNumberPad';
import {Input} from 'components/Input';
import {useTags} from 'hooks/useTags';
import {generateOutput} from './NumberPadSection/generateOutput';
import {today} from 'lib/date';

//显示记账页面的数字面板的内容
type Props = {
  note: string
  amount: number
  onNoteChange: (note: string) => void
  onAmountChange: (amount: number) => void
  selectedTagId: number[]
  onOk: () => void
  onDateChange: (createAt: string) => void
  date: string
}

let selectedTagChart: string;

const NumberPadSection: React.FC<Props> = (props) => {
  //声明外部数据
  const {note, selectedTagId, onOk, onAmountChange, onDateChange, onNoteChange, date} = props;

  //找到selectedTagId对应的图表
  const {findTag} = useTags();
  selectedTagChart = findTag(selectedTagId[0]) ?
    findTag(selectedTagId[0]).chart :
    selectedTagChart;

  //onChange函数
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onNoteChange(e.target.value);
  };

  //数字面板输入的内容,每个数组最大不能超过8位
  const [output, _setOutput] = useState(props.amount.toString());
  const setOutput = (output: string) => {
    //如果存在'+''-',那么后面一个数的位数不能超过8位
    if (output.indexOf('+') >= 0 || output.indexOf('-') >= 0) {
      const plusSecond = output.split('+')[1];
      const minusSecond = output.split('-')[1];
      if (plusSecond?.length > 8 || minusSecond?.length > 8) {
        output = output.slice(0, -1);
      }
    } else if (output.length > 8) {
      output = output.slice(0, -1);
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

    //使用封装的计算逻辑
    if ('1234567890.+-='.split('').concat(['删除']).indexOf(text) >= 0) {
      const {computeOutput, computeComplete} = generateOutput(text, output);

      //两个8位数相加会是9位,直接setOutput处理会变成8位,所以'='计算出来的结果不用对位数进行处理
      if (text === '=') {
        _setOutput(computeOutput);
      } else {
        setOutput(computeOutput);
      }
      computeComplete && setComplete(computeComplete);
    }
  };

  //获取input type=date元素
  const inputNode = useRef(null);

  //用当前input的value作为父组件的createAt值
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.value && onDateChange(e.target.value);
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
        <button className='date'>
          <input type="date" ref={inputNode} onChange={onInputChange}/>
          <div>{date === today() ? '今天' : date}</div>
        </button>
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