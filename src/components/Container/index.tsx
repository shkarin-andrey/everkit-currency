import { useLocation } from 'react-router-dom'
import Filter from '../Filter'

import './style.scss'

const Container = ({children, title}:any) => {
    const location = useLocation()

    return (
        <div className="container">
            <div className="wrapper">
                <h1 className='title'>{title}</h1>
                {location.pathname === '/' ? <Filter/> : null}
            </div>
            {children}
        </div>
    )
}

export default Container