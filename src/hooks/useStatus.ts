import { useState } from "react";

// business static situation

interface SituationType {
  [key: string]: { id: number; name: string }[];
}

const validSituation: SituationType = {
  todo: [{ id: 1, name: "inProgress" }],
  inProgress: [
    { id: 2, name: "blocked" },
    { id: 3, name: "inQa" },
  ],
  blocked: [{ id: 4, name: "todo" }],
  inQa: [
    { id: 5, name: "todo" },
    { id: 6, name: "done" },
  ],
  done: [{ id: 7, name: "deployed" }],
  deployed: [],
};

const useStatus = (currentStatus: string) => {
  const [current, setCurrent] = useState<string>(currentStatus);

  return [validSituation[current], setCurrent];
};

export { useStatus };
