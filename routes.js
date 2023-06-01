const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About - Nagista Alifia Handesaputri - 3120510901';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage - Nagista Alifia Handesaputri - 3120510901';
        },
    },
];

module.exports = routes;
