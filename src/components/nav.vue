<template>
    <VChip :href="url" target="_blank" label color="primary">
        <template v-slot:prepend>
            <VAvatar :color="color">
                <template v-if="fontAvatar">
                    <span class="text-white">{{ children }}</span>
                </template>
                <VImg v-else @error="showFontAvatar" :src="icon" />
            </VAvatar>
        </template>
        {{ title }}
        <template v-if="description">
            <VTooltip :max-width="220" activator="parent" location="top">{{ description }}</VTooltip>
        </template>
    </VChip>
</template>

<script lang="ts" setup>
import { VAvatar, VChip, VImg, VTooltip } from 'vuetify/components';
import { Nav } from '.';
import { useFontAvatar } from '../compositions';

const { nav } = defineProps<{
    nav: Nav
}>();
const { title, url, description, icon } = nav;
const { fontAvatar, color, children, showFontAvatar } = useFontAvatar(title);
if (!icon || icon.trim() === '') {
    showFontAvatar();
}
</script>

<style lang="scss" scoped>

</style>
