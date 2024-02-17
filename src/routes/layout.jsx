import { createContext, useContext, useEffect, useState} from "react";
import { Outlet, useLocation, } from "react-router-dom";
import { convertFilterToLink } from "../utilities/helper-functions";
import { filterOptions } from "../utilities/filter-options";
import PageButtons from "../components/pagebuttons";
import HeaderBar from "../components/headerbar";

const DealDataContext = createContext();

export default function Layout() {
    const baseAPILink = "https://www.cheapshark.com/api/1.0/deals?";
    const onSale = "&onSale=1"
    const hideDuplicates = "&hideDuplicates=1";
    const [dealData, setDealData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [filter, setFilter] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        getDealData();
        window.scrollTo(0, 0); //scroll to top after data is rendered
    }, [pageNumber, filter]);
    //This useEffect function is related only to fetching data
    //Rerender the page when a user goes the next or previous page
    //Rerender the page when a user filters the deals

    async function getDealData() {
        const response = await fetch(baseAPILink + convertFilterToLink(filter, filterOptions) + onSale + "&pageNumber=" + pageNumber + hideDuplicates);
        //Build API request in parts to allow user to select filters
        //"convertFilterToLink(filter)" converts an array value into the corresponding link for the API request
        if (response.status === 200) {
            const dealData = await response.json();
            setDealData(dealData);
            setIsLoading(false);
        } else {
            console.log("Error fetching data, response status: " + response.status);
        }
    }
    //Fetches data using Cheap Shark's free API
    //The API link is broken into separate parts to make filtering and page number changes easier

    function getPreviousPage() {
        if (pageNumber !== 0) {
            setPageNumber(pageNumber - 1);
            setIsLoading(true);
        }
    }
    
    function getNextPage() {
        setPageNumber(pageNumber + 1);
        setIsLoading(true);
    }

    function firstPage() {
        if (pageNumber !== 0) {
            setPageNumber(0);
            setIsLoading(true);
        }
    }

    function handleFilter(e) {
        setFilter(e.target.value);
        setIsLoading(true);
    }
    //This sets the state of the filter to an empty string, deselecting the current radio button

    function handleClear() {
        if (filter !== "") {
            setFilter("");
        }
    }
    //This sets the filter value based on the radio button that is clicked in the filter menu

    return (
        <DealDataContext.Provider value={dealData}>
            {/* Wrap the entire component with data context so that child components can access
                the data -- eliminates the need to continually pass dealData as props to each of the
                nested components. */}

            <HeaderBar
                firstPageFunction={firstPage}
                handleFilter={handleFilter}
                filter={filter}
                location={location}
                handleClear={handleClear}
            ></HeaderBar>

            {/* When the isLoading state is false, show the content, when it is true, show Loading */}
            {!isLoading ?
                <main>

                    <PageButtons
                        pageNumber={pageNumber}
                        previousPageFunction={getPreviousPage}
                        nextPageFunction={getNextPage}
                        location={location}
                    ></PageButtons>

                    <div id="outlet-body">
                        <Outlet />
                    </div>

                    <PageButtons
                        pageNumber={pageNumber}
                        previousPageFunction={getPreviousPage}
                        nextPageFunction={getNextPage}
                        location={location}
                    ></PageButtons>

                </main>
                : <h1 className="loading">Loading...</h1>}

        </DealDataContext.Provider>
        //wrap the entire layout in the data context for children to access
    )
}

export function useDealData() {
    return useContext(DealDataContext);
}