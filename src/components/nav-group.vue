<template>
    <VCard flat border :id="id || title">
        <VCardTitle class="text-h6 text-decoration-none"
            :class="{ 'text-white': theme.name.value === 'dark', 'text-black': theme.name.value === 'light' }" tag="a"
            :href="`#${id || title}`">
            {{ title }}
        </VCardTitle>
        <VCardText>
            <template v-for="nav in navs">
                <Nav class="mr-4 mb-4" :nav="nav" />
            </template>
        </VCardText>
    </VCard>
</template>

<script lang="ts" setup>
import { VCard, VCardText, VCardTitle } from 'vuetify/components';
import { useTheme } from 'vuetify';
import { NavGroup } from '.';
import Nav from './nav.vue';

const { data } = defineProps<{
    data: NavGroup
}>();

const { id, title, navs } = data;
const theme = useTheme();
</script>

<style lang="scss" scoped>

</style>
