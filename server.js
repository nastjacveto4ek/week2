const userName = 'Harry';
let friends = ['Ron', 'Hermione', 'Hedwig'];
friends.push('Draco');

console.log(`${userName} has got ${friends.length} friends.`);

for(let i = 0; i < friends.length; i++) {
    if(friends[i] === 'Draco') {
        weAreNotFriends(friends[i]);
        continue;
    }

    friends[i] = friends[i] + '*';
    greeting(friends[i]);
}

friends.forEach(friend => {
    console.log(friend);
});
    

function greeting(friendsName) {
   console.log(`Hello, ${friendsName}!`); 
}

function weAreNotFriends(enemyName) {
    console.log(`Go away, ${enemyName}! We are not friends!`); 
}
