export default function PageButtons({ pageNumber, previousPageFunction, nextPageFunction, location }) {
    return (
        !location.pathname.includes('game/') && !location.pathname.includes(`games/`) && (
            <div className="page-button-container">
                <button className={`arrow-button ${!(pageNumber === 0) ? "" : "hide"}`} onClick={previousPageFunction}>←</button>
                <button className={`arrow-button ${!(pageNumber === 0) ? "" : "align-right"}`} onClick={nextPageFunction}>→</button>
            </div>
        )
    )
}