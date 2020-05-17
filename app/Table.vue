<template>
  <div>
    <table class="el-table">
      <thead>
        <tr>
          <th>May 2020</th>
          <th>SUN</th>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>
          <th>FRI</th>
          <th>SAT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">
            {{ cell.label }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "WeekCalendar",
  props: {
    data: Array | Object,
  },
};
</script>
