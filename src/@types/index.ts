export interface Item {
  id: String;
  text: String;
  type: String;
  state: String;
  result: String;
  doneAt: Date;
}

export interface Tasks {
  id: String;
  title: String;
  text: String;
  tasks: Array<Item>;
}

export const enum EVENTS {
  CLICK = "click"
}

export const enum STATE {
  DONE = "DONE",
  NOT_DONE = "NOT_DONE"
}
