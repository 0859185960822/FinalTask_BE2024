<script>
export default {
    props: {
        pills: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return { ex4Rows: 100, }
    }
}
</script>

<template>
    <div class="mt-3">
        <BPagination v-model="ex4CurrentPage" :pills="pills" :total-rows="ex4Rows" align="end" />
    </div>
</template>