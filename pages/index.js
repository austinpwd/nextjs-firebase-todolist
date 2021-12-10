import { AppBar } from "/components/appbar";
import { PageLayout, PageHeader } from "layouts/loginpage";
import Link from "next/link";

function index(props) {
  return (
    <>
      <AppBar />
      <PageLayout>
        <PageHeader>
          <Link href="/login">
            <a>Go to Login page</a>
          </Link>
        </PageHeader>
      </PageLayout>
    </>
  );
}

export default index;
