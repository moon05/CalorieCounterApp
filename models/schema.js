import appSchema from "@nozbe/watermelondb"
import tableSchema from "@nozbe/watermelondb"

export const mySchema = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'profile',
            columns: [
                { name: 'username', type: 'string' },
                { name: 'height', type: 'number' },
                { name: 'sex', type: 'string' },
                { name: 'starting_weight', type: 'number' },
                { name: 'current_weight', type: 'number' },
                { name: 'goal_weight', type: 'number' },
                { name: 'subtitle', type: 'string', isOptional: true },
            ]
        }),
        tableSchema({
            name: 'weight_log',
            columns: [
                { name: 'date', type: 'date' },
                { name: 'weight', type: 'number' }
            ]
        }),
        tableSchema({
            name: 'type_of_food',
            columns: [
                { name: 'category', type: 'string' },
            ]
        }),
        tableSchema({
            name: 'food',
            columns: [
                { name: 'name', type: 'string' },
                { name: 'calories', type: 'string' },
                { name: 'fat', type: 'string' },
                { name: 'sodium', type: 'string' },
                { name: 'carbohydrates', type: 'string' },
                { name: 'sugar', type: 'string' },
                { name: 'protein', type: 'string' },
                { name: 'type_of_food_id', type: 'string' },
                { name: 'image_src', type: 'string' },

            ]
        }),
        tableSchema({
            name: 'recently_eaten_food',
            columns: [
                { name: 'food_id', type: 'string' },
                { name: 'created_at', type: 'date' },
                { name: 'updated_at', type: 'date' },
                { name: 'number_of_times_added', type: 'number' },

            ]
        }),

        tableSchema({
            name: 'daily_log',
            columns: [
                { name: 'date', type: 'date' },
                { name: 'breakfast', type: 'string' },
                { name: 'lunch', type: 'string' },
                { name: 'dinner', type: 'string' },
                { name: 'snacks', type: 'string' },
                { name: 'water', type: 'number' },
                { name: 'total_carb', type: 'number' },
                { name: 'total_fat', type: 'number' },
                { name: 'total_protein', type: 'number' },
                { name: 'breakfast_net_calories', type: 'number' },
                { name: 'lunch_net_calories', type: 'number' },
                { name: 'dinner_net_calories', type: 'number' },
                { name: 'snacks_net_calories', type: 'number' },
                { name: 'created_at', type: 'date' },
                { name: 'updated_at', type: 'date' },

            ]
        }),
    ]
})