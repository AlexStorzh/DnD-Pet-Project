const navbarPagesData = [
    {
        link: '/',
        title: 'Home'
    },
    {
        link: '/login',
        title: 'Login'
    },
    {
        link: '/register',
        title: 'Register'
    },
    {
        link: '/constructor/dashboard',
        title: 'Constructor'
    },
];

const constructorPagesData = [
    {
        link: '/constructor/dashboard',
        title: 'Dashboard',
        index: 0,
    },
    {
        link: '/constructor/race',
        title: 'Race',
        number: "1.",
        index: 1
    },
    {
        link: '/constructor/class',
        title: 'Class',
        number: "2.",
        index: 2
    },
    {
        link: '/constructor/abilities',
        title: 'Abilities',
        number: "3.",
        index: 3
    },
    {
        link: '/constructor/description',
        title: 'Description',
        number: "4.",
        index: 4
    },
]

export { navbarPagesData as pagesData, constructorPagesData }