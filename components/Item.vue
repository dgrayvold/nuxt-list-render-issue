<template>
    <li>
        <p style="font-size: 2rem"> {{ fetchedNumber }} </p>
    </li>
</template>

<script setup lang="ts">
const props = defineProps<{
    someId: number;
}>();

// Awaiting the useFetch here will cause the list to render out of order
const { data: fetchedNumber } = await useFetch(`/api/id/${props.someId}`, {lazy: true});
// const { data: fetchedNumber } = useFetch(`/api/id/${props.someId}`, {lazy: true});
</script>

<style scoped>
li {
    list-style: none;
}
</style>