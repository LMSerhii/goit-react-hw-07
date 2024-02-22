import { createSelector } from '@reduxjs/toolkit';
import { search } from '../helpers/searchFunction';

export const selectQuery = state => state.filters.name;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectQuery],
  (contacts, query) => {
    return search(contacts, query);
  }
);
