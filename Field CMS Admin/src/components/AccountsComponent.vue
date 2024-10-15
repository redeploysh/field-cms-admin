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
                        id: 'field-cms-application',
                        name: 'Field CMS Application'
                    }
                ],
                filters: {
                    name: { value: '', keys: ['id', 'name'] }
                }
            }
        }
    }
}

</script>

<template>
    <List 
        title="Accounts" 
        :listItems="listItems" 
        :createPath="'accounts/create'" 
        :editPath="'accounts/edit'" 
        :archivePath="'accounts/archive'"
    ></List>
</template>
