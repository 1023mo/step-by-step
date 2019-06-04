<template>
  <div>JS高级</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    getQueryStringArgs () {
      if (!location.search.length) return
      // 去的查询字符串并去掉开头的问号
      let qs = location.search.substring(1);
      // 保存数据的对象
      let args = {};
      let key,value;
      // 取得每一项
      let items = qs.split('&');
      let len = items.length;
      for (let i = 0; i < len; i++) {
        let item = items[i].split('=')
        key = decodeURIComponent(item[0])
        value = decodeURIComponent(item[1])
        args[key] = value
      }
      return args
    }
  }
}
</script>