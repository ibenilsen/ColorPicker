const result = [];
for(var i = 0; i < 200; i ++ ){
  const newElement ={hex: Math.random().toString(16).slice(2, 8).toUpperCase()};
  result.push(newElement);
}

export default function(state = result, action) {
  return state;
}
