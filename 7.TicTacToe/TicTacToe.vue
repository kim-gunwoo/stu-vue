<template>
    <div>
        <div>{{ turn }}님의 턴입니다.</div>
        <table-component :table-data="tableData" />
        <div v-if="winner">{{ winner }}님의 승리!</div>
    </div>
</template>

<script>
// import Vue from "vue";
import TableComponent from "./TableComponent";
export default {
    components: {
        TableComponent,
    },
    data() {
        return {
            tableData: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
            ],
            turn: "O",
            winner: "",
        };
    },
    methods: {
        onChangeData() {
            // this.tableData[1][0] = 'X'; 작동하지 않음
            // Vue.set(this.tableData[1], 0, "X"); 위에 import Vue from "vue";를 추가해야 사용이 가능함
            this.$set(this.tableData[1], 0, "X"); // Vue.set과 동일
        },
    },
};
</script>

<style>
table {
    border-collapse: collapse;
}
td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
}
</style>
