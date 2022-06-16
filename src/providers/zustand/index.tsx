import create, { StoreApi } from "zustand";

export type SideBarStateProps = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

export const SideBarState: StoreApi<SideBarStateProps> = create((set) => ({
  isOpen: false,
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
}));
