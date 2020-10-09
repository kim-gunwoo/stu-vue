/*
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({});
*/

import Vue from "vue";
import VueRouter from "vue-router";
import NumberBaseball from "../3.NumberBaseball/NumberBaseball";
import ResponseCheck from "../4.ResponceCheck/ResponceCheck";
import RockScissorsPaper from "../5.RockScissorsPaper/RockScissorsPaper";
import LottoGenerator from "../6.LottoBall/LottoGenerator";
import GameMatcher from "./GameMatcher";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history", // mode 지정을 하지 않을 경우 hash 라우터
    routes: [
        { path: "/number-baseball", component: NumberBaseball },
        { path: "/response-check", component: ResponseCheck },
        { path: "/rock-scissors-paper", component: RockScissorsPaper },
        { path: "/lotto-generator", component: LottoGenerator },
        { path: "/game/:name", component: GameMatcher }, // /game
    ],
});
