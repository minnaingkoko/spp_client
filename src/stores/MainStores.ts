import { writable } from 'svelte/store';

export const fullImg = writable(false);
export const fullImgUrl = writable('');
export const fullImgName = writable('');
export const fullImgType = writable('');

//employee data

export const employeeData = writable<Array<any>>([]);

export const employeeSearch = writable(false);
export const workerSearchData = writable<any>(null);

export const employeeAdd = writable(false);
export const employeeView = writable(false);

export const employeeRemove = writable(false);
export const employeeRemove_id = writable<any>(null);

export const employeeModify = writable(false);
export const employeeModifyData = writable<any>(null);

export const employeeList = writable(false);
export const employeeList_id = writable<any>(null);

export const HPage1 = writable(true);
export const HPage2 = writable(false);
export const HPage3 = writable(false);
export const HPage4 = writable(false);

//company data

export const companyData = writable<Array<any>>([]);

export const companySearch = writable(false);
export const companyAdd = writable(false);
export const companyView = writable(false);

export const companyRemove = writable(false);
export const companyRemove_id = writable<any>(null);

export const companyModify = writable(false);
export const companyModifyData = writable<any>(null);

export const companyList = writable(false);
export const companyList_id = writable<any>(null);

export const CPage1 = writable(true);
export const CPage2 = writable(false);
export const CPage3 = writable(false);

export const assign = writable(false);

export const assignData = writable<any[]>([]);

export const assignSingle = writable<any>(null);