<template>
    <div class="loading">
        <p class="text-center mb-4">加载中...</p>
        <VProgressLinear color="deep-purple-accent-4" indeterminate rounded height="6" />
    </div>
</template>

<script lang="ts" setup>
import { VProgressLinear } from 'vuetify/components';
</script>

<style lang="scss" scoped>
.loading {
    max-width: 440px;
    margin: 0 auto;
}
</style>
