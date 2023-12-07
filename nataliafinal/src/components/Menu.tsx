import { foods } from './Data';
import MenuItem from "./MenuItem";
import FoodMenu from "./Types";

interface MenuProps {
    searchItem: string;
}

const Menu = ({ searchItem }: MenuProps) => {
    const filteredItems = foods.filter((item: FoodMenu) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    const renderMenuItems = () => {
        return filteredItems.map((item: FoodMenu) => (
            <MenuItem key={item.id} item={item} searchItem={searchItem} />
        ));
    };

    return (
        <div>
            <h3 className="choice">Food choices</h3>
            <div className="menu-title">{renderMenuItems()}</div>
        </div>
    );
};

export default Menu;
