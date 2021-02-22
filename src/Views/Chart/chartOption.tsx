import {gCss} from '../../gCss';

const option =(showDate:string[],showValue:number[])=> ({
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
});

export {option}