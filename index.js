function produceDrivingRange(blockRange) {
  return function(start, end) {
    const startBlock = parseInt(start)
    const endBlock = parseInt(end)
    const distance = startBlock > endBlock ? (startBlock - endBlock) : (endBlock - startBlock)
    if (distance <= blockRange) {
      return `within range by ${blockRange - distance}`;
    } else {
      return `${distance - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip;
  }
}





function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
    this.name = name;
    this.id = ++driverId;
  }
  }
}