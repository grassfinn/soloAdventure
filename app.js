// create game function

// https://homebrewery.naturalcrit.com/share/rkmo0t9k4Q
// https://dndsolo.com/posts/solo-dnd-guide/

const game = {
  oracle: [
    'No, and...',
    'No',
    'No, but...',
    'Yes, but...',
    'Yes',
    'Yes, and...',
  ],
  intervention: [
    'New entity',
    'Positive Entity',
    'Negative Entity',
    'Advance Plot',
    'Regress Plot',
    'Wild',
  ],
  npcAttitude: ['Hostile', 'Neutral', 'Friendly'],
  randomChallenge: [
    'Increase Simple Element',
    'Decrease Simple Element',
    'Add Simple Element',
    'Increase Major Element',
    'Decrease Major Element',
    'Add Major Element',
    'Remove Major Element',
    'Wild Positive',
    'Wild Negative',
  ],
  roll: function (arr) {
    const arrLength = arr.length;
    const roll = arr[Math.floor(Math.random() * arrLength)];
    console.log(roll);
    return roll;
  },
};

const { oracle, intervention, npcAttitude, randomChallenge } = game;

game.roll(randomChallenge);
