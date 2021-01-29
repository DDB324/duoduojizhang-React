import styled from 'styled-components';
import Icon from '../../components/Icon';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  background: #f3f3f3;

  > .NoteAndOutput {
    display: flex;
    line-height: 50px;
    border-top: 1px solid #cccccc;
    justify-content: space-between;


    > label {
      display: flex;
      align-items: center;
      justify-content: right;
      flex-grow: 1;

      > .icon {
        width: 1.2em;
        height: 1.2em;
        margin: 0 4px;
      }

      > span {
        margin-right: 8px;
        white-space: nowrap;
      }

      > input {
        height: 48px;
        background: none;
        font-size: inherit;
        flex-grow: 1;
        width: 0;
      }
    }

    > .output {
      padding-right: 12px;
      font-size: 30px;
      flex-shrink: 0;
    }
  }

  > .pad {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #cccccc;

    > button {
      width: 25%;
      height: 64px;
      border-right: 1px solid #cacaca;
      border-bottom: 1px solid #cacaca;
      font-size: 18px;

      &:nth-child(13), &:nth-child(14),
      &:nth-child(15), &:nth-child(16) {
        border-bottom: none;
      }

      &:nth-child(4), &:nth-child(8),
      &:nth-child(12), &:nth-child(16) {
        border-right: none;
      }

      &.ok {
        background: #ffda43;
      }
    }
  }
`;

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
        setComplete('完成');
        const lastCharacter = () => output.slice(-1);
        const lastCharacterPlusOrMinus = () => {
          return lastCharacter() === '+' || lastCharacter() === '-';
        };
        const lastCharacterPlusOrMinusResult = () => {
          return lastCharacterPlusOrMinus() ? removeLastCharacter : computeResult();
        };
        const existPlusOrMinusResult = existPlusOrMinus ? lastCharacterPlusOrMinusResult() : output;
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