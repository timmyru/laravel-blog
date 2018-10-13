function getFriendlyNumbers(start, end) {
    if (typeof(start) !== "number" || typeof(end) !== "number" || start > end || start <= 0 || end <= 0 || (start ^ 0) !== start || (end ^ 0) !== end) {
        return false;
    }      
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr[i] = 0;
        for (let a = 1; a <= i / 2; a++) {
            if (i % a == 0) {
                arr[i] += a;
            }
        }
    }

    let arrFriends = [];
    arr.forEach(function(item, i, mass) {
        if (mass[item] == i && mass[i] == item && i != item) {
            arrFriends.push(i, item);
        }
    });

    let arrBestFriends = [];
    for (var i = 0; i < arrFriends.length; i += 2) {
        arrBestFriends.push(arrFriends[i]);
    }

    let arrBestFriendsForever = [];
    for (let i = 0; i < arrBestFriends.length / 2; i++) {
        arrBestFriendsForever[i] = arrBestFriends.slice((i*2), (i*2) + 2);
    }
    return arrBestFriendsForever;
}

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
};