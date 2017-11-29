import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { sum, round } from 'lodash';

const average = (data) => {
  return round(sum(data)/data.length);
}

export default (props) => {
  const { data, color, units} = props;
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div className="text-center">{average(data)} {units}</div>
    </div>
  )
}
