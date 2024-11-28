import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: 'text',
    placeholder: 'username',
    id: 'username',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    type: 'text',
    placeholder: 'username',
    id: 'username',

};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
