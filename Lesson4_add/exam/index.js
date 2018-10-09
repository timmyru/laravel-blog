function getFriendlyNumbers(start, end) {
    if (typeof (start) == 'string' || typeof (end) == 'string' || start > end || start < 0 || end < 0) {
        return (false);  
    } else {
    let arr = [],
        num = 0,
        sum = 0,
        friends = [],
        friendsArr = [];
    for (let k = start; k < end+1; k++) {
        for (let i = 1; i < k; i++) {
            if (!(k % i)) {
                sum += i;
            }
        }
        arr.push(sum);
        sum = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (arr[num - 1] == i + 1 && arr[i] != i + 1) {
            if (!friends.length) {
                friends = [num, arr[num - 1]];
                friends.sort();
                friendsArr.push(friends);
            } else {
                for (let j = 0; j < friends.length; j++) {
                    if (friends[j] != num && friends[j] != arr[num - 1]) {
                        friends = [num, arr[num - 1]];
                        friends.sort();
                        friendsArr.push(friends);
                    }
                }
            }
        }
    }
    return(friendsArr);
    }
}


module.exports = {
    firstName: 'Artem',
    secondName: 'Prygin',
    task: getFriendlyNumbers
};

