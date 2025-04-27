import { create } from 'zustand';

export const useWebsiteStore = create((set) => ({

    scrollToOverView: false,
    scrollToAbout: false,
    scrollToContact: false,

    setScrollToContact: (input) => set({ scrollToContact: input}),
    setScrollToAbout: (input) => set({ scrollToAbout: input}),
    setScrollToOverview: (input) => set({ scrollToOverview: input}),

}))