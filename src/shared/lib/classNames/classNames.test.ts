import { classNames } from './classNames';

describe('classNames', () => {
    test('one class', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('additional classes', () => {
        const expected = 'someClass firstAdditional secondAdditional';
        expect(classNames('someClass', {}, [
            'firstAdditional', 'secondAdditional',
        ]))
            .toBe(expected);
    });
    test('mods all true', () => {
        expect(classNames('someClass', {
            hovered: true, bordered: true,
        }, [
            'firstAdditional', 'secondAdditional',
        ]))
            // eslint-disable-next-line max-len
            .toBe('someClass firstAdditional secondAdditional hovered bordered');
    });
    test('mods true and false', () => {
        expect(classNames('someClass', {
            hovered: true, bordered: false,
        }, [
            'firstAdditional', 'secondAdditional',
        ]))
            .toBe('someClass firstAdditional secondAdditional hovered');
    });
    test('mods true and undefined', () => {
        expect(classNames('someClass', {
            hovered: true, bordered: undefined,
        }, [
            'firstAdditional', 'secondAdditional',
        ]))
            .toBe('someClass firstAdditional secondAdditional hovered');
    });
});
