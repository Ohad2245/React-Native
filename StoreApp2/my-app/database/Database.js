import Product from '../models/Product';

export const Items = [
    new Product(
        1, // id
        'product', // category
        'Alpha Menace 1', // productName
        1900, // productPrice
        'Nice Shoose', // descreptaion
        true, // isOff
        10, // offPercentage
        // productImage
        require('../assets/images/Football/alpha-menace/alpha-menace-1.jpg'),
        true, // isAvailable
        // productImageList
        [
            require('../assets/images/Football/alpha-menace/alpha-menace-2.jpg'),
            require('../assets/images/Football/alpha-menace/alpha-menace-3.jpg'),
            require('../assets/images/Football/alpha-menace/alpha-menace-4.jpg'),
        ],
    ),
    new Product(
    2,
    'product',
    'Alpha Menace X ',
    1986,
    'Beautefull Shoose',
    false,
    10,
     require('../assets/images/Football/force-savage/force-savage-1.jpg'),
    true,
        [
            require('../assets/images/Football/force-savage/force-savage-2.jpg'),
            require('../assets/images/Football/force-savage/force-savage-3.jpg'),
            require('../assets/images/Football/force-savage/force-savage-4.jpg'),
        ],
    ),
    new Product(
    3,
    'product',
    'Alpha Menace',
    1900,
    'Nice Shoose',
    true,
    10,
     require('../assets/images/Football/vapor-edge/vapor-edge-1.jpg'),
    true,
    [
        require('../assets/images/Football/vapor-edge/vapor-edge-1.jpg'),
        require('../assets/images/Football/vapor-edge/vapor-edge-1.jpg'),
        require('../assets/images/Football/vapor-edge/vapor-edge-1.jpg'),
    ],
    ),
    new Product(
    4,
    'product',
    'Alpha Menace',
    250,
    'Nice Shoose',
    true,
    10,
    require('../assets/images/Football/vapor-edge-elite/vapor-edge-elite-1.jpg'),
    false,
    [
        require('../assets/images/Football/vapor-edge-elite/vapor-edge-elite-2.jpg'),
        require('../assets/images/Football/vapor-edge-elite/vapor-edge-elite-3.jpg'),
        require('../assets/images/Football/vapor-edge-elite/vapor-edge-elite-4.jpg'),
    ],
    ),
    new Product(
    5,
    'accessory',
    'Air Gorden3',
    150,
    'Nice Shoose',
    false,
    10,
    require('../assets/images/accessories/nike1.jpg'),
    true,
    [
        require('../assets/images/accessories/nike1.jpg'),
        require('../assets/images/accessories/nike2.jpg'),
        require('../assets/images/accessories/nike3.jpg'), 
    ],
    ),
    new Product(
    6,
    'accessory',
    'Air Gorden3',
    300,
    'Nice Shoose',
    true,
    10,
     require('../assets/images/accessories/nike3.jpg'),
    true,
    [
        require('../assets/images/accessories/nike1.jpg'),
        require('../assets/images/accessories/nike2.jpg'),
        require('../assets/images/accessories/nike3.jpg'), 
    ],
    ),
    new Product(
    7,
    'accessory',
    'Air Gorden4',
    450,
    'Nice Shoose',
    false,
    10,
    require('../assets/images/accessories/nike2.jpg'),
    false,
    [
        require('../assets/images/accessories/nike1.jpg'),
        require('../assets/images/accessories/nike2.jpg'),
        require('../assets/images/accessories/nike3.jpg'), 
    ],
    ),
    new Product(
    8,
    'children',
    'Air Gorden4',
    500,
    'Nice Shoose',
    false,
    10,
    require('../assets/images/children/nike2.jpg'),
    false,
    [
        require('../assets/images/children/nike1.jpg'),
        require('../assets/images/children/nike2.jpg'),
        require('../assets/images/children/nike3.jpg'), 
    ],
    ),
    new Product(
    9,
    'children',
    'Air Gorden4',
    250,
    'Nice Shoose',
    false,
    10,
    require('../assets/images/children/nike2.jpg'),
    false,
    [
        require('../assets/images/children/nike1.jpg'),
        require('../assets/images/children/nike2.jpg'),
        require('../assets/images/children/nike3.jpg'), 
    ],
    ),
    new Product(
        10,
        'children',
        'Air Gorden7',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/children/nike6.jpg'),
        false,
        [
            require('../assets/images/children/nike1.jpg'),
            require('../assets/images/children/nike2.jpg'),
            require('../assets/images/children/nike3.jpg'), 
        ],
        ),
];