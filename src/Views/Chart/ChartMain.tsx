import React from 'react';
import styled from 'styled-components';
import {gCss} from '../../gCss';
import {useRecords} from '../../hooks/useRecords';
import Icon from '../../components/Icon';
import {useTags} from '../../hooks/useTags';
import ReactECharts from 'echarts-for-react';
import dayjs from 'dayjs';
import NP from 'number-precision';

const EchartsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${gCss.borderColor};
`;

const RecordsWrapper = styled.div`

  > ul {

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

const ChartMain: React.FC = () => {
  const {findTag} = useTags();
  //[{date:'2-7',records:[]}]
  const {records} = useRecords();
  const dateValue = [];
  for (let i = 0; i < 7; i++) {
    const date = dayjs().subtract(i, 'day').format('YYYY-MM-DD');

    //找到当前日期对应的记账记录
    const currentRecordsAmount = records.filter(record => record.createAt === date).map(record => record.amount);
    //将每天的记账记录相加
    const sumAmount = currentRecordsAmount.reduce((sum, n) => NP.plus(sum, n), 0);
    dateValue.unshift({date, sumAmount});
  }
  const showDate = dateValue.map(item => dayjs(item.date).format('MM-DD'));
  const showValue = dateValue.map(item => item.sumAmount);
  const option = {
    tooltip: {
      confine: true,
      show: true,
      position: 'top',
      triggerOn: 'mousemove|click',
      formatter: '{c}',
    },
    grid: {
      left: 0,
      top: '20%',
      right: 0,
      bottom: '20%',
    },
    xAxis: {
      type: 'category',
      data: showDate,
      axisTick: {show: false, alignWithLabel: true},
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    series: [
      {
        symbolSize: 8,
        data: showValue,
        type: 'line',
        itemStyle: {
          color: gCss.BG
        },
        symbol: 'circle',
        markPoint: {
          symbol: 'circle',
          symbolSize: 0,
          symbolOffset: [0, -12],
          data: [
            {type: 'max', name: '最大值'},
          ]
        },
      }
    ]
  };
  return (
    <>
      <EchartsWrapper>
        <div>总支出:</div>
        <div>平均值:</div>
        <ReactECharts
          option={option}
          style={{height: 200}}
        />
      </EchartsWrapper>
      <RecordsWrapper>
        <div><strong>本周支出记录</strong></div>
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
      </RecordsWrapper>
    </>
  );
};

export {ChartMain};