import {useHistory} from 'react-router-dom';

const useGoPage = () => {
  const history = useHistory();
  const goBack = ()=>{
    history.goBack();
  }
  const goTo = (hash:string)=>{
    history.push(hash)
  }
  return {goBack,goTo}
};

export {useGoPage}