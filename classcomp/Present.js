function List({ children }) {
  return <ul>{children}</ul>;
}

function ListItem({ name, children, onClick }) {
  function test() {
    console.log();
  }
  return <li onClick={test}>{children}</li>;
}

export { List, ListItem };
