import Model from '@nozbe/watermelondb'
import field from '@nozbe/watermelondb/decorators'
import date from '@nozbe/watermelondb/decorators'


export default class WeightLog extends Model {
    static table = 'weight_log'

    @date('date') date
    @field('weight') weight

}