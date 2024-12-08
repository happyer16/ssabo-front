// src/components/layout/MobileNavigation/types.ts
import {Category} from "@/src/components/layout/Navigation/types";

export interface MobileNavigationItem {
  id: string;
  label: string;
  icon: string;
}

export interface MobileNavigationProps {
  selectedId?: string;
  onSelect?: (category: Category) => void;  // Category 타입 재사용
}
