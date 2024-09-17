import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeContextDecorator } from 'shared/config/storybook/ThemeContextDecorator/ThemeContextDecorator';
import { ThemeSwitch } from './ThemeSwitch';

export default {
    title: 'widgets/ThemeSwitch',
    component: ThemeSwitch,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = (args) => <ThemeSwitch {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [ThemeContextDecorator];
export const Dark = Template.bind({});
Dark.decorators = [ThemeContextDecorator, ThemeDecorator(Theme.DARK)];
