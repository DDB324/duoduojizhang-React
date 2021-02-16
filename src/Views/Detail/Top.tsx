import {TopWrapper} from './TopWrapper';
import title from 'pictures/title.png';
import day from 'dayjs';
import {RecordItem} from '../../hooks/useRecords';

const Top = (records: RecordItem[], value: (records: RecordItem[], category: '+' | '-') => number) => {
  const currentTime = (new Date()).toISOString();
  return <TopWrapper>
    <main>
      <img src={title} alt=""/>
    </main>
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