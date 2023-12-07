export default interface FoodMenu {
    id: number;
    name: string;
    description: string;
}

export type setSearchField = (searchItem: string) => void;