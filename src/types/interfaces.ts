import { StatusType } from "./types";

export interface iTask {
  title: string;
  description: string;
  status: StatusType;
  id: number;
}
