import {TopWrapper} from './TopWrapper';
import title from 'pictures/title.png';
import {RecordItem} from '../../hooks/useRecords';
import React, {ChangeEventHandler} from 'react';

type Props = {
  records: RecordItem[]
  value: (records: RecordItem[], category: '+' | '-') => number
  date: { year: string, month: string }
  onDateChange: (obj: { year: string, month: string }) => void
}

const Top: React.FC<Props> = (props) => {
  const {records, value, date, onDateChange} = props;
  const onMonthChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const [year, month] = e.target.value.split('-');
    onDateChange({year, month});
  };
  return <TopWrapper>
    <main>
      <img src={title} alt=""/>
    </main>
    <div>
      <div className='date'>
        <div className='year'>{date.year + '年'}</div>
        <div className='month'>
          <input type="month" onChange={onMonthChange}/>
          <div className="month-content-wrapper">
            <div className='month-content'>{date.month}</div>
            <span>月</span>
            <span className='triangle'/>
            <span className='vertical-line'/>
          </div>
        </div>
      </div>
      <div className='income'>
        <div>总收入</div>
        <div className='income-content'>{value(records, '+')}</div>
      </div>
      <div className='expenditure'>
        <div>总支出</div>
        <div className='expenditure-content'>{value(records, '-')}</div>
      </div>
    </div>
  </TopWrapper>;
};

export {Top};