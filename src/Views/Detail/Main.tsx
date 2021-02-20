import {MainWrapper} from './MainWrapper';
import {useTags} from 'hooks/useTags';
import day from 'dayjs';
import Icon from 'components/Icon';
import {RecordItem} from 'hooks/useRecords';
import React, {useState} from 'react';
import {NoContent} from 'components/NoContent';


type Props = {
  records: [string, RecordItem[]][]
  value: (records: RecordItem[], category: '+' | '-') => number
  removeRecord:(removeRecordId:number)=>void
}

const Main: React.FC<Props> = (props) => {
    const {records, value,removeRecord} = props;
    const {findTag} = useTags();

    //控制删除按钮的显示
    const [id, setId] = useState<number[]>([]);
    const onToggle = (e: React.MouseEvent) => {
      //当前代码对删除按钮不起作用
      if ((e.target as HTMLButtonElement).innerHTML === '删除') {return;}

      //获取到点击record的id内容
      const currentId = (e.currentTarget as HTMLLIElement).querySelector('header')!.innerHTML;

      //将获取到的id放到数组中,如果已经存在相同的,就将数组重置为空数组
      if (id.indexOf(JSON.parse(currentId)) >= 0) {
        setId([]);
      } else {
        setId([JSON.parse(currentId)]);
      }
    };

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
                  <li key={record.id} onClick={onToggle}>
                    <header>{record.id}</header>
                    <div className='icon-wrapper'>
                      <Icon name={findTag(record.selectedTagId[0]).chart}/>
                    </div>
                    <div className='record-name'>
                      {record.note ? record.note : findTag(record.selectedTagId[0]).name}
                    </div>
                    <div className='record-amount'>{(record.category === '-' ? '-' : '') + record.amount}</div>
                    {id.indexOf(record.id) >= 0 &&
                    <button onClick={() => removeRecord(record.id)}>删除</button>}
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