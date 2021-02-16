import React from 'react';
import {Layout} from 'components/Layout';
import Icon from '../components/Icon';
import title from '../pictures/title.png';
import {TopWrapper} from './Detail/TopWrapper';
import {MainWrapper} from './Detail/MainWrapper';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

//显示记账明细的页面
const Detail = () => {
  const {records} = useRecords();
  const {findTag} = useTags();
  const currentTime = new Date().toISOString();
  const top = () => {
    return <TopWrapper>
      <main><img src={title} alt=""/></main>
      <div>
        <div className='date'>
          <div className='year'>{day(currentTime).format('YYYY年')}</div>
          <div className='month'>
            <div className='month-content'>{day(currentTime).format('MM')}</div>
            <span>月</span>
            <span className='triangle'/>
            <span className='vertical-line'/>
          </div>
        </div>
        <div className='income'>
          <div>收入</div>
          <div className='income-content'>10</div>
        </div>
        <div className='expenditure'>
          <div>支出</div>
          <div className='expenditure-content'>5</div>
        </div>
      </div>
    </TopWrapper>;
  };
  const main = () => {
      return <MainWrapper>
        <div className='top'>
          <div className='date'>02月15日 星期一</div>
          <div className='income'>收入:&nbsp;&nbsp;10</div>
          <div className='expenditure'>支出:&nbsp;&nbsp;5</div>
        </div>
        <ul>
          {records.map(record => (
            <li>
              <div className='icon-wrapper'>
                <Icon name={findTag(record.selectedTagId[0]).chart}/>
              </div>
              <div className='record-name'>
                {findTag(record.selectedTagId[0]).name + day(record.createAt).format('MM月DD日 dddd')}
                <span className='vertical-line'/>
              </div>
              <div className='record-amount'>{(record.category === '-' ? '-' : '+') + record.amount}</div>
            </li>
          ))}
        </ul>
      </MainWrapper>;
    }
  ;
  return (
    <Layout
      top={top()}
      main={main()}
    />
  );
};

export
{
  Detail
}
  ;