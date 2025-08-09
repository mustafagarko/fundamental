import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: 'https://www.svgrepo.com/show/404545/avatar-man-profile-user-3.svg',
    size: 50,
    alt: 'avatar',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
    src: 'https://www.svgrepo.com/show/404545/avatar-man-profile-user-3.svg',
    size: 150,
    alt: 'avatar',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
    src: 'https://www.svgrepo.com/show/404545/avatar-man-profile-user-3.svg',
    size: 30,
    alt: 'avatar',
};
