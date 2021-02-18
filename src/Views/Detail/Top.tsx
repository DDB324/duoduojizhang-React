import {TopWrapper} from './TopWrapper';
import title from 'pictures/title.png';
import {RecordItem} from '../../hooks/useRecords';
import {year,month} from 'lib/date'

const Top = (records: RecordItem[], value: (records: RecordItem[], category: '+' | '-') => number) => {
  return <TopWrapper>
    <main>
      <img src={title} alt=""/>
    </main>
    <div>
      <div className='date'>
        <div className='year'>{year()+'年'}</div>
        <div className='month'>
          <div className='month-content'>{month()}</div>
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