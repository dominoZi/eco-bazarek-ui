import { useDispatch, useSelector } from "react-redux";
import { Button, Content } from "../components";
import { CounterSliceState, counterSlice } from "../store";

export const ReduxExamplePage = () => {
  const dispatch = useDispatch();
  const { count } = useSelector<
    {
      counter: CounterSliceState;
    },
    CounterSliceState
  >((state) => state.counter);

  return (
    <Content title="Redux example">
      <div className="font-bold">{`Current count: ${count}`}</div>
      <div className="flex flex-row mt-8">
        <Button
          onClick={() => {
            dispatch(counterSlice.actions.addOne());
          }}
          className="mr-4"
        >
          Add
        </Button>
        <Button
          onClick={() => {
            dispatch(counterSlice.actions.minusOne());
          }}
        >
          Reduce
        </Button>
      </div>
    </Content>
  );
};
