import { create } from 'zustand';

type ImagesState = {
  imageUrls: string[];
  updateImages: (urls: string[]) => void;
};

export const useImagesStore = create<ImagesState>((set) => ({
  imageUrls: [],
  updateImages: (urls: string[]) =>
    set((state) => ({
      imageUrls: Array.from(new Set([...urls, ...state.imageUrls])),
    })),
}));
