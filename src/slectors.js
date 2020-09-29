import {createSelector} from 'reselect';

const getListSelector = (state) => state.list;
const getTeacherSelector = (state) => state.teacher;

export {getListSelector, getTeacherSelector}
