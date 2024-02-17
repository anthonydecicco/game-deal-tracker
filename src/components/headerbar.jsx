import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import FilterBar from "./filterbar";

export default function HeaderBar({firstPageFunction, filter, handleFilter, location, handleClear}) {
    const [isSearching, setIsSearching] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef(null);
    const navBarRef = useRef();

    function showSearchBar() {
        if (!isFiltering) {
            setIsSearching(!isSearching);
        } else {
            setIsFiltering(false);
            setIsSearching(!isSearching);
            //if the filtering state is true, then it should be set to false before showing the search field
            //this allows the user to switch between search and filter without having to click again
        }
        setSearchQuery('');
        //reset the search bar after a user clicks out
    
        setTimeout(() => {
            if (searchInputRef.current) {
                searchInputRef.current.focus(); // Set focus on the input element
            }
        }, 0); //  In some cases focus may not immediately happen, used setTimeout to make it work
    }
    
    useEffect(() => {
        const handler = (e) => {
            if (!navBarRef.current.contains(e.target)) {
                setIsFiltering(false);
                setIsSearching(false);
            };
        };
        document.addEventListener("mousedown", handler);
        
        return () => {
            document.removeEventListener("mousedown", handler);
        }
        //DOM event listener must be removed (using a cleanup function) within useEffect
        //This prevents the event listener from continuing to use resources
        //When the event listener is removed, resources are released
    });
    //This useEffect function rerenders the page when a user clicks outside of the nav container
    //When the user clicks outside of the nav container, the open menu (search/filter) automatically closes
    
    function showFilterOptions() {
        if (!isSearching) {
            setIsFiltering(!isFiltering);
        } else {
            setIsSearching(false);
            setIsFiltering(!isFiltering);
            //if the searching state is true, then it should be set to false before showing filter options
            //this allows the user to switch between filter and search without having to click again
        } 
    }

    return (
        <header ref={navBarRef}>
            <nav>
                <ul className="nav-list white-text">
                    <li className="nav-list-item">
                        <Link to="/" onClick={[firstPageFunction]}>
                            <img className="nav-picture" src="\gaming.png" />
                        </Link>
                    </li>
                    {!location.pathname.includes('game/') && !location.pathname.includes(`games/`) && (
                        <li className="nav-list-item align-right" >
                            <div className="search-button-container">
                                <button className="no-background" onClick={showFilterOptions}>Filter</button>
                            </div>
                        </li>
                    )}
                    <li className="nav-list-item" >
                        <img className={`nav-picture search `} src="\search.png" onClick={showSearchBar} />
                    </li>
                </ul>
            </nav>

            <SearchBar
                searchInputRef={searchInputRef}
                isSearching={isSearching}
                searchQuery={searchQuery}
                setSearchQuery={(e) => setSearchQuery(e.target.value)}
            ></SearchBar>

            <FilterBar
                location={location}
                isFiltering={isFiltering}
                filter={filter}
                handleFilter={handleFilter}
                handleClear={handleClear}
            ></FilterBar>

        </header>
    )
}