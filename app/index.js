import Vue from "vue";
import Scheduler from "./Scheduler";
import Report from "./Report";
import Header from "./Header";
import "element-ui/lib/theme-chalk/index.css";
const ViewsEnum = {
  Scheduler: "Scheduler",
  Report: "Report",
};
const Views = {
  Scheduler,
  Report,
};
new Vue({
  el: "#app",
  data() {
    return {
      view: ViewsEnum.Scheduler,
    };
  },

  render() {
    const children = Views[this.view];
    return this.$createElement(
      "div",
      {
        class: "app",
      },
      [
        this.$createElement(
          Header,

          {
            on: {
              change: (view) => (this.view = view),
            },
          }
        ),
        this.$createElement(children),
      ]
    );
  },
});
