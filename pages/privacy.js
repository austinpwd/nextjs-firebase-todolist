import { AppBar } from "/components/appbar";
import { Title } from "/ui/title";
import { Legal, HighlightContainer, HighLight } from "/ui/legal";
import {
  PageLayout,
  PageHeader,
  PageFooter,
  PageBody,
} from "/layouts/loginpage";


function privacy() {
  return (
    <>
      <AppBar />
      <PageLayout>
        <PageHeader>
          <Title>Privacy Policy</Title>
        </PageHeader>
        <PageBody>

        </PageBody>
        <PageFooter>
          <Legal>
            <HighlightContainer>
              <HighLight>Terms and Conditions</HighLight>
              <HighLight>Privacy Policy</HighLight>
              </HighlightContainer>
          </Legal>
        </PageFooter>
      </PageLayout>
    </>
  );
}

export default privacy;
