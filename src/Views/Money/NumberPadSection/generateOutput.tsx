import NP from 'number-precision';

type GenerateOutput = (text: string, output: string) => { computeComplete: undefined | '=' | '完成'; computeOutput: string }

const generateOutput: GenerateOutput = (text, output) => {
  const existPlus = output.indexOf('+') >= 0;
  const existMinus = output.indexOf('-') >= 0;
  const existPlusOrMinus = existPlus || existMinus;
  const arrayPlus = output.split('+');
  const arrayMinus = output.split('-');
  const removeLastCharacter = output.slice(0, -1);
  const plus = (numbers: string[]) => {
    const result = NP.plus(parseFloat(numbers[0]), parseFloat(numbers[1]));
    return result.toString();
  };
  const minus = (numbers: string[]) => {
    const result = NP.minus(parseFloat(numbers[0]), parseFloat(numbers[1]));
    return result.toString();
  };
  const computeResult = () => {
    return existPlus ? plus(arrayPlus) : minus(arrayMinus);
  };

  switch (text) {
    case '+':
    case '-':
      //当最后一个字符是'+''-',且再次输入'+''-',将之前的+-删除,否则直接计算结果
      let existPlusOrMinusResult;
      if (existPlusOrMinus) {
        existPlusOrMinusResult = output.slice(-1) === '+' || output.slice(-1) === '-' ?
          removeLastCharacter :
          computeResult();
      } else {
        existPlusOrMinusResult = output;
      }

      //对计算的结果进行判断,不能为负数
      if (existPlusOrMinusResult.indexOf('-') >= 0) {
        window.alert('计算结果不能为负数');
        return {computeOutput: output, computeComplete: undefined};
      } else {
        // setComplete('完成');
        return {computeOutput: existPlusOrMinusResult + text, computeComplete: '完成'};
      }
    case '.':
      const number = existPlus ? arrayPlus : arrayMinus;

      //对已经有+-号的output,取output后面的数字,数字中没有'.'
      const secondNumberHasNoPoint = number && number[1] && number[1].indexOf(text) < 0;

      //output中没有'.'
      const outputHasNoPoint = output.indexOf(text) < 0;

      //只有在这个条件下,才能输出'.'
      if ((existPlusOrMinus && secondNumberHasNoPoint) || outputHasNoPoint) {
        return {computeOutput: output + text, computeComplete: undefined};
      } else {
        return {computeOutput: output, computeComplete: undefined};
      }
    case '=':
      if (computeResult().indexOf('-') >= 0) {
        window.alert('计算结果不能为负数');
        return {computeOutput: output, computeComplete: undefined};
      } else {
        return {computeOutput: computeResult(), computeComplete: '完成'};
      }
    case '删除':
      //删除最后一个字符后的最后一个字符是否为'+'或'-'
      const last = removeLastCharacter.slice(-1) === '+' || removeLastCharacter.slice(-1) === '-';
      return {
        computeOutput: output.length === 1 ? '0' : removeLastCharacter,
        computeComplete: last ? '完成' : undefined
      };
    default:
      //对所有的数字进行的操作
      return {
        computeOutput: (output === '0' ? '' : output) + text,
        computeComplete: existPlusOrMinus ? '=' : undefined
      };
  }
};

export {generateOutput};