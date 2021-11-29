import { AppBar } from "/components/appbar";
import { FaceBookProvider } from "/components/authentication/providers";
import { GoogleProvider } from "/components/authentication/providers";
import { GitHubProvider } from "/components/authentication/providers";
import { TwitterProvider } from "/components/authentication/providers";
import { Title } from "/ui/title";
import { Spacer } from "/ui/spacers";
import { UserLogin } from "/components/authentication/user-login";
import { Legal, HighlightContainer, HighLight } from "/ui/legal";
import {
  PageLayout,
  PageHeader,
  PageFooter,
  PageBody,
} from "/layouts/loginpage";


function index() {
  return (
    <>
      <AppBar />
      <PageLayout>
        <PageHeader>
          <Title>Account Login</Title>
        </PageHeader>
        <PageBody>
          <FaceBookProvider style={{marginBottom: "1.5rem"}}>
            With Facebook
          </FaceBookProvider>
          <GitHubProvider style={{ marginBottom: "1.5rem" }}>
            With GitHub
          </GitHubProvider>
          <GoogleProvider style={{ marginBottom: "1.5rem" }}>
            With Google
          </GoogleProvider>
          <TwitterProvider style={{ marginBottom: "1.5rem" }}>
            With Twitter
          </TwitterProvider>
          <Spacer className="spacing">OR</Spacer>
          <UserLogin />
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

export default index;
