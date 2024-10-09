import { create } from "zustand";

interface State {
  activeId: number;
  setActiveId: (id: number) => void;
}

export const useSetActiveCategory = create<State>()((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
}));
