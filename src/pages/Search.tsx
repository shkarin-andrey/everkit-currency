import {t} from '@lingui/macro'
import Container from "../components/Container"

const Search = () => (
    <div className="search">
        <Container title={t`search`}>
            <div>{t`noContent`}</div>
        </Container>
    </div>
)

export default Search