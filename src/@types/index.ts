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
