export function itemAscendingSort(prop) {
  return function(a, b) {
    let value1 = a[prop];
    let value2 = b[prop];
    return value1 - value2;
  };
}

export function itemDescendingSort(prop) {
  return function(a, b) {
    let value1 = a[prop];
    let value2 = b[prop];
    return value2 - value1;
  };
}
