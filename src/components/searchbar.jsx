import { useNavigate } from "react-router-dom";

export default function SearchBar({ searchInputRef, isSearching, setSearchQuery, searchQuery }) {
    const navigate = useNavigate();

    function handleSearchSubmit(e) {
        e.preventDefault();
        if (searchQuery) {
            navigate(`/games/${searchQuery}`);
            // Have to set "use" hooks in the body of the component
            // You can't use navigate in the rendered portion because it is equal to useNavigate
        }
    }
    //I still do not fully understand the above, go back to review

    return (
        <div className={`search-bar-container ${isSearching ? "" : "hide"}`}>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="search"
                    placeholder="Search for a specific game"
                    className="search-field"
                    value={searchQuery}
                    onChange={setSearchQuery}
                    ref={searchInputRef}
                />
                <button type="submit" className="search-button">→</button>
            </form>
        </div>
    )
}