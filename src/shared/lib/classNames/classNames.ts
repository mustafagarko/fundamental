export type Mods = Record<string, string | boolean | undefined>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: (string | undefined)[] = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.keys(mods).filter((className) => mods[className]),
    ].join(' ');
}
