import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); // this.$store
// Vue.use(axios); // this.$axios

export const SET_WINNER = "SET_WINNER"; // import { SET_WINNER, CLICK_CELL, CHANGE_TURN } from './store';
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";
export const NO_WINNER = "NO_WINNER";

export default new Vuex.Store({
    // import store from './store';
    state: {
        tableData: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ],
        turn: "O",
        winner: "",
    }, // vue의 data와 비슷
    getters: {
        turnMessage(state) {
            return state.turn + "님이 승리하셨습니다.";
        },
    }, // vue의 computed와 비슷
    mutations: {
        // SET_WINNER(state, winner)
        [SET_WINNER](state, winner) {
            state.winner = winner;
        },
        [CLICK_CELL](state, { row, cell }) {
            /*
            state.tableData[row, cell] = state.turn 
            화면이 변하지 않음 Vue.set을 사용해야함
            */
            Vue.set(state.tableData[row], cell, state.turn);
        },
        [CHANGE_TURN](state) {
            state.turn = state.turn === "O" ? "X" : "O";
        },
        [RESET_GAME](state) {
            state.turn = "O";
            state.tableData = [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
            ];
        },
        [NO_WINNER](state) {
            state.winner = "";
        },
    }, // state를 수정할 때 사용. 동기적
    actions: {}, // 비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할 때
});
