### 表格展示

```javascript
// 以时间为行
// 以日期为列
// 一行7条数据，包含过期的时间
let data = {
  "10:00-10:59": [
    {
      date: 17, //日期
      month: "may", //月份 , may | jun | jul | aug
      current: 10, //当前时间段预约人数
      quota: 12, //当前时间段可预约人数
      enabled: true, //当前时间段是否可用 ，手动设置禁用或超出时间段设置禁用
    },
    {
      date: 18,
      month: "may",
      current: 10,
      quota: 50,
      enabled: false,
    },
  ],
};
```

### 提交修改

```javascript
let submit = {
  date: 17, //  修改的日期
  month: "may", //修改的月份
  enabled: true, //该日是否可用
  times: [
    {
      date: 17, //修改的日期
      month: "may", //月份
      quota: 100, //总数
      enabled: true, //是否可用
      time: "10:00-10:59", //时间段
    },
  ],
};
```
