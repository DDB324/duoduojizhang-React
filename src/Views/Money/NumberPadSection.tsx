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
    switch (text) {
      case '+':
      case '-':
        setComplete('完成');
        if (output === '0') {
          setOutput('0' + text);
        } else if (output.indexOf('+') >= 0) {
          if ((text === '+' || text === '-') && (output.slice(-1) === '+' || output.slice(-1) === '-')) {
            setOutput(output.slice(0, -1) + text);
          } else {
            const numbers = output.split('+');
            const string = (parseFloat(numbers[0]) + parseFloat(numbers[1])).toString();
            setOutput(string + text);
          }
        } else if (output.indexOf('-') >= 0) {
          if (text === '+' || text === '-') {
            setOutput(output.slice(0, -1) + text);
          } else {
            const numbers = output.split('-');
            const string = (parseFloat(numbers[0]) - parseFloat(numbers[1])).toString();
            setOutput(string + text);
          }
        } else {
          setOutput(output + text);
        }
        break;
      case '.':
        //有'+''-',截取'+''-'后面的内容,如果内容里没有'.',就增加'.'
        if (output.indexOf('+') >= 0 || output.indexOf('-') >= 0) {
          let number;
          if (output.indexOf('+') >= 0) {
            number = output.split('+');
          } else if (output.indexOf('-') >= 0) {
            number = output.split('-');
          }
          if (number && number[1] && number[1].indexOf(text) < 0) {
            setOutput(output + text);
          }
        } else {
          //字符串中没有'+''-',如果字符串没有'.',就增加'.'
          if (output.indexOf(text) < 0) {
            setOutput(output + text);
          }
        }
        break;
      case '日期':
        console.log('日期');
        break;
      case '完成':
        console.log('完成');
        break;
      case '=':
        let result = '0';
        if (output.indexOf('+') >= 0) {
          const numbers = output.split('+');
          result = (parseFloat(numbers[0]) + parseFloat(numbers[1])).toString();
        } else if (output.indexOf('-') >= 0) {
          const numbers = output.split('-');
          result = (parseFloat(numbers[0]) - parseFloat(numbers[1])).toString();
        }
        setComplete('完成');
        setOutput(result);
        break;
      case '删除':
        if (output.slice(0, -1).slice(-1) === '+' || output.slice(0, -1).slice(-1) === '+') {
          setComplete('完成');
        }
        if (output.length === 1) {
          setOutput('0');
        } else {
          setOutput(output.slice(0, -1));
        }
        break;
      default:
        if (output === '0') {
          setOutput(text);
        } else {
          if (output.indexOf('+') >= 0 || output.indexOf('-') >= 0) {
            setComplete('=');
          }
          setOutput(output + text);
        }
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