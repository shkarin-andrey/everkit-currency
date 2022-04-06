import {t} from '@lingui/macro'
import Container from "../components/Container"

const Search = () => (
    <div className="search">
        <Container title={t`search`}>
            <div className="time__error">{t`noContent`}</div>
        </Container>
    </div>
)

export default Search