function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = new Array(bridge_length).fill(0);
  let bridgeWeight = 0;

  while (bridge.length > 0) {
    bridgeWeight -= bridge.shift();
    time++;

    if (truck_weights.length > 0 && bridgeWeight + truck_weights[0] <= weight) {
      bridgeWeight += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else if (truck_weights.length > 0) {
      bridge.push(0);
    }
  }

  return time;
}

const test = (bridge_length, weight, truck_weights) => {
  let time = 0;
  const bridge = Array(bridge_length).fill(0);
  bridgeWeight = 0;

  while (bridge.length > 0) {
    bridgeWeight -= bridge.shift();
    time++;
    if (bridge.length > 0 && bridgeWeight + truck_weights[0] <= weight) {
      bridgeWeight += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else if (truck_weights.length > 0) {
      bridge.push(0);
    }
  }

  return time;
};

console.log(test(2, 10, [7, 4, 5, 6])); // 8
