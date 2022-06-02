import { useEffect, useState } from "react";

export function useStrangerThings(callback?: () => void) {
  const [someState, setSomeState] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => (callback ? callback() : setSomeState((prev) => prev + 1)),
      3000
    );

    return () => clearInterval(interval);
  }, [callback]);

  return someState;
}
