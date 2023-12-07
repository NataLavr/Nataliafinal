import FoodMenu from "./Types";

interface MenuItemProps {
    item: FoodMenu;
    searchText: string;
}

const MenuItem = ({ item, searchText }: MenuItemProps) => {
    const highlightText = (text: string, highlight: string) => {
        highlight = highlight || '';
      
        if (!highlight.trim()) {
          return text;
        }
        const regex = new RegExp(`(${highlight})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) =>
          regex.test(part) ? <mark key={index}>{part}</mark> : part
        );
      };
      

    return (
        <div className="menu-item">
            <h2>{highlightText(item.name, searchText)}</h2>
            <p>{highlightText(item.description, searchText)}</p>
        </div>
    );
};

export default MenuItem;
