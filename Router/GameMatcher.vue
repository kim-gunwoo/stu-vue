<template>
    <div v-if="currentGame === 'number-baseball'">
        <number-baseball></number-baseball>
    </div>
    <div v-else-if="currentGame === 'response-check'">
        <response-check></response-check>
    </div>
    <div v-else-if="currentGame === 'lotto-generator'">
        <lotto-generator></lotto-generator>
    </div>
    <div v-else>일치하는 게임이 없습니다</div>
</template>

<script>
import NumberBaseball from "../3.NumberBaseball/NumberBaseball";
import ResponseCheck from "../4.ResponceCheck/ResponceCheck";
import LottoGenerator from "../6.LottoBall/LottoGenerator";

export default {
    components: {
        NumberBaseball,
        ResponseCheck,
        LottoGenerator,
    },
    mounted() {
        // Vue  전체 라우터 정보
        console.log(this.$router);
        // Vue 현재 주소 라우터 정보
        console.log(this.$route);
        // 쿼리스트링 데이터
        console.log(this.$route.query);
    },
    computed: {
        currentGame() {
            return this.$route.params.name;
        },
    },
};
</script>
