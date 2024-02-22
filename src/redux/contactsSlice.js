import { createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';

const fetchContactsPending = state => {
  state.error = null;
  state.isLoading = true;
};

const fetchContactsRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, fetchContactsPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, fetchContactsRejected)
      .addCase(addContacts.pending, fetchContactsPending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, fetchContactsRejected)
      .addCase(deleteContact.pending, fetchContactsPending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, fetchContactsRejected)
      .addCase(updateContact.pending, fetchContactsPending)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(item => {
          if (item.id != action.payload.id) {
            return item;
          } else {
            return {
              ...item,
              ...action.payload,
            };
          }
        });
      })
      .addCase(updateContact.rejected, fetchContactsRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
