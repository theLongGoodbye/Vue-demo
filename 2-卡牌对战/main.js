new Vue({
    name: 'game',
    el: '#app',
    template: `<div id="#app"> 
     <top-bar :turn="turn" :current-player-index="currentPlayerIndex" 
:players="players" />
    <card :def="testCard" @play="handlePlay"/>
    <hand :cards="testHand" />
     </div>`,
    data: state,
    computed: { 
        testCard() { 
        return cards.archers 
        }, 
    },
    methods: { 
        handlePlay() { 
            console.log('You played a card!') 
        },
        createTestHand() { 
            const cards = [] 
            // 遍历获取卡牌的 id 
            const ids = Object.keys(cards) 
            // 抽取 5 张卡牌
            for (let i = 0; i < 5; i++) { 
            cards.push(this.testDrawCard()) 
            } 
            return cards 
        },
        testDrawCard() { 
            // 使用 id 随机选取一张卡牌
            const ids = Object.keys(cards) 
            const randomId = ids[Math.floor(Math.random() * ids.length)] 
            // 返回一张新的卡牌
            return { 
            // 卡牌的唯一标识符
            uid: cardUid++, 
            // 定义的 id 
            id: randomId, 
            // 定义对象
            def: cards[randomId], 
            } 
        },
    },
    created() { 
        this.testHand = this.createTestHand() 
       },

})

window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio()
})