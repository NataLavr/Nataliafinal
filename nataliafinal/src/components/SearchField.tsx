import {setSearchField} from "./Types";

interface SearchFieldProps {
    searchItem: string,
    setSearchItem: setSearchField,
}

export default function SearchField ({searchItem, setSearchItem}: SearchFieldProps) {
    return (
        <>
            <input className="inputField" type='text' placeholder='Search' value={searchItem} onChange={e => {setSearchItem(e.target.value);}}/>
        </>
    )
}