import React from 'react';
import styled from 'styled-components';
import {gCss} from '../../gCss';
import {RecordItem} from '../../hooks/useRecords';
import Icon from '../../components/Icon';
import {useTags} from '../../hooks/useTags';
import ReactECharts from 'echarts-for-react';
import {NoContent} from '../../components/NoContent';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const EchartsWrapper = styled.div`
  border-bottom: 1px solid ${gCss.borderColor};
  padding: 4px;

  > .average {
    font-size: .9em;
  }
`;

const RecordsWrapper = styled.div`
  flex-grow: 1;
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  > div {
    padding: 8px;
  }

  > ul {
    overflow: auto;

    > li {
      display: flex;
      padding: 12px 12px;
      justify-content: center;
      align-items: center;
      position: relative;

      > header {
        display: none;
      }

      > .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: ${gCss.iconNWH};
        width: ${gCss.iconNWH};
        border-radius: 50%;
        background: #ffda43;
        margin-right: 12px;

        > .icon {
          height: 20px;
          width: 20px;
        }
      }

      > .record-name {
        margin-right: auto;
      }

      > .record-amount {

      }

      > button {
        margin-left: 8px;
        padding: 4px 12px;
        background: #ed736e;
        color: white;
      }

      > .vertical-line {
        position: absolute;
        top: 0;
        right: 0;
        height: 1px;
        background: rgba(0, 0, 0, .2);
        width: 85%;
      }

      &:first-child {
        > .vertical-line {
          background: transparent;
        }
      }
    }
  }
`;
type Props = {
  option: {}
  records: RecordItem[]
  totalAmount: number
  averageAmount: string
}

const ChartMain: React.FC<Props> = (props) => {
  const {option, records, totalAmount, averageAmount} = props;
  const {findTag} = useTags();
  return (
    <Wrapper>
      <EchartsWrapper>
        <div className='total'>总支出:{totalAmount}</div>
        <div className='average'>平均值:{averageAmount}</div>
        <ReactECharts
          option={option}
          style={{height: 200}}
        />
      </EchartsWrapper>
      <RecordsWrapper>
        <div><strong>本周记账记录</strong></div>
        {records.length === 0 ?
          <NoContent/> :
          <ul>
            {records.map(record => (
              <li key={record.id}>
                <header>{record.id}</header>
                <div className='icon-wrapper'>
                  <Icon name={findTag(record.selectedTagId[0]).chart}/>
                </div>
                <div className='record-name'>
                  {record.note ? record.note : findTag(record.selectedTagId[0]).name}
                </div>
                <div className='record-amount'>{(record.category === '-' ? '-' : '') + record.amount}</div>
                <span className='vertical-line'/>
              </li>
            ))}
          </ul>
        }
      </RecordsWrapper>
    </Wrapper>
  );
};

export {ChartMain};