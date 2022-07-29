import './Sections.css';
import BrazilFlag from './images/brazil.png';
import GermanFlag from './images/germany.png';
import IcelandFlag from './images/ireland.png';
import UsaFlag from './images/usa.png';
import React from 'react';
const Card = () => {
    return (
        <>
            <section className='cardSection'>
                <div className='container'>
                    <ul className='cardList mt-4 d-flex justify-content-between flex-wrap'>
                        <li className='cardListItem card'>
                        <img className="listItemFlags" src = {BrazilFlag} alt='brazil flag' width="250" height="160" />
                            <div className='cardLitItemBody p-3'>
                            <h5 className='listItemHeading'>Brazil</h5>
                            <p className='listItemPop'><span className='itemTag'>Population: </span> 206,135,893</p>
                            <p className='istItemReg'><span className='itemTag'>Region: </span>Americas</p>
                            <p className='listItemCapital'><span className='itemTag'>Capital: </span>Brasília</p>
                            </div>
                        </li>
                        <li className='cardListItem card'>
                        <img className="listItemFlags" src = {GermanFlag} alt='brazil flag' width="250" height="160" />
                            <div className='cardListItemBody p-3'>
                            <h5 className='listItemHeading'>Germany</h5>
                            <p className='listItemPop'><span className='itemTag'>Population: </span> 81,770,900</p>
                            <p className='istItemReg'><span className='itemTag'>Region: </span>Europe</p>
                            <p className='listItemCapital'><span className='itemTag'>Capital: </span>Berlin</p>
                            </div>
                        </li>
                        <li className='cardListItem card'>
                        <img className="listItemFlags" src = {IcelandFlag} alt='brazil flag' width="250" height="160" />
                            <div className='cardListItemBody p-3'>
                            <h5 className='listItemHeading'>Iceland</h5>
                            <p className='listItemPop'><span className='itemTag'>Population: </span> 334,300</p>
                            <p className='istItemReg'><span className='itemTag'>Region: </span>Europe</p>
                            <p className='listItemCapital'><span className='itemTag'>Capital: </span>Reykjavík</p>
                            </div>
                        </li>
                        <li className='cardListItem card'>
                        <img className="listItemFlags" src = {UsaFlag} alt='brazil flag' width="250" height="160" />
                            <div className='cardListItemBody p-3'>
                            <h5 className='listItemHeading'>United States of America</h5>
                            <p className='listItemPop'><span className='itemTag'>Population: </span> 323,947,000</p>
                            <p className='istItemReg'><span className='itemTag'>Region: </span>Americas</p>
                            <p className='listItemCapital'><span className='itemTag'>Capital: </span>Washington, D.C.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
export default Card;