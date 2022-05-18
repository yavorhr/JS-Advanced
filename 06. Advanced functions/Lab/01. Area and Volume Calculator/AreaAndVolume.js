function solve(area, vol, dataJSON) {
  const figures = JSON.parse(dataJSON);

  const result = [];

  for (let figure of figures) {
    const objArea = area.call(figure);
    const objVolume = vol.call(figure);

    const output = {
      area: objArea,
      volume: objVolume
    };

    result.push(output);
  }
  return result;
}