import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'feature/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '12',
    },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {

};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
})];

export const WithError = Template.bind({});
WithError.args = {
};
WithError.decorators = [StoreDecorator({
    loginForm: {
        error: 'undexpected error',
        username: '123',
    },
})];
export const isLoading = Template.bind({});
isLoading.args = {
};
isLoading.decorators = [StoreDecorator({
    loginForm: {
        isLoading: true,
    },
})];
