import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/avatarImg.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        firstName: 'Santi',
        lastName: 'Munoz',
        age: 24,
        currency: Currency.USD,
        country: Country.Azerbaijan,
        city: 'Moscow',
        username: 'admin',
        avatar,
    },
    readonly: true,
};

export const Editable = Template.bind({});
Editable.args = {
    data: {
        avatar,
    },
    readonly: false,
};

export const Error = Template.bind({});
Error.args = {
    error: 'error',
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};
