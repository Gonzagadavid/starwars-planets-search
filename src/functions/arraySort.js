const min = -1;

const ascCb = (a, b) => (a < b ? min : 0);
const asc = (a, b) => (a > b ? 1 : ascCb(a, b));

const descCb = (a, b) => (a < b ? 1 : 0);
const desc = (a, b) => (a > b ? min : descCb(a, b));

const arraySort = (array, sortOrder, columnSort) => {
  const orderList = [...array]
    .sort((a, b) => (
      sortOrder === 'ASC'
        ? asc(a[columnSort], b[columnSort]) : desc(a[columnSort], b[columnSort])));

  return orderList.sort((a, b) => (
    sortOrder === 'ASC' ? a[columnSort] - b[columnSort] : b[columnSort] - a[columnSort]
  ));
};

export default arraySort;
