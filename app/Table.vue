<template>
  <div style="padding-left:50px">
    <table class="ui table very basic selectable celled">
      <thead>
        <tr>
          <th width="100" class="border-right">May 2020</th>
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
        <tr v-for="(row, key, index) in data" :key="index">
          <template v-if="index === 0">
            <td
              v-for="(cell, cIndex) in row"
              :key="cIndex"
              :class="{
                disabled: cIndex > 0 && !cell.enabled,
                'border-right': cIndex === 0,
              }"
              class="cell-date"
            >
              <div @click="setDialog(cIndex, cell)" v-if="cIndex > 0">
                <div class="sub-title">
                  <icon name="edit" />
                  {{ cell.label }}
                </div>
                <checkbox
                  :label="cell.enabled ? 'Available' : 'OFF'"
                  :value="cell.enabled"
                  readonly
                />
              </div>
              <div v-else>
                <div class="sub-title">
                  <div></div>
                  Date
                </div>
                <div>Time</div>
              </div>
            </td>
          </template>
          <template v-else>
            <td
              v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              :class="{
                disabled: !cell.enabled && cellIndex > 0,
                'border-right': cellIndex === 0,
              }"
            >
              <div class="time-item">
                <checkbox v-if="cellIndex > 0" :value="cell.enabled" readonly />
                {{ cell.label }}
              </div>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
    <el-dialog
      ref="dialog"
      :close-on-click-modal="false"
      :show-close="false"
      :visible="dialog"
      destroy-on-close
      :close-on-press-escape="false"
    >
      <template slot="title">
        <icon name="edit" />
        May {{ edit.date }}
        {{ edit.enabled ? "Available" : "OFF" }}
      </template>
      <table class="ui table  selectable  very basic">
        <thead>
          <tr>
            <th>Time</th>
            <th class="right">Reserved</th>
            <th class="right">Quota</th>
            <th class="right">Available</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key, index) in edit.times" :key="index">
            <td>{{ key }}</td>
            <td class="right">{{ item.current }}</td>
            <td class="right">
              <el-input style="width:100px" v-model="item.quota"> </el-input>
            </td>
            <td class="right">
              <checkbox v-model="item.enabled" />
            </td>
          </tr>
        </tbody>
      </table>

      {{ edit }}
    </el-dialog>
  </div>
</template>
<style lang="scss">
table tr .border-right {
  border-right: 10px solid #eee;
}
.sub-title,
.time-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.el-dialog__wrapper {
  z-index: 9999;
}
.el-dialog__wrapper .el-dialog {
  width: 100%;
  .ui.table tr td.right,
  .ui.table tr th.right {
    text-align: right;
    input {
      text-align: right;
    }
  }
}
.cell-date {
  cursor: pointer;
}
</style>
<script>
import {
  Checkbox,
  Icon,
  Dialog as ElDialog,
  Input as ElInput,
} from "element-ui";
import "./Table.css";
export default {
  name: "WeekCalendar",
  components: {
    Checkbox,
    Icon,
    ElDialog,
    ElInput,
  },
  props: {
    data: Array | Object,
  },
  mounted() {
    this.getLayout();
  },
  methods: {
    getLayout() {
      this.$nextTick(() => {
        const table = this.$el.querySelector("table");
        Array.from(table.querySelectorAll("th")).forEach((node, index) => {
          const layout = node.getBoundingClientRect() || {};
          this.$set(this.layouts, index, layout);
        });
      });
    },
    setDialog(index, item) {
      this.$nextTick(() => {
        const layout = this.layouts[index];
        const dialog = this.$refs.dialog.$el.querySelector(".el-dialog");
        dialog.style.width = "450px";
        dialog.style.marginTop = `${layout.top - layout.height}px`;
        dialog.style.marginLeft = `${layout.left}px`;
        dialog.style.height = `${screen.height - layout.top - layout.height}px`;
        this.dialog = true;
        const { date } = item;
        let times = Object.keys(this.data).reduce((acc, key) => {
          const item = this.data[key];
          const found = item.find((item) => item.date === date);
          if (found && found.time) {
            acc[found.time] = found;
          }
          return acc;
        }, {});
        this.edit = { times, date };
      });
    },
    isMorning(label) {
      return ["08", "09", "10", "11"].some((item) => label.includes(item));
    },
  },

  data() {
    return {
      layouts: {},
      dialog: false,
      dialogStyle: {},
      edit: {},
    };
  },
};
</script>
