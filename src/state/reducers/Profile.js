export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_STEP = "UPDATE_STEP";

const initialState = {
  Profile:{
      businessType:'',
      categories:'',
      name:'',
      email:'',
      phoneNumber:'',
  },
  Step:1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STEP: {
      const { step } = action.payload;
      return {
        ...state,
        Step:step
      };
    }
    case UPDATE_PROFILE: {
      const { businessType,categories,name,email,phoneNumber } = action.payload;
      return {
        ...state,
        Profile: {
          ...state.Profile,
          businessType: businessType  ? businessType:state.Profile.businessType,
          categories:   categories    ? categories.categories:state.Profile.categories,
          name:         name          ? name.name:state.Profile.name,
          email:        email         ? email.email:state.Profile.email,
          phoneNumber:  phoneNumber   ? phoneNumber.phoneNumber:state.Profile.phoneNumber,
        }
      };
    }
    default:
      return state;
  }
}
