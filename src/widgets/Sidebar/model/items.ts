import { FunctionComponent, SVGAttributes } from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import AboutUs from 'shared/assets/icons/aboutus.svg';
import Home from 'shared/assets/icons/home.svg';
import User from 'shared/assets/icons/user.svg';

export interface SidebarItemType {
    path: string,
    text: string,
    Icon: FunctionComponent<SVGAttributes<SVGElement>>,
    requireAuth?: boolean
}

export const SidebarItems: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        text: 'Main Page',
        Icon: Home,
    },
    {
        path: RoutePaths.about,
        text: 'About Page',
        Icon: AboutUs,
    },
    {
        path: RoutePaths.profile,
        text: 'Profile Page',
        Icon: User,
        requireAuth: true,
    },
];
