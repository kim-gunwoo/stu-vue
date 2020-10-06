<template>
    <div>
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <button @click="onClickButton('ROCK')">바위</button>
            <button @click="onClickButton('SCISSORS')">가위</button>
            <button @click="onClickButton('PAPER')">보</button>
        </div>
        <div>{{ result }}</div>
        <div>현재 {{ score }}점</div>
    </div>
</template>

<script>
const rspCoords = {
    ROCK: "0",
    SCISSORS: "-142px",
    PAPER: "-284px",
};
const scores = {
    SCISSORS: 1,
    ROCK: 0,
    PAPER: -1,
};
const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
};
let interval = null;
export default {
    data() {
        return {
            imgCoord: rspCoords.ROCK,
            result: "",
            score: 0,
        };
    },
    computed: {
        computedStyleObject() {
            return {
                background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
            };
        },
    },
    methods: {
        changeHand() {
            interval = setInterval(() => {
                if (this.imgCoord === rspCoords.ROCK) {
                    this.imgCoord = rspCoords.SCISSORS;
                } else if (this.imgCoord === rspCoords.SCISSORS) {
                    this.imgCoord = rspCoords.PAPER;
                } else if (this.imgCoord === rspCoords.PAPER) {
                    this.imgCoord = rspCoords.ROCK;
                }
            }, 100);
        },
        onClickButton(choice) {
            clearInterval(interval);
            const myScore = scores[choice];
            const cpuScore = scores[computerChoice(this.imgCoord)];
            const diff = myScore - cpuScore;
            if (diff === 0) {
                this.result = "비겼습니다.";
            } else if ([-1, 2].includes(diff)) {
                this.result = "이겼습니다.";
                this.score += 1;
            } else {
                this.result = "졌습니다.";
                this.score -= 1;
            }
            setTimeout(() => {
                this.changeHand();
            }, 1000);
        },
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    // 컴포넌트가 보여지지만 화면에 나타나기전
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    // 컴포넌트가 보여지고 화면을 그릴때
    mounted() {
        console.log("mounted");
        this.changeHand();
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    // 화면이 다시 그려질때
    updated() {
        console.log("updated");
    },
    beforeDestroy() {
        console.log("beforeDestroy");
        clearInterval(interval);
    },
    // 화면에서 사라질때
    destroyed() {
        console.log("destroyed");
    },
};
</script>

<style scoped>
#computer {
    width: 142px;
    height: 200px;
    background-position: 0 0;
}
</style>
