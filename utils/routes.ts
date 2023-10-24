export type routePath = {
    name: string,
    path: string,
}
const getRoutes = (): routePath[] => [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Career',
        path: '/career',
    },
    {
        name: 'Startups',
        path: '/startups',
    },
    {
        name: 'Writing',
        path: '/writing',
    },
    {
        name: 'Community',
        path: '/community',
    },
    {
        name: 'Contacts',
        path: '/contact',
    },

];


export default getRoutes();
