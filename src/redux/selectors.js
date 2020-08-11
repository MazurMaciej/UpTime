import { getSortedData } from './../helpers/dataProcessing';

export const getLoadingStatus = state => state.loadingUsers || state.loadingUser;
export const getError = state => state.error;
export const getUsers = state => state.users;
export const getUserData = state => getSortedData(state.user?.data);
export const getUserLogo = state => state.user?.logo;
export const getUserName = state => state.user?.name;
