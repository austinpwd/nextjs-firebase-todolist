import { useAuth } from "/libs/hooks/useAuth";
import { AppBar } from "/components/appbar";
import { Title } from "/ui/title";
import Link from "next/link";

function ToDoPage(props) {
  const user = useAuth();

  if (!user) {
    <>
      <AppBar />
      <Title>YOURE NOT WELCOME HERE. GO AWAY</Title>
    </>;
  }

  return (
    <>
      <AppBar />
      <Title>Render To-Do List</Title>
        <Link href="/add-todo">
        <a>Add New To Do Item</a>
    </Link>
    </>
  );
}

export default ToDoPage;
