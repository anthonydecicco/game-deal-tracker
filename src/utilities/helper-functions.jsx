export function convertFilterToLink(filter, filterOptions) {
    const matchingFilter = filterOptions.find(filterOption => filterOption.value === filter);
    
    if (matchingFilter) {
        return matchingFilter.link;
    }
    else {
        return "";
    }
}
//This matches the current filter (from the radio button) with it's corresponding link within the
//filterOptions array

//Logic: For each filterOption, check to see if there is a match between the selected filter
//       and the filterOption's value. If there is a match, set matchingFilter equal to the object in
//       the filterOptions array that has the same value as the selected filter. If matchingFilter
//       contains information, then return the matchingFilter's link (a string). If there wasn't a
//       match, then return an empty string.