<template>
    <Layout>
        <Suspense>
            <Content />
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </Layout>
</template>

<script lang="ts" setup>
import { Layout, Content, Loading } from './components';
</script>

<style scoped>

</style>
