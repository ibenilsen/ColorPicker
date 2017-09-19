function generateColors() {
  const result = [];
  const seed = 12934872034587;
  for(var i = 1; i < 200; i ++ ){
    var base = i * seed;
    result.push({hex: base.toString(16).slice(2, 8).toUpperCase()});
  }
  return result;
}

export default function(state = generateColors(), action) {
  return state;
}
