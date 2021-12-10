import { useAuth } from "/libs/hooks/useAuth";
import { AppBar } from "/components/appbar";
import { PageLayout, PageHeader } from "layouts/loginpage";
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
      <PageLayout>
        <PageHeader>
          <Title>User To Do List</Title>
          <Link href="/add-item">
            <a>Add New To Do</a>
          </Link>
        </PageHeader>
      </PageLayout>
    </>
  );
}

export default ToDoPage;
