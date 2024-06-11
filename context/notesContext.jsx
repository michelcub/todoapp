import { create } from "zustand";

const useNotesContext = create((set, get) => ({
    list: [],
    filtered: [],

    search: (value) => {
        const state = get();
        const filtered = state.list.filter(note => {
            return note.id.includes(value) || note.title.includes(value) || note.data.includes(value);
        });
        set({ filtered });
        if(!filtered.length){
            return []
        }
    },

    add: (value) => {
        set((state) => ({
            list: [...state.list, value]
        }));
    },
}));

export default useNotesContext;
