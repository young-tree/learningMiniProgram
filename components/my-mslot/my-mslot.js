// components/my-mslot/my-mslot.js
Component({
  // ----------- 让使用者可以给组件传数据 -----------
  properties: {
    title: {
      type: String,
      value: "默认参数",
      observers(newval, oldval) {
        console.log()
      }
    }
  },
  // ----------- 定义组件内部的初始化函数 -----------
  data: {
    counter: 0
  },
  // ----------- 定义组件内部的事件函数 -----------
  methods: {
    foo() {

    }
  },
  // ----------- 定义组件的配置选项 -----------
  // multipleSlots在使用多插槽时设置true
  options: {
    multipleSlots: true
  },
  // ----------- 外界给组件传入额外的样式 -----------
  externalClasses:[],
  // ----------- 可以监听properties/data的改变 -----------
  observers: {
    counter(newval) {
      console.log(newval)
    }
  },
  // ----------- 组件中监听声明周期函数 -----------
  // 1.监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来时')
    },
    hide() {
      console.log('监听组件所在页面隐藏起来时')
    },
    resize() {
      console.log('监听页面尺寸得改变')
    }
  },
  // 2.监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log("组件被创建出来")
    },
    attached() {
      console.log("组件被添加到页面")
    },
    ready() {
      console.log("组件被渲染出来")
    },
    moved() {
      console.log("组件被移动到另外一个节点")
    },
    detached() {
      console.log("组件被移除掉")
    }
  }
})
