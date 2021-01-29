import Model from '@nozbe/watermelondb'
import field from '@nozbe/watermelondb/decorators'
import date from '@nozbe/watermelondb/decorators'

export default class DailyLog extends Model {
    static table = 'daily_log'

    @date('date') date
    @field('breakfast') breakfast
    @field('lunch') lunch
    @field('dinner') dinner
    @field('snacks') snacks
    @field('water') water
    @field('total_carb') total_carb
    @field('total_fat') total_fat
    @field('total_protein') total_protein
    @field('breakfast_net_calories') breakfast_net_calories
    @field('lunch_net_calories') lunch_net_calories
    @field('dinner_net_calories') dinner_net_calories
    @field('snacks_net_calories') snacks_net_calories
    @date('created_at') created_at
    @date('updated_at') updated_at

}