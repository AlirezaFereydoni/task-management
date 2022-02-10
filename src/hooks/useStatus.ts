import { useState } from "react";

// business static situation

const validSituation = {
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
};

type StatusType = "todo" | "inProgress" | "blocked" | "inQa" | "done";

const useStatus = (currentStatus: StatusType) => {
  const [current, setCurrent] = useState<StatusType>(currentStatus);

  return [validSituation[current], setCurrent];
};

export { useStatus };
