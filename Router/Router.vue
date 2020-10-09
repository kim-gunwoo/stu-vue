<!--
<template>
    <div></div>
</template>

<script>
export default {
    props: {},
    data() {
        return;
    },
    computed: {},
    methods: {},
    beforeCreate() {},
    created() {}, // 컴포넌트가 보여지지만 화면에 나타나기전
    beforeMount() {},
    mounted() {}, // 컴포넌트가 보여지고 화면을 그릴때
    beforeUpdate() {},
    updated() {}, // 화면이 다시 그려질때
    beforeDestroy() {},
    destroyed() {}, // 화면에서 사라질때
    watch: {},
};
</script>

<style scoped></style>
-->

<template>
    <div>
        <div>
            <router-link to="/game">게임 매쳐</router-link>
            <router-link
                to="/game/number-baseball?pages=3&offset=10&limit=1&sort=createdAt"
                >숫자야구</router-link
            >
            <router-link to="/game/response-check">반응속도</router-link>
            <router-link to="/game/rock-scissors-paper">가위바위보</router-link>
            <router-link to="/rock-scissors-paper">가위바위보</router-link>
            <router-link to="/game/lotto-generator">로또생성기</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import router from "./routes";
export default {
    router,
    props: {},
    data() {
        return;
    },
    computed: {},
    methods: {},
    beforeCreate() {},
    created() {}, // 컴포넌트가 보여지지만 화면에 나타나기전
    beforeMount() {},
    mounted() {}, // 컴포넌트가 보여지고 화면을 그릴때
    beforeUpdate() {},
    updated() {}, // 화면이 다시 그려질때
    beforeDestroy() {},
    destroyed() {}, // 화면에서 사라질때
    watch: {},
};
</script>

<style scoped>
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
