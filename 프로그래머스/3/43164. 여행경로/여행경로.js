function solution(tickets) {
  let answer = [];
  const map = new Map();

  tickets.forEach(([air1, air2]) => {
    if (map.has(air1)) {
      map.set(air1, [...map.get(air1), air2].sort());
    } else {
      map.set(air1, [air2]);
    }
    if (!map.has(air2)) {
      map.set(air2, []);
    }
  });

  function IsEmpty(map) {
    let isEmpty = true;
    map.forEach(value => {
      if (value.length) isEmpty = false;
    });
    return isEmpty;
  }

  function DFS(curAirport, visited, map) {

    if (answer.length) {
      return;
    }

    if (!map.get(curAirport).length) {
      if (IsEmpty(map)) {
        answer = [...visited, curAirport];
      }
      return;
    }

    const curArr = [...map.get(curAirport)];

    for (let i = 0; i < curArr.length; i++) {
      const newArr = curArr.filter((_, idx) => idx !== i);
      const newMap = new Map([...map]);
      newMap.set(curAirport, newArr);
      DFS(curArr[i], [...visited, curAirport], newMap);
    }
  }

  DFS("ICN", [], map);

  return answer;
}