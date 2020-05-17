const d = [[]];

let mock = {
  "10:00-10:59": [
    {
      date: 17,
      current: 10,
      total: 12,
    },
    {
      date: 18,
      current: 10,
      total: 50,
    },
    {
      date: 19,
      current: 10,
      total: 50,
    },
    {
      date: 20,
      current: 10,
      total: 50,
    },

    {
      date: 21,
      current: 10,
      total: 50,
    },
    {
      date: 22,
      current: 10,
      total: 50,
    },

    {
      date: 23,
      current: 10,
      total: 50,
    },
  ],
  "11:00-10:59": [
    {
      date: 17,
      month: 5,
      current: 10,
      total: 12,
    },
    {
      date: 18,
      current: 10,
      total: 50,
    },
    {
      date: 19,
      current: 10,
      total: 50,
    },
    {
      date: 20,
      current: 10,
      total: 50,
    },

    {
      date: 21,
      current: 10,
      total: 50,
    },
    {
      date: 22,
      current: 10,
      total: 50,
    },

    {
      date: 23,
      current: 10,
      total: 50,
    },
  ],
};

let output = Object.keys(mock).reduce((acc, key, index) => {
  const item = mock[key];
  if (!acc.header) {
    acc.header = item.map((item) => ({ label: item.date }));
    acc.header.unshift({ label: "time" });
  }
  acc[`i${index}`] = item.map((item) => ({
    ...item,
    label: `${item.current}/${item.total}`,
  }));
  acc[`i${index}`].unshift({ label: key });
  return acc;
}, {});
module.exports = output;
