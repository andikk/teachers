export const initialState = {
  list: [],
  teacher: {}
};

const ActionType = {
  SET_LIST: `SET_LIST`,
  SET_TEACHER: `SET_TEACHER`
};

const ActionCreator = {
  setList: (payload) => ({
    type: ActionType.SET_LIST,
    payload,
  }),

  setTeacher: (payload) => ({
    type: ActionType.SET_TEACHER,
    payload,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LIST:
      return Object.assign({}, state, {
        list: action.payload,
      });
    case ActionType.SET_TEACHER:
      return Object.assign({}, state, {
        teacher: action.payload,
      });
    default: return state;
  }
};


const Operation = {
  loadList: () => (dispatch, getState, api) => {
    return api.get(`list.json`)
      .then((response) => {
        dispatch(ActionCreator.setList(response.data));
      });
  },

  loadTeacher: () => (dispatch, getState, api) => {
    return api.get(`teacher.json`)
      .then((response) => {
        dispatch(ActionCreator.setTeacher(response.data));
      });
  },
};

export {ActionCreator, ActionType, Operation, reducer}