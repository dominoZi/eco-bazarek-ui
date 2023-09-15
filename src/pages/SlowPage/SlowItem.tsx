export const SlowItem = (props: { index: number }) => {
  const { index } = props;
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Slow item #{index + 1}</li>;
};
