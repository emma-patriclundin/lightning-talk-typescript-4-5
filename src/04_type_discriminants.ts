/********************************************
 ** Template String Types As Discriminants **
 ********************************************/

interface Event {
  type: `${string}Event`;
  read: () => void;
}
interface Listener {
  type: `${string}Listener`;
  listen: () => void;
}

export function handler(item: Event | Listener) {
  if (item.type === "PushEvent") {
    // Item is of type Event in this scope
    item.read();
  }
}
