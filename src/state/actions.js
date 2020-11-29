export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_STEP    = "UPDATE_STEP";

let nextTodoId = 0;

export const updateBusinessType = businessType => ({
  type: UPDATE_PROFILE,
  payload: {
    businessType
  }
});


export const updateCategories = categories => ({
  type: UPDATE_PROFILE,
  payload: {
    categories
  }
});

export const updateName = name => ({
  type: UPDATE_PROFILE,
  payload: {
    name
  }
});

export const updatePhone = phoneNumber => ({
  type: UPDATE_PROFILE,
  payload: {
    phoneNumber
  }
});

export const updateEmail = email => ({
  type: UPDATE_PROFILE,
  payload: {
    email
  }
});

export const updateStep = step => ({
  type: UPDATE_STEP,
  payload: {
    step
  }
});
