<template>
    <VApp :theme="theme">
        <VLayout>
            <AppBar v-model:theme="theme" />
            <VMain>
                <VContainer>
                    <slot></slot>
                </VContainer>
            </VMain>
        </VLayout>
    </VApp>
</template>

<script lang="ts" setup>
import { VApp, VLayout, VMain, VContainer } from 'vuetify/components';
import AppBar from './app-bar.vue';
import { useTheme } from '../compositions';
const theme = useTheme();
</script>

<style lang="scss" scoped>

</style>
