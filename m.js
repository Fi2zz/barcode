const d = [[]];

let mock = {
  "10:00-10:59": [
    {
      date: 17,
      month: "may",
      current: 10,
      quota: 12,
    },
    {
      date: 18,
      month: "may",
      current: 10,
      quota: 50,
    },
    {
      date: 19,
      current: 10,
      quota: 50,
    },
    {
      date: 20,
      current: 10,
      quota: 50,
    },

    {
      date: 21,
      current: 10,
      quota: 50,
    },
    {
      date: 22,
      current: 10,
      quota: 50,
    },

    {
      date: 23,
      current: 10,
      quota: 50,
    },
  ],
  "11:00-10:59": [
    {
      date: 17,
      month: 5,
      current: 10,
      quota: 12,
    },
    {
      date: 18,
      current: 10,
      quota: 50,
    },
    {
      date: 19,
      current: 10,
      quota: 50,
    },
    {
      date: 20,
      current: 10,
      quota: 50,
    },

    {
      date: 21,
      current: 10,
      quota: 50,
    },
    {
      date: 22,
      current: 10,
      quota: 50,
    },

    {
      date: 23,
      current: 10,
      quota: 50,
    },
  ],
};

let output = Object.keys(mock).reduce((acc, key, index) => {
  const item = mock[key];
  if (!acc.header) {
    acc.header = item.map((item) => ({
      ...item,
      label: item.date,
      enabled: true,
    }));
    acc.header.unshift({ label: "time", enabled: false });
  }
  acc[`i${index}`] = item.map((item, index) => ({
    ...item,
    label: `${item.current}/${item.quota}`,
    enabled: index % 2 === 0,
    time: key,
  }));
  acc[`i${index}`].unshift({ label: key, time: key });
  return acc;
}, {});
module.exports = output;
