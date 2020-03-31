const stringCompareFunction = (a, b) => {
  const itemA = a[1].toUpperCase();
  const itemB = b[1].toUpperCase();

  let comparison = 0;
  if (itemA > itemB) {
    comparison = 1;
  } else if (itemA < itemB) {
    comparison = -1;
  }
  return comparison;
};

const updateInventory = (cart1, cart2) => {
  cart2.forEach(secondArrElement => {
    const firstArrPosition = cart1
      .map(firstArrElement => firstArrElement[1])
      .indexOf(secondArrElement[1]);
    if (firstArrPosition === -1) cart1.push(secondArrElement);
    else cart1[firstArrPosition][0] += secondArrElement[0];
  });
  return cart1.sort(stringCompareFunction);
};

export {
  updateInventory
};