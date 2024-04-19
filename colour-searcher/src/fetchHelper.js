export const getColourData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();

    if(result && result.colors) {
        return result.colors;
    }
    throw new Error(`HTTP error: Status ${response.status}`);
}