import {
  ref
} from '../firebase';

export function listenToProductList({
  commit
}) {
  return ref.child("products").on('value', (products) => {
    commit('UPDATE_PRODUCTS_LIST', products.val());
  });
}