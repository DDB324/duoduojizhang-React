import Icon from '../../components/Icon';
import React, {useRef, useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';


const NumberPadSection: React.FC = () => {
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlue = () => {
    if (refInput.current) {
      setNote(refInput.current.value);
    }
  };
  const [output, _setOutput] = useState('0');
  //总长度不能超过16
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    }
    _setOutput(output);
  };
  const [complete, setComplete] = useState<'完成' | '='>('完成');
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
      return (parseFloat(numbers[0]) + parseFloat(numbers[1])).toString();
    };
    const minus = (numbers: string[]) => {
      return (parseFloat(numbers[0]) - parseFloat(numbers[1])).toString();
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
        const lastCharacterPlusOrMinusResult = () => {
          return lastCharacterPlusOrMinus() ? removeLastCharacter : computeResult();
        };

        setComplete('完成');
        const existPlusOrMinusResult = existPlusOrMinus ?
          lastCharacterPlusOrMinusResult() :
          output;

        setOutput(existPlusOrMinusResult + text);
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
        setOutput('0');
        console.log('完成');
        break;
      case '=':
        setComplete('完成');
        setOutput(computeResult());
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
    <Wrapper>
      <div className='NoteAndOutput'>
        <label>
          <Icon name='money'/>
          <span>备注:</span>
          <input type="text" placeholder='点击写备注...'
                 defaultValue={note}
                 ref={refInput}
                 onBlur={onBlue}
          />
        </label>
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
    </Wrapper>
  );
};
export {NumberPadSection};