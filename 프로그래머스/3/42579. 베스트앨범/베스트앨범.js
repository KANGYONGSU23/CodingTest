function solution(genres, plays) {
  const result = [];
  const obj = {};
  const info = {};

  for (let i = 0; i < genres.length; i++) {
    obj[genres[i]] = (obj[genres[i]] || 0) + plays[i];
    info[i] = { play: plays[i], genre: genres[i] };
  } 

  const sortedGenre = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  sortedGenre.forEach((genre) => {
    const genreSong = Object.values(info)
      .filter((song) => song.genre === genre)
      .sort((a, b) => b.play - a.play)
      .slice(0, 2);

    genreSong.forEach((gs) => {
      const uniqueId = Object.values(info).indexOf(gs);
      result.push(uniqueId);
    });
  });

  return result;
}

