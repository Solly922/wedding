import { create } from "zustand";
import { useLenis } from "lenis/react";

interface StoreState {
  lenis: ReturnType<typeof useLenis>;
  setLenis: (lenis: ReturnType<typeof useLenis>) => void;
  overflow: boolean;
  setOverflow: (overflow: any) => void;
  triggerTransition: any;
  setTriggerTransition: (triggerTransition: any) => void;
  thresholds: any;
  addThreshold: ({ id, value }: any) => void;
  introOut: boolean;
  setIntroOut: (introOut: boolean) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  lenis: undefined,
  setLenis: (lenis: ReturnType<typeof useLenis>) => set({ lenis }),
  overflow: true,
  setOverflow: (overflow: any) => set({ overflow }),
  triggerTransition: "",
  setTriggerTransition: (triggerTransition: any) => set({ triggerTransition }),
  thresholds: {},
  addThreshold: ({ id, value }: any) => {
    let thresholds = { ...(get() as any).thresholds };
    thresholds[id] = value;

    set({ thresholds });
  },
  introOut: false,
  setIntroOut: (introOut: boolean) => set({ introOut }),
}));
