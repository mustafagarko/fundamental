import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
    children: 'LoremLoremLorem',
    isOpen: true,
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
    children: 'LoremLoremLorem',
    isOpen: true,
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
