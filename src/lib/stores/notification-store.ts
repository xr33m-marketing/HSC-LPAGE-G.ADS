import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface NotificationStore {
  shown: boolean;
  setShown: (shown: boolean) => void;
  lastShown?: number;
  service?: string;
  setService: (service: string) => void;
  popupCount: number;
  incrementPopupCount: () => void;
  resetPopupCount: () => void;
}

export const useNotificationStore = create<NotificationStore>()(
  persist(
    (set) => ({
      shown: false,
      service: undefined,
      popupCount: 0,
      setShown: (shown) => set({ 
        shown, 
        lastShown: shown ? Date.now() : undefined,
        popupCount: shown ? (state => state.popupCount + 1) : (state => state.popupCount)
      }),
      setService: (service) => set({ service }),
      incrementPopupCount: () => set((state) => ({ popupCount: state.popupCount + 1 })),
      resetPopupCount: () => set({ popupCount: 0 }),
    }),
    {
      name: 'notification-store',
      partialize: (state) => ({ 
        lastShown: state.lastShown,
        popupCount: state.popupCount 
      }),
    }
  )
);