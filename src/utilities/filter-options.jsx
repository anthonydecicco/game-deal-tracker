export const filterOptions = [
    { value: "low-to-high", label: "Price Low to High", link: "&sortBy=price"},
    { value: "high-to-low", label: "Price High to Low", link: "&sortBy=price&desc=1" },
    { value: "a-to-z", label: "A to Z", link: "&sortBy=title"},
    { value: "z-to-a", label: "Z to A", link: "&sortBy=title&desc=1" },
    { value: "meta-high-to-low", label: "Metacritic High to Low", link: "&sortBy=metacritic"},
    { value: "meta-low-to-high", label: "Metacritic Low to High", link: "&sortBy=metacritic&desc=1" }
]
//Created an object of filter options to make comparing values to links easy
//When a filter is chosen (based on value), the appropriate label displays
//and the appropriate link is concatenated within the getDealData function below