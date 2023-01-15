import { ref, computed } from 'vue';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

const THEMES: Theme[] = ['light', 'dark'];

export default () => {

    const storageTheme = ref<Theme>('light');

    let savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme !== null && THEMES.indexOf(savedTheme as Theme) >= 0) {
        storageTheme.value = savedTheme as Theme;
    }

    const theme = computed<Theme>({
        get() {
            return storageTheme.value;
        },
        set(value) {
            storageTheme.value = value;
            localStorage.setItem(STORAGE_KEY, value);
        }
    });
    return theme;
};
