import { useEffect, useRef } from "react";

export function useLatest<T>(value: T) {
  const latest = useRef(value);

  useEffect(() => {
    latest.current = value;
  }, [value]);

  return latest;
}
