import { useNavigate } from "react-router-dom";

export default function SearchBar({ searchInputRef, isSearching, setSearchQuery, searchQuery }) {
    const navigate = useNavigate();

    function handleSearchSubmit(e) {
        e.preventDefault();
        if (searchQuery) {
            navigate(`/games/${searchQuery}`);
        }
    }

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