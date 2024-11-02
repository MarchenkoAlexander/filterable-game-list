import { useState } from "react";
import GameList from "../game-list";
import { SearchBar } from "../search-bar";

export default function FilterableGameList({ games = [] }) {
    const [filterText, setFilterText] = useState('');
    const [inWishListOnly, setInWishListOnly] = useState(false);
    return (
        <div className="filterable-game-list">
            <SearchBar
                filterText={filterText}
                inWishListOnly={inWishListOnly}
                setInWishListOnly={setInWishListOnly}
                setFilterText={setFilterText}
            />
            <GameList
                games={games}
                filterText={filterText}
                inWishListOnly={inWishListOnly}
            />
        </div>
    )
}
