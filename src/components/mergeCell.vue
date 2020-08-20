<template>
  <div class="person">
    <h3>合并单元格</h3>
    <el-table :data="tableData" border :span-method="objectSpanMethod">
      <el-table-column
        v-for="(item, index) in columnData"
        :key="index"
        :prop="item.prop"
        :label="item.label"
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'story',
  data () {
    return {
      columnData: [
        {label: "序号", prop: "index"},
        {label: "产品大类", prop: "bigtag"},
        {label: "大类合计", prop: "bigtotal"},
        {label: "大类占比", prop: "bigpercent"},
        {label: "产品小类", prop: "smalltag"},
        {label: "小类合计", prop: "smalltotal"},
        {label: "小类占比", prop: "smallpercent"},
        {label: "1", prop: "1"},
        {label: "2", prop: "2"},
        {label: "3", prop: "3"},
        {label: "Q1", prop: "Q1"},
        {label: "4", prop: "4"},
        {label: "5", prop: "5"},
        {label: "6", prop: "6"},
        {label: "Q2", prop: "Q2"},
        {label: "7", prop: "7"},
        {label: "8", prop: "8"},
        {label: "9", prop: "9"},
        {label: "Q3", prop: "Q3"},
        {label: "10", prop: "10"},
        {label: "11", prop: "11"},
        {label: "12", prop: "12"},
        {label: "Q4", prop: "Q4"}
      ],
      // spanArr:[
      //   {row: 1, column: 1, span: [5, 1]},
      //   {row: 1, column: 2, span: [5, 1]},
      //   {row: 1, column: 3, span: [5, 1]},
      //   {row: 6, column: 1, span: [2, 1]},
      //   {row: 6, column: 2, span: [2, 1]},
      //   {row: 6, column: 3, span: [2, 1]}
      // ],
      spanArr:
      [
        {
          row: 1,
          column: 1,
          span: [6, 1]
        },
        {
          row: 1,
          column: 2,
          span: [1, 4]
        },
        {
          row: 7,
          column: 1,
          span: [2, 3]
        },
      ],
      tableData: [
        {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: "1000.00",
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          Q1: 0,
          Q2: 0,
          Q3: "1000.00",
          Q4: 0,
          bigpercent: "100.00%",
          bigtag: "云产品和在线服务",
          bigtotal: "1000.00",
          index: 1,
          smallpercent: "100.00%",
          smalltag: "媒体在线服务",
          smalltotal: "1000.00",
        },
        {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          Q1: 0,
          Q2: 0,
          Q3: 0,
          Q4: 0,
          bigpercent: "100.00%",
          bigtag: "云产品和在线服务",
          bigtotal: "1000.00",
          index: 3,
          smallpercent: "0.00%",
          smalltag: "数据类",
          smalltotal: 0
        },
        {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          Q1: 0,
          Q2: 0,
          Q3: 0,
          Q4: 0,
          bigpercent: "100.00%",
          bigtag: "云产品和在线服务",
          bigtotal: "1000.00",
          index: 4,
          smallpercent: "0.00%",
          smalltag: "定制类",
          smalltotal: 0
        },
        {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          Q1: 0,
          Q2: 0,
          Q3: 0,
          Q4: 0,
          bigpercent: "100.00%",
          bigtag: "云产品和在线服务",
          bigtotal: "1000.00",
          index: 5,
          smallpercent: "0.00%",
          smalltag: "研招类",
          smalltotal: 0
        },
        {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          Q1: 0,
          Q2: 0,
          Q3: 0,
          Q4: 0,
          bigpercent: "0.00%",
          bigtag: "定制化数据服务",
          bigtotal: 0,
          index: 6,
          smallpercent: "0.00%",
          smalltag: "测试类别3",
          smalltotal: 0
        },
        {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          Q1: 0,
          Q2: 0,
          Q3: 0,
          Q4: 0,
          bigpercent: "0.00%",
          bigtag: "定制化数据服务",
          bigtotal: 0,
          index: 7,
          smallpercent: "0.00%",
          smalltag: "测4",
          smalltotal: 0
        },
        {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: "1000.00",
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          Q1: 0,
          Q2: 0,
          Q3: "1000.00",
          Q4: 0,
          bigpercent: "100.00%",
          bigtag: "总计",
          bigtotal: "1000.00",
          index: 8,
          smallpercent: "100.00%",
          smalltag: "分类总计",
          smalltotal: "1000.00"
        }
      ],
      mergeData: [],
    }
  },
  methods:{
    getSpanArr(arr){
      arr.map((value, index) => {
        this.spanArr.map((item, index1) => {
          if(index + 1 == item.row){
            for(var i = 0; i < item.span[0]; i++){
              for(var j = 0; j < item.span[1]; j++){
                if(i == 0 && j == 0){
                  this.mergeData.push(
                    {
                      row: item.row,
                      column: item.column,
                      rowspan: item.span[0],
                      colspan: item.span[1]
                    }
                  )
                }
                else{
                  this.mergeData.push(
                    {
                      row: item.row + i,
                      column: item.column + j,
                      rowspan: 0,
                      colspan: 0
                    }
                  )
                }
              }
            }
          }
        })
      })
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      for (let i = 0; i < this.mergeData.length; i++) {
        var value = this.mergeData[i]
        if(value.row == rowIndex + 1 && value.column == columnIndex){
          return {
            rowspan: value.rowspan,
            colspan: value.colspan
          }
        }
      }
    },
  },
  created(){
    this.getSpanArr(this.tableData);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>

</style>
