export interface Category {
  id: string;
  label: string;
}

export interface CategoryGroup {
  title: string;
  items: Category[];
}

export interface NavigationProps {
  groups: CategoryGroup[];
  selectedId?: string;
  onSelect?: (category: Category) => void;
}
