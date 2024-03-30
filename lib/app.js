// module Angualr js 
var myModule = angular.module('myapp', []);

// Controller In Agular Js 
myModule.controller('con', function ($scope) {
    $scope.item = [
        {
            'name': 'T-Shirt',
            'price': 19.99,
            'gender': 'Man',
            'size': 'Medium',
            'image': '../gender/man/1.png'

        },
        {
            'name': 'Shirt Boys',
            'price': 12.00,
            'gender': 'Man',
            'size': 'large',
            'image': '../gender/man/2.png'

        },
        {
            'name': 'Boy T-Shirt Love',
            'price': 2.1,
            'gender': 'Man',
            'size': 'small',
            'image': '../gender/man/3.png'


        },
        {
            'name': 'T-Shirt charged',
            'price': 10.49,
            'gender': 'Man',
            'size': 'Medium',
            'image': '../gender/man/4.png'
        },

        {
            'name': 'Man jack',
            'price': 118.26,
            'gender': 'Man',
            'size': 'Medium',
            'image': '../gender/man/5.png'

        },
        {
            'name': 'gently man',
            'price': 201.00,
            'gender': 'Man',
            'size': 'large',
            'image': '../gender/man/6.png'

        },
        {
            'name': 'Teacher Jacket',
            'price': 59.1,
            'gender': 'Man',
            'size': 'small',
            'image': '../gender/man/7.png'


        },
        {
            'name': 'Man Jacket sport',
            'price': 101.49,
            'gender': 'Man',
            'size': 'small',
            'image': '../gender/man/8.png'
        },



        {
            'name': 'T-Shirt Girls',
            'price': 11.99,
            'gender': 'female',
            'size': 'Medium',
            'image': '../gender/women/1.png'

        },
        {
            'name': 'dress for girls',
            'price': 131.00,
            'gender': 'female',
            'size': 'large',
            'image': '../gender/women/2.png'

        },
        {
            'name': 'dress Orange',
            'price': 52.1,
            'gender': 'female',
            'size': 'small',
            'image': '../gender/women/3.png'


        },
        {
            'name': 'T-Shirt flower',
            'price': 32.49,
            'gender': 'female',
            'size': 'Medium',
            'image': '../gender/women/4.png'
        },

        {
            'name': 't-shirt PWD',
            'price': 11.26,
            'gender': 'female',
            'size': 'Medium',
            'image': '../gender/women/5.png'

        },
        {
            'name': 'T-shirt for girls',
            'price': 21.00,
            'gender': 'female',
            'size': 'large',
            'image': '../gender/women/6.png'

        },
        {
            'name': 'dress Pink',
            'price': 159.1,
            'gender': 'female',
            'size': 'small',
            'image': '../gender/women/7.png'


        },
        {
            'name': 'Dress Red Classic',
            'price': 1500.50,
            'gender': 'female',
            'size': 'large',
            'image': '../gender/women/8.png'
        },
    ]
});

