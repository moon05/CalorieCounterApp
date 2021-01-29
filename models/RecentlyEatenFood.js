import Model from '@nozbe/watermelondb'
import field from '@nozbe/watermelondb/decorators'
import date from '@nozbe/watermelondb/decorators'


export default class RecentlyEatenFood extends Model {
    static table = 'recently_eaten_food'

    @field('food_id') food_id
    @date('created_at') created_at
    @date('updated_at') updated_at
    @field('number_of_times_added') number_of_times_added

}