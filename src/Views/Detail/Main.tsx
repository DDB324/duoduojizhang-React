import {MainWrapper} from './MainWrapper';
import {useTags} from '../../hooks/useTags';
import day from 'dayjs';
import Icon from '../../components/Icon';
import {RecordItem} from '../../hooks/useRecords';
import React from 'react';
import {NoContent} from '../../components/NoContent';


type Props = {
  records: [string, RecordItem[]][]
  value: (records: RecordItem[], category: '+' | '-') => number
}

const Main: React.FC<Props> = (props) => {
    const {records, value} = props;
    const {findTag} = useTags();
    console.log(records);
    console.log(typeof records);
    if (records.length === 0) {
      return <NoContent/>;
    } else {
      return <MainWrapper>
        {
          records.map(([date, record]) => (
            <div className='wrapper' key={date}>
              <div className='top'>
                <div className='date'>{day(date).format('MM月DD日 dddd')}</div>
                <div className='income'>收入:&nbsp;{value(record, '+')}</div>
                <div className='expenditure'>支出:&nbsp;{value(record, '-')}</div>
              </div>
              <ul>
                {record.map(record => (
                  <li key={record.id}>
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
            </div>
          ))
        }
      </MainWrapper>;
    }
  }
;

export {Main};