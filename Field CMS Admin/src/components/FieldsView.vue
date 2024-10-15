<script>
import ListView from './ListView.vue'
export default {
    components: {
        'List': ListView
    },
    data: () => {
        return {
            listItems: {
                data: [
                    {
                        name: 'test',
                        age: 23,
                        email: 'test@test.com'
                    },
                    {
                        name: 'test2',
                        age: 44,
                        email: 'test@testsdf.com'
                    }
                ],
                filters: {
                    name: { value: '', keys: ['name'] }
                }
            }
        }
    }
}

</script>

<template>
    <List title="Fields" :create=true :listItems="listItems"></List>
</template>
