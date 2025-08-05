// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({
    profile: {
        form: {
            firstName: 'f',
            lastName: 'f',
            age: 4,
            currency: Currency.USD,
            country: Country.Kazakhstan,
            city: 'Moscow',
            username: 'admin',
        },
        isLoading: false,
    },
})];
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            firstName: 'f',
            lastName: 'f',
            age: 4,
            currency: Currency.USD,
            country: Country.Kazakhstan,
            city: 'Moscow',
            username: 'admin',
        },
    },
})];
