import { create } from 'zustand';

type CreateWorkspaceValues = {
  name: string;
  imageUrl: string;
  updateImageUrl: (url: string) => void;
  updateValues: (values: Partial<CreateWorkspaceValues>) => void;
  currStep: number;
  setCurrStep: (step: number) => void;
};

export const useCreateWorkspaceValues = create<CreateWorkspaceValues>(
  (set) => ({
    name: '',
    imageUrl: '',
    updateImageUrl: (url: string) => set({ imageUrl: url }),
    updateValues: (values: Partial<CreateWorkspaceValues>) => set(values),
    currStep: 1,
    setCurrStep: (step: number) => set({ currStep: step }),
  })
);
