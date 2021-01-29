import Model from '@nozbe/watermelondb'
import field from '@nozbe/watermelondb/decorators'


export default class TypeOfFood extends Model {
    static table = 'type_of_food'

    @field('category') category

}