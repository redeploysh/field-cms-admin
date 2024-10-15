<script>

export default 
    {
    props: {
        title: String,
        create: Boolean,
        edit: Boolean,
        listItems: Object,
        createPath: String,
        editPath: String,
        archivePath: String
    },
    computed: {
        headers() {
            return Object.keys(this.listItems.data[0])
        }
    }
}
</script>

<template>
    <div class="pt-5 pb-5" style="display: flex; width: 100%; justify-content: space-between;">
        <div class="title" v-html="title"></div>
        <div v-if="createPath != ''">
            <a class="button is-primary" :href="createPath">Create {{ title }}</a>
        </div>
    </div>
   
    <VTable :data="listItems.data" class="table is-striped" style="width: 100%">
        <template #head>
            <tr>
                <th class="has-text-weight-bold" v-bind:key="header" v-for="header in headers" v-html="header.toUpperCase()"></th>
                <th class="has-text-weight-bold" style="text-align: right;">ACTIONS</th>
            </tr>
        </template>
        <template #body="{rows}">
            <tr v-for="row in rows" :key="row.email">
                
                <td>
                    <a v-if="editPath != ''" :href="editPath + '/' + row.id">{{ row.id }}</a>
                    <span v-if="editPath == ''">{{ row.id }}</span>
                </td>
                <td>
                    <a v-if="editPath != ''" :href="editPath + '/' + row.id">{{ row.name }}</a>
                    <span v-if="editPath == ''">{{ row.name }}</span>
                </td>
                <td style="text-align: right;">
                    <a v-if="archivePath != ''" :href="archivePath + '/' + row.name">archive</a>
                </td>
            </tr>
        </template>
    </VTable>
</template>