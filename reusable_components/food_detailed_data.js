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

const duck = {
  name: 'Duck',
  calories: 119,
  fat: 2,
  sodium: 89,
  carbohydrates: 0,
  sugar: 0,
  protein: 23.50,
  imageSRC: AHI_TUNA,
  typeOfFood: 'protein',
  weight: 85
}

const lobster = {
  name: 'Lobster',
  calories: 129,
  fat: 1.3,
  sodium: 705,
  carbohydrates: 0,
  sugar: 0,
  protein: 27.6,
  imageSRC: AHI_TUNA,
  typeOfFood: 'protein',
  weight: 145
}

const shrimp = {
  name: 'Shrimp',
  calories: 76,
  fat: 1,
  sodium: 292,
  carbohydrates: 0,
  sugar: 0,
  protein: 15,
  imageSRC: SHRIMP,
  typeOfFood: 'protein',
  weight: 85
}

const salmon = {
  name: 'Salmon',
  calories: 121,
  fat: 5.4,
  sodium: 37.4,
  carbohydrates: 0,
  sugar: 0,
  protein: 17,
  imageSRC: SALMON,
  typeOfFood: 'protein',
  weight: 85
}

export const FOOD_OBJECTS = {
  ribEye,
  rainbowTrout,
  duck,
  lobster,
  salmon,
  shrimp
}
