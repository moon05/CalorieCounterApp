import Model from '@nozbe/watermelondb'
import field from '@nozbe/watermelondb/decorators'

export default class Food extends Model {
    static table = 'food'

    @field('name') name
    @field('calories') calories
    @field('fat') fat
    @field('sodium') sodium
    @field('carbohydrates') carbohydrates
    @field('sugar') sugar
    @field('protein') protein
    @field('type_of_food_id') type_of_food_id
    @field('image_src') image_src

}