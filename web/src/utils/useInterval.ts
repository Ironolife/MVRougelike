import { useEffect, useRef } from "react";

const useInterval = (
  callback: Function,
  ms: number,
  dependencies: any[] = []
) => {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current!();
    if (ms !== null) {
      const interval = setInterval(tick, ms);
      return () => clearInterval(interval);
    }
  }, [ms, ...dependencies]);
};

export default useInterval;
