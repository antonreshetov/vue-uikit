<template>
    <vu-table :source="tableData"  >
        <vu-table-column col="date" label="Date"></vu-table-column>
        <vu-table-column col="name" label="Name"></vu-table-column>
        <vu-table-column col="address" label="Name"></vu-table-column>
        <vu-table-column col="age" label="Name"></vu-table-column>
        <vu-table-column label="Buttons">
            <button>sds</button>
        </vu-table-column>
    </vu-table>
</template>
<style lang="scss">
@import "../node_modules/uikit/dist/css/uikit";
</style>
<script>
export default {
    data () {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'Lorem 1',
                    age: 23
                }, {
                    date: '2016-05-02',
                    name: 'Mike',
                    address: 'Lorem 2',
                    age: 19
                }, {
                    date: '2016-05-04',
                    name: 'John',
                    address: 'Lorem 3',
                    age: 25
                }, {
                    date: '2016-05-01',
                    name: 'Smith',
                    address: 'Lorem 4',
                    age: 30
                }
            ]
        }
    }
}
</script>
