import Product from '../models/Product';

export const Items = [
    new Product(
        1, // id
        'football', // category
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
    'football',
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
    'football',
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
    'football',
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
    'basketball',
    'Air Gorden3',
    150,
    'Nice Shoose',
    false,
    10,
    require('../assets/images/Basketball/air-zoom/air-zoom-1.jpg'),
    true,
    [
        require('../assets/images/Basketball/air-zoom/air-zoom-2.jpg'),
        require('../assets/images/Basketball/air-zoom/air-zoom-3.jpg'),
        require('../assets/images/Basketball/air-zoom/air-zoom-4.jpg'),
    ],
    ),
    new Product(
    6,
    'basketball',
    'KD - 14',
    300,
    'Nice Shoose',
    true,
    10,
    require('../assets/images/Basketball/kd14/kd14-1.jpg'),
    true,
    [
        require('../assets/images/Basketball/kd14/kd14-2.jpg'),
        require('../assets/images/Basketball/kd14/kd14-3.jpg'),
        require('../assets/images/Basketball/kd14/kd14-4.jpg'),
    ],
    ),
    new Product(
    7,
    'basketball',
    'KD - 14 Team',
    450,
    'Nice Shoose',
    false,
    10,
    require('../assets/images/Basketball/kd14-team/kd14-team-1.jpg'),
    false,
    [
        require('../assets/images/Basketball/kd14-team/kd14-team-2.jpg'),
        require('../assets/images/Basketball/kd14-team/kd14-team-3.jpg'),
        require('../assets/images/Basketball/kd14-team/kd14-team-4.jpg'),
    ],
    ),
    new Product(
    8,
    'basketball',
    'Lebron',
    500,
    'Nice Shoose',
    false,
    10,
    require('../assets/images/Basketball/lebron/lebron-1.jpg'),
    false,
    [
        require('../assets/images/Basketball/lebron/lebron-2.jpg'),
        require('../assets/images/Basketball/lebron/lebron-3.jpg'),
        require('../assets/images/Basketball/lebron/lebron-4.jpg'),
    ],
    ),
    new Product(
    9,
    'jordan',
    'Air Jordan',
    250,
    'Nice Shoose',
    true,
    10,
    require('../assets/images/Jordan/air-jordan/air-jordan-1.jpg'),
    false,
    [
        require('../assets/images/Jordan/air-jordan/air-jordan-2.jpg'),
        require('../assets/images/Jordan/air-jordan/air-jordan-3.jpg'),
        require('../assets/images/Jordan/air-jordan/air-jordan-4.jpg'),
    ],
    ),
    new Product(
        10,
        'jordan',
        'Air Gorden',
        250,
        'Nice Shoose',
        true,
        10,
        require('../assets/images/Jordan/air-jordan-centre/air-jordan-centre-1.jpg'),
        true,
        [
            require('../assets/images/Jordan/air-jordan-centre/air-jordan-centre-2.jpg'),
            require('../assets/images/Jordan/air-jordan-centre/air-jordan-centre-3.jpg'),
            require('../assets/images/Jordan/air-jordan-centre/air-jordan-centre-4.jpg'),
        ],
        ),
        
    new Product(
        11,
        'jordan',
        'Air Gorden Psychic',
        250,
        'Nice Shoose',
        true,
        10,
        require('../assets/images/Jordan/air-jordan-psychic/air-jordan-psychic-1.jpg'),
        true,
        [
            require('../assets/images/Jordan/air-jordan-psychic/air-jordan-psychic-2.jpg'),
            require('../assets/images/Jordan/air-jordan-psychic/air-jordan-psychic-3.jpg'),
            require('../assets/images/Jordan/air-jordan-psychic/air-jordan-psychic-4.jpg'),
        ],
        ),
        
    new Product(
        12,
        'jordan',
        'Air Gorden Delta',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/Jordan/jordan-delta/jordan-delta-1.jpg'),
        false,
        [
            require('../assets/images/Jordan/jordan-delta/jordan-delta-2.jpg'),
            require('../assets/images/Jordan/jordan-delta/jordan-delta-3.jpg'),
            require('../assets/images/Jordan/jordan-delta/jordan-delta-4.jpg'),
        ],
        ),
        
    new Product(
        13,
        'lifeStyle',
        'Air Gorden',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/LifeStyle/air-force-1/air-force-1-1.jpg'),
        false,
        [
            require('../assets/images/LifeStyle/air-force-1/air-force-1-2.jpg'),
            require('../assets/images/LifeStyle/air-force-1/air-force-1-3.jpg'),
            require('../assets/images/LifeStyle/air-force-1/air-force-1-4.jpg'),
        ],
        ),
        
    new Product(
        14,
        'lifeStyle',
        'Air Max',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/LifeStyle/air-max/air-max-1.jpg'),
        false,
        [
            require('../assets/images/LifeStyle/air-max/air-max-2.jpg'),
            require('../assets/images/LifeStyle/air-max/air-max-3.jpg'),
            require('../assets/images/LifeStyle/air-max/air-max-4.jpg'),
        ],
        ),
        
    new Product(
        15,
        'lifeStyle',
        'Air Max Plus',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/LifeStyle/air-max-plus/air-max-plus-1.jpg'),
        false,
        [
            require('../assets/images/LifeStyle/air-max-plus/air-max-plus-2.jpg'),
            require('../assets/images/LifeStyle/air-max-plus/air-max-plus-3.jpg'),
            require('../assets/images/LifeStyle/air-max-plus/air-max-plus-4.jpg'),
        ],
        ),
        
    new Product(
        16,
        'lifeStyle',
        'Air Gorden',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/LifeStyle/blazer-mid/blazer-mid-1.jpg'),
        false,
        [
            require('../assets/images/LifeStyle/blazer-mid/blazer-mid-2.jpg'),
            require('../assets/images/LifeStyle/blazer-mid/blazer-mid-3.jpg'),
            require('../assets/images/LifeStyle/blazer-mid/blazer-mid-4.jpg'),
        ],
        ),
        
    new Product(
        17,
        'running',
        'Air Zoom Alphlfy',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/Running/air-zoom-alphafly/air-zoom-alphafly-1.jpg'),
        false,
        [
            require('../assets/images/Running/air-zoom-alphafly/air-zoom-alphafly-2.jpg'),
            require('../assets/images/Running/air-zoom-alphafly/air-zoom-alphafly-3.jpg'),
            require('../assets/images/Running/air-zoom-alphafly/air-zoom-alphafly-4.jpg'),
        ],
        ),
        
    new Product(
        18,
        'running',
        'Air Gorden',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/Running/air-zoom-pegasus/air-zoom-pegasus-1.jpg'),
        false,
        [
            require('../assets/images/Running/air-zoom-pegasus/air-zoom-pegasus-2.jpg'),
            require('../assets/images/Running/air-zoom-pegasus/air-zoom-pegasus-3.jpg'),
            require('../assets/images/Running/air-zoom-pegasus/air-zoom-pegasus-4.jpg'),
        ],
        ),
        
    new Product(
        19,
        'running',
        'Infinity Run',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/Running/react-infinity-run/react-infinity-run-1.jpg'),
        false,
        [
            require('../assets/images/Running/react-infinity-run/react-infinity-run-2.jpg'),
            require('../assets/images/Running/react-infinity-run/react-infinity-run-3.jpg'),
            require('../assets/images/Running/react-infinity-run/react-infinity-run-4.jpg'),
        ],
        ),
        
    new Product(
        20,
        'running',
        'Zoom Tempo',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/Running/zoom-tempo/zoom-tempo-1.jpg'),
        false,
        [
            require('../assets/images/Running/zoom-tempo/zoom-tempo-2.jpg'),
            require('../assets/images/Running/zoom-tempo/zoom-tempo-3.jpg'),
            require('../assets/images/Running/zoom-tempo/zoom-tempo-4.jpg'),
        ],
        ),
        
    new Product(
        21,
        'soccer',
        'Gt 2 Elite',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/Soccer/gt2-elite/gt2-elite-1.jpg'),
        false,
        [
            require('../assets/images/Soccer/gt2-elite/gt2-elite-1.jpg'),
            require('../assets/images/Soccer/gt2-elite/gt2-elite-1.jpg'),
            require('../assets/images/Soccer/gt2-elite/gt2-elite-1.jpg'),
        ],
        ),
        
    new Product(
        22,
        'soccer',
        'Air Gorden',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/Soccer/mercurial-superfly/mercurial-superfly-1.jpg'),
        false,
        [
            require('../assets/images/Soccer/mercurial-superfly/mercurial-superfly-2.jpg'),
            require('../assets/images/Soccer/mercurial-superfly/mercurial-superfly-3.jpg'),
            require('../assets/images/Soccer/mercurial-superfly/mercurial-superfly-4.jpg'),
        ],
        ),
        
    new Product(
        23,
        'soccer',
        'Air Gorden',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/Soccer/phantom/phantom-1.jpg'),
        false,
        [
            require('../assets/images/Soccer/phantom/phantom-2.jpg'),
            require('../assets/images/Soccer/phantom/phantom-3.jpg'),
            require('../assets/images/Soccer/phantom/phantom-4.jpg'),
        ],
        ),
 
    new Product(
        24,
        'soccer',
        'Air Gorden',
        250,
        'Nice Shoose',
        false,
        10,
        require('../assets/images/Soccer/tiempo-legend/tiempo-legend-1.jpg'),
        false,
        [
            require('../assets/images/Soccer/tiempo-legend/tiempo-legend-2.jpg'),
            require('../assets/images/Soccer/tiempo-legend/tiempo-legend-3.jpg'),
            require('../assets/images/Soccer/tiempo-legend/tiempo-legend-4.jpg'),
        ],
        ),

];
export const Coupons = [

    {
        id: 1,
        name: 'coupon-1-10%',
        Discount: 10,
    },

    {
        id: 2,
        name: 'coupon-2-15%',
        Discount: 15,
    },

    {
        id: 3,
        name: 'coupon-3-20%',
        Discount: 20,
    },

    {
        id: 4,
        name: 'coupon-4-25%',
        Discount: 25,
    },
    {
        id: 1,
        name: '1',
        Discount: 0.9,
    },
    
]

