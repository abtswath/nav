export { default as Layout } from './layout.vue';
export { default as Content } from './content.vue';
export { default as Loading } from './loading.vue';

export interface Nav {
    title: string
    url: string
    description?: string
    icon?: string
}

export interface NavGroup {
    id?: string
    title: string
    navs: Nav[]
}
