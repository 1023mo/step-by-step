<template>
  <div>reduce高级用法</div>
</template>

<script>
export default {
  data () {
    return {
      names: ['lisa', 'Emma', 'sophia'],
      countObj: findCount()
    }
  },
  methods: {
    findCount () {
      this.names.reduce((pre, cur) => {
        if (cur in pre) {
          pre[cur]++
        } else {
          pre[cur] = 1
        }
        return pre
      }, {})
    }
  }
}
</script>