import { t } from "@lingui/macro";
import Container from "../components/Container"
import Tokens from '../components/Token';

const Main = () => (
    <main className="tokens">
        <Container title={t`tokensEverscale`}>
            <Tokens/>
        </Container>
    </main>
)
export default Main