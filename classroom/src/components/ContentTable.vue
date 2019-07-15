<template>
  <div>
    <div id="hotTable" class="hotTable">
      <HotTable ref="testHot" :settings="hotSettings"></HotTable>
    </div>
  </div>
</template>

<script>
import { HotTable } from "@handsontable-pro/vue";
import "../../node_modules/handsontable-pro/dist/handsontable.full.css";
import Handsontable from "handsontable-pro";
// 进入页面后，由后端传回表格内的数据
// 编辑之后，将新数据返回给后端，并在前端保存
// 控件：开始，暂停，时间戳，内容输入框
export default {
  data: function() {
    return {
      root: "test-hot",

      hotSettings: {
        data: [
          //数据可以是二维数组，也可以是数组对象
          // 这里是同学编辑的内容
          [
            "记录",
            10,
            11,
            12,
            13,
            true,
            "记录",
            10,
            11,
            12,
            13,
            true
          ],

          [
            "记录",
            20,
            11,
            14,
            13,
            true,
            "记录",
            10,
            11,
            12,
            13,
            true
          ]
        ],

        // 表格行数
        // startRows: 60, //行列范围

        // 表格列数
        // startCols: 100,

        // minRows: 5, //最小行列

        // minCols: 5,

        // maxRows: 20, //最大行列

        // maxCols: 20,

        rowHeaders: true, //行表头，可以使布尔值（行序号），可以使字符串（左侧行表头相同显示内容，可以解析html），也可以是数组（左侧行表头单独显示内容）。

        // 同学名字和个性签名
        // colHeaders: [
        //   "风行<br>哎，代码大全 - 33.7<br>写到就是赚到",
        //   "Life<br>尽量多玩游戏",
        //   "Hello<br>请务必好好照顾家里人, 生命如此脆弱, 时间一去不来, 最难受不过于子欲养而亲不待",
        //   "同学4",
        //   "同学5",
        //   "同学6"
        // ], //自定义列表头or 布尔值
        colHeaders: true,
        nestedHeaders: [
          // 表头-名字和格言
          [
            { label: "A", colspan: 4 },
            { label: "B", colspan: 4 },
            { label: "C", colspan: 4 },
            { label: "D", colspan: 4 },
            { label: "D", colspan: 4 },
            { label: "F", colspan: 4 }
          ],
          // 日期，时间段，内容，备注
          [
            { label: "D", colspan: 1 },
            { label: "E", colspan: 1 },
            { label: "F", colspan: 1 },
            { label: "F", colspan: 1 },
            { label: "D", colspan: 1 },
            { label: "E", colspan: 1 },
            { label: "F", colspan: 1 },
            { label: "F", colspan: 1 },
            { label: "D", colspan: 1 },
            { label: "E", colspan: 1 },
            { label: "F", colspan: 1 },
            { label: "F", colspan: 1 },
            { label: "D", colspan: 1 },
            { label: "E", colspan: 1 },
            { label: "F", colspan: 1 },
            { label: "F", colspan: 1 },
            { label: "D", colspan: 1 },
            { label: "E", colspan: 1 },
            { label: "F", colspan: 1 },
            { label: "F", colspan: 1 },
            { label: "D", colspan: 1 },
            { label: "E", colspan: 1 },
            { label: "F", colspan: 1 },
            { label: "F", colspan: 1 }
          ]
        ],

        // 一行有多少列，每新增一个同学，需加入 4 列
        columns: [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ],

        minSpareCols: 2, //列留白

        minSpareRows: 2, //行留白

        currentRowClassName: "currentRow", //为选中行添加类名，可以更改样式

        currentColClassName: "currentCol", //为选中列添加类名

        autoWrapRow: true, //自动换行

        contextMenu: {
          //自定义右键菜单，可汉化，默认布尔值

          items: {
            row_above: {
              name: "上方插入一行"
            },

            row_below: {
              name: "下方插入一行"
            },

            col_left: {
              name: "左方插入列"
            },

            col_right: {
              name: "右方插入列"
            },

            hsep1: "---------", //提供分隔线

            remove_row: {
              name: "删除行"
            },

            remove_col: {
              name: "删除列"
            },

            make_read_only: {
              name: "只读"
            },

            borders: {
              name: "表格线"
            },

            commentsAddEdit: {
              name: "添加备注"
            },

            commentsRemove: {
              name: "取消备注"
            },

            freeze_column: {
              name: "固定列"
            },

            unfreeze_column: {
              name: "取消列固定"
            },

            hsep2: "---------"
          }
        }, //右键效果

        fillHandle: true, //选中拖拽复制 possible values: true, false, "horizontal", "vertical"

        fixedColumnsLeft: 0, //固定左边列数

        fixedRowsTop: 0, //固定上边列数

        // mergeCells: [
        //   //合并

        //   { row: 1, col: 1, rowspan: 3, colspan: 3 }, //指定合并，从（1,1）开始行3列3合并成一格

        //   { row: 3, col: 4, rowspan: 2, colspan: 2 }
        // ],

        afterChange: function(changes, source) {
          //数据改变时触发此方法
          console.log(this.getData());
        },

        manualColumnFreeze: true, //手动固定列

        manualColumnMove: true, //手动移动列

        manualRowMove: true, //手动移动行

        manualColumnResize: true, //手工更改列距

        manualRowResize: true, //手动更改行距

        comments: true, //添加注释

        cell: [{ row: 1, col: 1, comment: { value: "this is test" } }],

        customBorders: [], //添加边框

        columnSorting: true, //排序

        stretchH: "all" //根据宽度横向扩展，last:只扩展最后一列，none：默认不扩展
      }
    };
  },

  name: "handsonTable",

  components: {
    HotTable
  },

  methods: {
    saveData() {
      var examData = this.$refs.testHot.table.getData(); //这里要注意，如果使用this.hotSettings.data 保存表格数据，拖拽完以后数据的顺序将不会更新，因此使用 this.$refs.testHot.table.getData(); 来获取数据，获取的数据格式为二维数组。

      //   console.log(examData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hotTable {
  margin-top: 24px;
}
</style>

