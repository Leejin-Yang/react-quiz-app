import { VictoryPie } from 'victory';

import { color } from 'styles/constants';

interface Props {
  correct: number;
  incorrect: number;
}

const Chart = ({ correct, incorrect }: Props) => {
  return (
    <VictoryPie
      colorScale={[color.PRIMARY, color.GRAY3]}
      width={300}
      height={300}
      innerRadius={75}
      cornerRadius={50}
      data={[{ y: correct }, { y: incorrect }]}
      labels={() => null}
    />
  );
};

export default Chart;
