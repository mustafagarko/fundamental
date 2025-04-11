import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Тестовый заголовок',
    text: 'тестовый текст',
    theme: TextTheme.PRIMARY,
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
    title: 'Тестовый заголовок',
    text: 'тестовый текст',
    theme: TextTheme.PRIMARY,
};
PrimaryInverted.decorators = [ThemeDecorator(Theme.DARK)];

export const TextError = Template.bind({});
TextError.args = {
    title: 'Тестовый заголовок',
    text: 'тестовый текст',
    theme: TextTheme.ERROR,
};
