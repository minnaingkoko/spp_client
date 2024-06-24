import { writable } from 'svelte/store';

export const workerData = writable<Array<any>>([]);

export const workerSearch = writable(false);
export const workerSearchData = writable<any>(null);

export const workerAdd = writable(false);
export const workerView = writable(false);

export const workerRemove = writable(false);
export const workerRemove_id = writable<any>(null);

export const workerModify = writable(false);
export const workerModifyData = writable<any>(null);

export const workerList = writable(false);
export const workerList_id = writable<any>(null);
