// Some usefull variables
var maxHealth = 10
var maxFood = 10
var handSize = 5
var cardUid = 0
var currentPlayingCard = null

// 应用状态集合
var state = {
  // World
  worldRatio: getWorldRatio(),
  // TODO Other things
  turn: 1,
  players: [
    {
      name: '我',
    },
    {
      name: '对手',
    },
  ],
  currentPlayerIndex: Math.round(Math.random()),
  testHand: [],
  activeOverlay: null,
}
