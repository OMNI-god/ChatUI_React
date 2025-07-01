export default function SearchBar({ searchValue, dispatch }) {
    function handleInputchage(event) {
        dispatch({type:"search",value:event.target.value});
    }
    return (
        <input className="bg-gray-200 w-full px-2 py-2 rounded-full my-1" value={searchValue} onChange={handleInputchage} placeholder="Search" />
    )
}