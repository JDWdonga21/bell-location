export function generateRandomPairs() {
    const people = ['시니어_1', '시니어_2', '시니어_3', '시니어_4', '시니어_5', '시니어_6', '시니어_7', '시니어_8', '시니어_9', '시니어_10'];
    const places = ['달맞이길', '부산시민공원', '민락수변공원', '구목정공원', '돌고래분수광장'];
    
    const pairs = [[],[],[],[],[]];
    
    while (people.length > 0) {
        const person1 = people[Math.floor(Math.random() * people.length)];
        const person2 = people[Math.floor(Math.random() * people.length)];
        
        if (person1 !== person2) {
            const num = Math.floor(Math.random() * places.length)
            const place = places[num];
            pairs[num].push(`${person1}, ${person2}`);
        
            people.splice(people.indexOf(person1), 1);
            people.splice(people.indexOf(person2), 1);
        }
    }
    
    // locaArr = pairs

    return pairs
}	
