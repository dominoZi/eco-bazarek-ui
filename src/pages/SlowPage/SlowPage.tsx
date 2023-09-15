import { useState, useTransition } from "react";
import { Content } from "../../components";
import { SlowItem } from "./SlowItem";

export const SlowPage = () => {
  const [slowList, setSlowList] = useState(false);
  const [isPending, startTransition] = useTransition();
  return (
    <Content title="Slow Page" loading={isPending}>
      <h1>Slow page for testing</h1>
      <div className="mt-6">
        <input
          checked={slowList}
          onChange={(e) => {
            if (e.target.checked)
              startTransition(() => {
                setSlowList(true);
              });
            else setSlowList(false);
          }}
          type="checkbox"
          id="slow-switch"
          name="slow-switch"
        />
        <label className="ml-4" htmlFor="slow-switch">
          Slow rendering...
        </label>
      </div>
      <div className="mt-8">
        {slowList ? (
          <ul>
            {[...Array(2000).keys()].map((x) => (
              <SlowItem index={x} />
            ))}
          </ul>
        ) : (
          <div className="front-bold">Nie ma nic...</div>
        )}
      </div>
    </Content>
  );
};
