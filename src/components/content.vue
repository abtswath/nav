<template>
    <template v-for="group in navGroups">
        <NavGroup class="mb-6" :data="group" />
    </template>
</template>

<script lang="ts" setup>
import NavGroup from './nav-group.vue';
import { NavGroup as INavGroup } from '.';
const GIST_ID = 'a0611998209224225be3fbaaa06e533c';

const sleep = (millseconds: number) => {
    return new Promise(resolve => {
        setTimeout(resolve, millseconds);
    });
}

const getNavGroups = async () => {
    const response = await fetch(`https://api.github.com/gists/${GIST_ID}`);
    const data = await response.json();
    // await sleep(1000 * 100);
    return JSON.parse(data?.files['nav.json']?.content) as unknown as INavGroup[];
}

const navGroups = await getNavGroups();
</script>

<style lang="scss" scoped>

</style>
