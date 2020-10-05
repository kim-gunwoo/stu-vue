<template>
    <div>
        <!--<div id="screen" v-bind:class="state" v-on:click="onClickScreen">-->
        <div id="screen" :class="state" @click="onClickScreen">
            {{ message }}
        </div>
        <!--
            값이 true 가 아닐때 
            v-show 는 태그가 존재함
            <template v-show="result.length"> 
            v-if 는 태그 자체가 존재하지 않음
            template 는 div 대신 사용할 수 있음 불필요한 태그 제거
            연속적으로 template 으로 감쌀수 없음
        -->
        <template v-if="result.length">
            <div>평균 시간: {{ average }}ms</div>
            <button @click="onReset">리셋</button>
        </template>
    </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
export default {
    data() {
        return {
            result: [],
            state: "waiting",
            message: "클릭해서 시작하세요.",
        };
    },
    // 데이터를 가공할때 캐싱 처리하여 리로드시 성능최적화
    computed: {
        average() {
            return (
                this.result.reduce((a, c) => a + c, 0) / this.result.length || 0
            );
        },
    },
    methods: {
        onReset() {
            this.result = [];
        },
        onClickScreen() {
            if (this.state === "waiting") {
                this.state = "ready";
                this.message = "초록색이 되면 클릭하세요.";
                timeout = setTimeout(() => {
                    this.state = "now";
                    this.message = "지금 클릭!";
                    startTime = new Date();
                }, Math.floor(Math.random() * 1000) + 2000);
            } else if (this.state === "ready") {
                clearTimeout(timeout);
                this.state = "waiting";
                this.message =
                    "너무 성급하시군요! 초록색이 된 후에 클릭하세요.";
            } else if (this.state === "now") {
                endTime = new Date();
                this.state = "waiting";
                this.message = "클릭해서 시작하세요.";
                this.result.push(endTime - startTime);
            }
        },
    },
};
</script>

<!-- scoped 해당 컴포넌트에만 유효 -->
<style scoped>
#screen {
    width: 300px;
    height: 200px;
    text-align: center;
    user-select: none;
}
#screen.waiting {
    background-color: aqua;
}
#screen.ready {
    background-color: red;
    color: white;
}
#screen.now {
    background-color: greenyellow;
}
</style>
