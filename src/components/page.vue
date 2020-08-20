<template>
  <div class="page">
    <div class="left-menu">
      <router-link @click.native="addTab(item)" v-for="(item,index) in menuArr" :key="index" :to="{path:item.path,query:item.query}">
        {{item.label}}
      </router-link>
    </div>
    <div class="rt-content">
      <div class="el-tab-list">
        <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" @tab-click='chooseTab'>
          <el-tab-pane
            :key="item.name"
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :name="item.name"
          >
          </el-tab-pane>
        </el-tabs> 
      </div>
      <keep-alive :include="includeList">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  name: 'page',
  data () {
    return {
      menuArr:[
        {
          path:'/page/person',
          query:{
            id:'1'
          },
          label:'普鲁斯特',   // 页签显示名称
          tab:'person1',  // 页签对应的唯一值
          componentName:'person',   // 组件的实例name
        },
        {
          path:'/page/person',
          query:{
            id:'2'
          },
          label:'爱默生',
          tab:'person2',
          componentName:'person',
        },
        {
          path:'/page/battle',
          label:'列宁格勒保卫战',
          tab:'battle1',
          componentName:'battle',
        },
        {
          path:'/page/story',
          label:'千与千寻',
          tab:'story1',
          componentName:'story',
        },
        {
          path:'/page/mergeCell',
          label:'合并单元格demo',
          tab:'story1',
          componentName:'story',
        },
      ],
      editableTabsValue:'',
      editableTabs: [],
      includeList: [],
    }
  },
  methods:{
    removeTab(targetName){  // 关闭当前页签，并将缓存数组中缓存当前页签的项去除
      let tabs = this.editableTabs;
      let list = this.includeList;
      let activeName = this.editableTabsValue;
      let componentName;
      if (activeName === targetName) {  // 删除的是当前选中的页签
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            // 关闭当前页签后，如果有下一个页签则显示下一个，否则显示前一个
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
              this.$router.push(nextTab.router)
            }
            
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => {
        if(tab.name == targetName){
          componentName = tab.componentName;
          // 当前被移除的项对应的组件实例的name值
        }
        else{
          return tab
        }
      });
      this.includeList = this.includeList.filter(item => item !== componentName);
    },
    addTab(item){   // 判断是否已存在同名页签，否则新增页签，并在缓存数组中新增
      // 当前新增的页签是否存在页签数组中的判断
      var hasSame = this.editableTabs.filter(item1 => item1.name == item.tab) 
      if(!hasSame.length){
        // 如果此时页签数组没有该项，则将它加入到页签数组中
        this.editableTabs.push({
          title: item.label,
          name: item.tab,
          router:{
            path: item.path,
            query: item.query
          },
          componentName:item.componentName,
        });
        // 如果此时页签数组没有该项，则将它加入缓存数组中
        this.includeList.push(item.componentName)
      }
      // 改变当前选中的页签值
      this.editableTabsValue = item.tab;
    }, 
    chooseTab(tab){
      // 跳转到切换的页签的路由上
      this.$router.push(this.editableTabs[tab.index].router)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
  body{
    margin: 0;
    overflow-y: hidden;
  }
  .page{
    height: 600px;
    display: flex;
    flex-direction: row;
    flex: 1;
    .left-menu{
      overflow-y: auto;
      width: 240px;
      padding: 30px 0;
      background-color: #20212B;
      a{
        padding: 0 20px;
        color: #fff;
        display: block;
        height: 45px;
        line-height: 45px;
        text-decoration: none;
        &:hover{
          background-color: #121212;
        }
      }
    }
    .rt-content{
      overflow-y: auto;
      flex: 1;
      .el-tab-list{
        padding: 20px 20px 0;
        position: fixed;
        top: 0px;
        left: 240px;
        right: 0;
        background-color: #fff;
        z-index: 1;
      }
      .person, .battle, .story{
        padding: 30px 20px;
        margin-top: 60px;
        .content{
          margin-top: 20px;
        }
      }
    }
  }
</style>
