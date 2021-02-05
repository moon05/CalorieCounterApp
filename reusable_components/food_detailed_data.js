import {
  CHICKEN_BREAST, CHICKEN_DRUMSTICK, CHICKEN_THIGH,
  HAM, LAMB_SHANK, PORK_CHOP, RIB_EYE, VENISON, AHI_TUNA,
  COD, HALIBUT, MASHED_POTATOES, MASHED_SWEET_POTATOES,
  SALMON, SHRIMP
} from '../images'

const ribEye = {
  name: 'Rib Eye',
  calories: 199,
  fat: 10.8,
  sodium: 50.2,
  carbohydrates: 0,
  sugar: 0,
  protein: 23.8,
  imageSRC: RIB_EYE,
  typeOfFood: 'protein',
  weight: 85
}

const rainbowTrout = {
  name: 'Rainbow Trout',
  calories: 103,
  fat: 2.94,
  sodium: 41,
  carbohydrates: 0,
  sugar: 0,
  protein: 17.4,
  imageSRC: AHI_TUNA,
  typeOfFood: 'protein',
  weight: 85
}

export const FOOD_OBJECTS = {
  ribEye,
  rainbowTrout
}
