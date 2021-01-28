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

  const [output, setOutput] = useState('0');
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).innerHTML;
    if (text === null) return;
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '删除':
        console.log('删除');
        break;
      case '+':
      case '-':
        console.log('符号');
        break;
      case '日期':
        console.log('日期');
        break;
      case '完成':
        console.log('完成');
        break;
      default:
        console.log('找不到');
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
        <button>完成</button>
      </div>
    </Wrapper>
  );
};
export {NumberPadSection};