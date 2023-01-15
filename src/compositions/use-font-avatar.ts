import { ref, watchEffect } from 'vue';

const stringToColor = (string: string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + (hash << (i * 6) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

const stringIcon = (name: string) => {
    const split = name.split(' ')
    let s = split[0][0];
    if (split.length > 1 && /[a-zA-Z]/.test(split[1][0])) {
        s += split[1][0]
    }

    return {
        color: stringToColor(name),
        children: s.toUpperCase()
    };
}

export default (title: string) => {
    const fontAvatar = ref(false);
    const color = ref('');
    const children = ref('');

    watchEffect(() => {
        if (fontAvatar.value) {
            ({ color: color.value, children: children.value } = stringIcon(title));
        }
    });

    const showFontAvatar = () => {
        fontAvatar.value = true;
    };

    return { fontAvatar, color, children, showFontAvatar };
}
