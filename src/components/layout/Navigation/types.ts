export interface NavigationItem {
  title: string;
  link: string;
}

export interface NavigationProps {
  items: NavigationItem[];
  selectedPath?: string;
}
