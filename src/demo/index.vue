<template>
  <div>
    {{counter}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      counter: this.$store.state.count
    }
  },
  computed: {
  	// counter () {
  	// 	return this.$store.state.count
  	// }
  }
}
</script>