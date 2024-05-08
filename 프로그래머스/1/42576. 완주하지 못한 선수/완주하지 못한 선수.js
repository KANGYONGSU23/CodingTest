function solution(participant, completion) {
    var answer = '';
    const participantHash = new Map();

    participant.forEach(value => {
        if (participantHash.has(value)) {
            participantHash.set(`${value}`, participantHash.get(`${value}`) + 1);
        } else {
            participantHash.set(`${value}`, 1);
        }
    });

     completion.forEach(value => {
        participantHash.set(`${value}`, participantHash.get(`${value}`) - 1);
        if (participantHash.get(`${value}`) === 0) {
            participantHash.delete(`${value}`);
        }
    })

    answer = [...participantHash][0][0];
    return answer

}