import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContacts: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: values => {
        return {
          payload: {
            ...values,
            id: nanoid(),
          },
        };
      },
    },

    deleteContacts: (state, action) => {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const getContacts = state => state.contacts.items;
