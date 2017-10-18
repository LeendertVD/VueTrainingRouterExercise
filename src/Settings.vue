<template>
    <div>
        <h1>Settings</h1>
        <p>{{ saved ? 'saved' : 'not saved'}}</p>
        <button @click="saved = true"Save></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            saved: false,
        }
    },
/*     beforeRouteEnter(to, from, next) {
        fetchData().then(data => next(vm => {vm.data = data})}).catch();
    }, */
    beforeRouteLeave(to, from, next) {
        if (this.saved || confirm('Are you sure??')) {
            next()
        } else {
            next(false)
        }
    }
}
</script>