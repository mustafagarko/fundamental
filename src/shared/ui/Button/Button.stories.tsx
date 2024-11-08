import React, { Children } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, SizeButton, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: ThemeButton.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: ThemeButton.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeM = Template.bind({});
SizeM.args = {
    children: '<',
    theme: ThemeButton.PRIMARY,
    size: SizeButton.M,
};
export const SizeL = Template.bind({});
SizeL.args = {
    children: '<',
    theme: ThemeButton.PRIMARY,
    size: SizeButton.L,
};
export const SizeXL = Template.bind({});
SizeXL.args = {
    children: '<',
    theme: ThemeButton.PRIMARY,
    size: SizeButton.XL,
};
export const SizeXLSharp = Template.bind({});
SizeXLSharp.args = {
    children: '<',
    theme: ThemeButton.PRIMARY,
    size: SizeButton.XL,
    sharpCorners: true,
};
