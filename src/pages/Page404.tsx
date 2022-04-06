import { t } from "@lingui/macro"
import Container from "../components/Container"

const Page404 = () => (
    <div className="tokens">
        <Container title='404'>
            <div className="time__error">{t`404`}</div>
        </Container>
    </div>
)

export default Page404