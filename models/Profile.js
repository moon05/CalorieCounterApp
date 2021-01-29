import Model from '@nozbe/watermelondb'
import field from '@nozbe/watermelondb/decorators'

export default class Profile extends Model {
    static table = 'profile'

    @field('username') username
    @field('height') height
    @field('sex') sex
    @field('starting_weight') starting_weight
    @field('current_weight') current_weight
    @field('goal_weight') goal_weight

}