import { useCallback, useMemo, useState } from "react";

export function useRerender() {
  const [rerenders, setRerenders] = useState(0);

  const rerender = useCallback(() => {
    setRerenders((prev) => prev + 1);
  }, []);

  return useMemo(() => ({ rerenders, rerender }), [rerenders, rerender]);
}
