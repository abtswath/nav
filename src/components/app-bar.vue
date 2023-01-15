<template>
    <VAppBar color="primary">
        <template #prepend>
            <VAppBarNavIcon icon="mdi-bookmark" />
        </template>
        <VAppBarTitle>书签</VAppBarTitle>
        <template #append>
            <VSwitch v-model:model-value="theme" true-value="dark" false-value="light" hide-details inline>
                <template #label>
                    <VIcon>
                        {{ icon }}
                    </VIcon>
                </template>
            </VSwitch>
        </template>
    </VAppBar>
</template>

<script lang="ts" setup>
import { VAppBar, VAppBarNavIcon, VAppBarTitle, VIcon, VSwitch } from 'vuetify/components';
import { computed } from 'vue';
import { Theme } from '../compositions';

const props = defineProps<{
    theme: Theme
}>();
const emits = defineEmits<{
    (e: 'update:theme', value: Theme): void
}>();

const theme = computed<Theme>({
    get() {
        return props.theme;
    },
    set(value) {
        emits('update:theme', value);
    }
});

const icon = computed(() => props.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night');
</script>

<style lang="scss" scoped>

</style>
