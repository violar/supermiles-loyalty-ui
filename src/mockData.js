export const products = [
    {
        productId: 1,
        productName: 'Headphones',
        productOptions: [
            {
                optionId: 1,
                optionName: 'WHITE - 3,000 miles',
                optionDescription: 'White Headphones',
                optionMiles: 3000,
                optionImageUrl: `${process.env.PUBLIC_URL}/images/headphones-white.png`
            },
            {
                optionId: 2,
                optionName: 'BLACK - 3,000 miles',
                optionDescription: 'Black Headphones',
                optionMiles: 3000,
                optionImageUrl: `${process.env.PUBLIC_URL}/images/headphones-black.png`
            },
            {
                optionId: 3,
                optionName: 'GOLD - 5,500 miles',
                optionDescription: 'Gold Headphones',
                optionMiles: 5500,
                optionImageUrl: `${process.env.PUBLIC_URL}/images/headphones-gold.png`
            }
        ]
    }
];

export const users = [
    {
        id: 1,
        username: 'Katie',
        email: 'samplemail@mail.com',
        password: 'password',
        avatarUrl: `${process.env.PUBLIC_URL}/images/avatar.png`,
        miles: 38441
    }
];