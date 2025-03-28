<template>
    <p>
        Order of displayed items should be
        <output style="font-family: monospace">{{ JSON.stringify(testList) }}</output>
    </p>

    <ol>
        <Item v-for="id in testList" :key="id" :some-id="id" />
    </ol>

    <menu style="list-style: none; display: flex; gap: 0.5rem; padding: 0;">
        <li> <button @click="() => testList = [5, 9, 2, 1, 25]">Scramble</button> </li>
        <li> <button @click="() => testList = initialList">Reset</button> </li>
    </menu>
</template>

<script setup lang="ts">
const initialList = [1, 2, 3, 4, 5];

const testList = ref(initialList);
</script>

<style>
body {
    background: #0d0d0d;
    color: #cfcfcf;
}
</style>