import './Sections.css';
import React from 'react';
const Search = () => {
    return (
        <>
            <section className='searchSection'>
                <div className='container mt-2 d-flex justify-content-between'>
                    <form className='searchForm'>
                        <input className='searchInput form-control shadow-sm bg-body rounded' type="text" placeholder='Search for country...' />
                    </form>
                    <select className="regionSelection form-select shadow-sm bg-body rounded">
                        <option selected>Filter by Region</option>
                        <option value="1">Africe</option>
                        <option value="2">America</option>
                        <option value="3">Asia</option>
                        <option value="4">Europe</option>
                        <option value="5">Oceania</option>
                    </select>
                </div>
            </section>

        </>
    );
};

export default Search;