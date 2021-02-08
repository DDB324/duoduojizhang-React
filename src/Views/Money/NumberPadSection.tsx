import React, {ChangeEventHandler, useState} from 'react';
import {WrapperNumberPad} from './NumberPadSection/WrapperNumberPad';
import NP from 'number-precision';
import {Input} from '../../components/Input';
import {useTags} from '../../useTags';

//显示记账页面的数字面板的内容
type Props = {
  note: string
  amount: number
  onNoteChange: (note: string) => void
  onAmountChange: (amount: number) => void
  selectedTagId: number[]
}
const NumberPadSection: React.FC<Props> = (props) => {
  //声明外部数据
  const {note, selectedTagId} = props;

  //找到selectedTagId对应的图表
  const {incomeTags, expenditureTags} = useTags();
  const tags = incomeTags.concat(expenditureTags);
  const selectedTag = tags.filter(tag => tag.id === selectedTagId[0])[0];

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

  //计算逻辑,还需优化
  //TODO
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).innerHTML;
    if (text === null) return;
    const existPlus = output.indexOf('+') >= 0;
    const existMinus = output.indexOf('-') >= 0;
    const existPlusOrMinus = existPlus || existMinus;
    const arrayPlus = output.split('+');
    const arrayMinus = output.split('-');
    const removeLastCharacter = output.slice(0, -1);
    const plus = (numbers: string[]) => {
      // return (parseFloat(numbers[0]) + parseFloat(numbers[1])).toString();
      const result = NP.plus(parseFloat(numbers[0]), parseFloat(numbers[1]));
      return result.toString();
    };
    const minus = (numbers: string[]) => {
      // return (parseFloat(numbers[0]) - parseFloat(numbers[1])).toString();
      const result = NP.minus(parseFloat(numbers[0]), parseFloat(numbers[1]));
      return result.toString();
    };
    const computeResult = () => {
      return existPlus ? plus(arrayPlus) : minus(arrayMinus);
    };
    switch (text) {
      case '+':
      case '-':
        const lastCharacter = () => output.slice(-1);
        const lastCharacterPlusOrMinus = () => {
          return lastCharacter() === '+' || lastCharacter() === '-';
        };
        //当最后一个字符是'+''-',且再次输入'+''-',将之前的+-删除
        const lastCharacterPlusOrMinusResult = () => {
          return lastCharacterPlusOrMinus() ? removeLastCharacter : computeResult();
        };

        const existPlusOrMinusResult = existPlusOrMinus ?
          lastCharacterPlusOrMinusResult() :
          output;
        if (existPlusOrMinusResult.indexOf('-') >= 0) {
          window.alert('计算结果不能为负数');
          setOutput(output);
        } else {
          setComplete('完成');
          setOutput(existPlusOrMinusResult + text);
        }
        break;
      case '.':
        const number = existPlus ? arrayPlus : arrayMinus;
        const secondNumberHasNoPoint = () => {
          return number && number[1] && number[1].indexOf(text) < 0;
        };
        const outputHasNoPoint = () => {
          return output.indexOf(text) < 0;
        };
        if ((existPlusOrMinus && secondNumberHasNoPoint()) || outputHasNoPoint()) {
          setOutput(output + text);
        }
        break;
      case '日期':
        console.log('日期');
        break;
      case '完成':
        props.onAmountChange(parseFloat(output));
        setOutput('0');
        break;
      case '=':
        if (computeResult().indexOf('-') >= 0) {
          window.alert('计算结果不能为负数');
          setOutput(output);
        } else {
          setComplete('完成');
          setOutput(computeResult());
        }
        break;
      case '删除':
        //删除最后一个字符后的最后一个字符是否为'+'或'-'
        const last = removeLastCharacter.slice(-1) === '+' || removeLastCharacter.slice(-1) === '-';
        if (last) {
          setComplete('完成');
        }
        setOutput(output.length === 1 ? '0' : removeLastCharacter);
        break;
      default:
        if (existPlusOrMinus) {
          setComplete('=');
        }
        setOutput((output === '0' ? '' : output) + text);
    }
  };
  return (
    <WrapperNumberPad>
      <div className='NoteAndOutput'>
        <Input iconName={selectedTag.chart} spanContent='备注:' type='text'
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