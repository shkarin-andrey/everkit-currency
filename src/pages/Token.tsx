import Container from "../components/Container"
import { useSelector } from "react-redux"
import { t } from "@lingui/macro"

const Token = () => {
    const {actionToken} = useSelector((state:any) => state.tokens)
    return (
        <div className="tokens">
            <Container title={actionToken}>
                <div className="time__error">{t`noContent`}</div>
            </Container>
        </div>
    )
}

export default Token