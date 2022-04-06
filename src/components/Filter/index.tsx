import { categories } from "../../tokens"
import { useSelector, useDispatch } from 'react-redux'
import { filtersChanged } from './filtersSlice';

import './style.scss'

const Filter = () => {
    const { actionFilter }: any = useSelector((state: any) => state.filters)
    const dispatch = useDispatch()

    return (
        <div className="filter text-grey">
            {categories.map((x) => (
                <div 
                    onClick={() => dispatch(filtersChanged(x.id))} 
                    id={x.id} 
                    key={x.id} 
                    className={actionFilter === x.id ? 'active' : ''}
                >
                    {x.title()}
                </div>
            ))}
        </div>
    )
}

export default Filter