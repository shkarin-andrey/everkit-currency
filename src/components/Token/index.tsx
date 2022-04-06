import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { tokens } from "../../tokens"
import './style.scss'
import Arrow from './../../Assets/Arrow';
import Person from "../../Assets/Person";

import { useSelector, useDispatch } from 'react-redux'
import { tokenChanged } from './tokenSlice';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const Tokens = () => {
    const [active, setActive] = useState<string | null>(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const format = (number: number) => new Intl.NumberFormat('ru-RU').format(number)

    const { actionFilter } = useSelector((state: any) => state.filters)

    let filterTokens
    if (actionFilter !== 'all') {
        filterTokens = tokens.filter(item => item.categories.find(x => x === actionFilter) === actionFilter)
    } else {
        filterTokens = tokens
    }

    return (
        <TransitionGroup className="token-list">
            {filterTokens.map((item) => (
                <CSSTransition
                    key={item.id}
                    timeout={500}
                    classNames="item"
                >
                    <div className="token" onDoubleClick={() => {
                        dispatch(tokenChanged(item.name))
                        navigate(item.address)
                    }}>
                        <div className="grid">
                            <div className="text-grey">#{item.id}</div>
                            <div className="token-logo">
                                <img src={item.logoURI} alt={item.name} />
                            </div>
                            <div className="token-name">
                                <div className="title">{item.name}</div>
                                <div className="simbol text-primary">{item.symbol}</div>
                            </div>
                            <div className="token-price">
                                <div className="text-primary">{item.price} $</div>
                                <div className="token-price-bottom text-grey">
                                    {item.priceChange.map((x, i) => {
                                        let className 
                                        if (+x > 0) {
                                            className = 'text-green'
                                        } 
                                        if (+x < 0) {
                                            className = 'text-red'
                                        }

                                        return(
                                            <React.Fragment key={i}>  
                                                <span className={className}>
                                                    {+x > 0 && '+'}{x}%
                                                </span>
                                                {i !== 2 && <span>•</span>}
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>{format(item.volume)} $ <span className="fz-16 text-primary">+{item.volumeChangePercentage}%</span></div>
                            <div>{format(item.tvl)} $ <span className="fz-16 text-primary">+{item.tvlChangePercentage}%</span></div>
                            <div className="token-person">
                                <Person />
                                {format(item.person)}
                            </div>
                            <div className={`transition-all text-center ${active === item.id ? '-rotate-180' : 'rotate-0'}`} onClick={() => setActive(item.id)}><Arrow /></div>
                        </div>
                        <div className={`token-description text-grey ${active === item.id ? 'active' : ''}`}>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}

export default Tokens