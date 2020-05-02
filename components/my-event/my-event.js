// components/my-event/my-event.js
Component({
  /**
   * 组件的方法列表
   */
  methods: {
    handleAdd() {
      this.triggerEvent("add", {name: "young-tree",age: "20"}, {})
    }
  }
})
