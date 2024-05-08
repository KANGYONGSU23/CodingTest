function solution(phone_book) {
    return !phone_book.sort().some((value, index, slef)=>slef[index+1]?.indexOf(value) === 0);
}