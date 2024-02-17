import { filterOptions } from "../utilities/filter-options"

export default function FilterBar({location, filter, isFiltering, handleFilter, handleClear}) {

    return (
        <>
            {!location.pathname.includes('game/') && !location.pathname.includes(`games/`) && (
                <div className={`filter-dropdown-container ${isFiltering ? "" : "hide"}`}>
                    <ul className="filter-options-list">
                        {filterOptions.map(option => (
                            <li key={option.value} >
                                <label>
                                    <input
                                        type="radio"
                                        name="filter"
                                        value={option.value}
                                        onChange={handleFilter}
                                        checked={filter === option.value}
                                    />
                                    {option.label}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button className="search-button" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            )}
        </>
    )
}