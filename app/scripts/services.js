'use strict';

angular.module('puzzleForge2AssistantApp.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      var i;
      for ( i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId, 10)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


.factory('Weapons',   function() {
    // Might use a resource here that returns a JSON array

    var weapons = [{
      'name': 'Master Sword',
      'components': [{
        'material': 'silver',
        'shape': 'blade'
      }, {
        'material': 'silver',
        'shape': 'blade'
      }, {
        'material': 'netherium',
        'shape': 'handle'
      }],
      'gems': 4,
      'daytime': 'day',
      'type': 'Sword',
      'img': 'images/0.png'
    }, {
      'name': 'Excalibur',
      'components': [{
        'material': 'golden',
        'shape': 'blade'
      }, {
        'material': 'golden',
        'shape': 'blade'
      }, {
        'material': 'silver',
        'shape': 'handle'
      }],
      'enchantment': 4,
      'gems': 6,
      'type': 'Sword',
      'img': 'images/1.png'
    }, {
      'name': 'Kuraudo Sutoraifu',
      'components': [{
        'material': 'iron',
        'shape': 'blade'
      }, {
        'material': 'iron',
        'shape': 'blade'
      }, {
        'material': 'bronze',
        'shape': 'handle'
      }],
      'enchantment': 16,
      'gems': 6,
      'type': 'Sword',
      'img': 'images/2.png'
    }, {
      'name': 'Light Saber',
      'components': [{
        'material': 'crystal',
        'shape': 'blade'
      }, {
        'material': 'crystal',
        'shape': 'blade'
      }, {
        'material': 'silver',
        'shape': 'handle'
      }],
      'gems': 10,
      'type': 'Sword',
      'img': 'images/3.png'
    }, {
      'name': 'Omens Sword',
      'components': [{
        'material': 'silver',
        'shape': 'blade'
      }, {
        'material': 'silver',
        'shape': 'blade'
      }, {
        'material': 'silver',
        'shape': 'handle'
      }],
      'enchantment': 10,
      'gems': 6,
      'type': 'Sword',
      'img': 'images/4.png'
    }, {
      'name': 'Frostmourne',
      'components': [{
        'material': 'netherium',
        'shape': 'blade'
      }, {
        'material': 'iron',
        'shape': 'blade'
      }, {
        'material': 'silver',
        'shape': 'handle'
      }],
      'enchantment': 16,
      'daytime': 'night',
      'season': 'winter',
      'type': 'Sword',
      'img': 'images/5.png'
    }, {
      'name': 'Plasma Sword',
      'components': [{
        'material': 'crystal',
        'shape': 'blade'
      }, {
        'material': 'crystal',
        'shape': 'blade'
      }, {
        'material': 'iron',
        'shape': 'handle'
      }],
      'enchantment': 10,
      'type': 'Sword',
      'img': 'images/6.png'
    }, {
      'name': 'Soul Edge',
      'components': [{
        'material': 'iron',
        'shape': 'blade'
      }, {
        'material': 'netherium',
        'shape': 'blade'
      }, {
        'material': 'iron',
        'shape': 'handle'
      }],
      'gems': 4,
      'daytime': 'night',
      'type': 'Sword',
      'img': 'images/7.png'
    }, {
      'name': 'Magical Wand',
      'components': [{
        'material': 'bronze',
        'shape': 'handle'
      }, {
        'material': 'bronze',
        'shape': 'handle'
      }, {
        'material': 'golden',
        'shape': 'handle'
      }],
      'enchantment': 10,
      'type': 'Staff',
      'img': 'images/8.png'
    }, {
      'name': 'Stick of Truth',
      'components': [{
        'material': 'bronze',
        'shape': 'handle'
      }, {
        'material': 'bronze',
        'shape': 'handle'
      }, {
        'material': 'crystal',
        'shape': 'handle'
      }],
      'enchantment': 1,
      'season': 'spring',
      'type': 'Staff',
      'img': 'images/9.png'
    }, {
      'name': 'D. Mall weapon',
      'components': [{
        'material': 'crystal',
        'shape': 'handle'
      }, {
        'material': 'silver',
        'shape': 'handle'
      }, {
        'material': 'crystal',
        'shape': 'handle'
      }],
      'gems': 10,
      'daytime': 'night',
      'type': 'Staff',
      'img': 'images/10.png'
    }, {
      'name': 'Crowbar',
      'components': [{
        'material': 'iron',
        'shape': 'handle'
      }, {
        'material': 'iron',
        'shape': 'handle'
      }, {
        'material': 'bronze',
        'shape': 'handle'
      }],
      'daytime': 'day',
      'season': 'fall',
      'type': 'Staff',
      'img': 'images/11.png'
    }, {
      'name': 'Hyrule Shield',
      'components': [{
        'material': 'iron',
        'shape': 'plate'
      }, {
        'material': 'iron',
        'shape': 'plate'
      }, {
        'material': 'silver',
        'shape': 'plate'
      }],
      'gems': 4,
      'daytime': 'day',
      'type': 'Shield',
      'img': 'images/12.png'
    }, {
      'name': 'Medusa Shield',
      'components': [{
        'material': 'silver',
        'shape': 'plate'
      }, {
        'material': 'netherium',
        'shape': 'plate'
      }, {
        'material': 'silver',
        'shape': 'plate'
      }],
      'enchantment': 10,
      'gems': 2,
      'daytime': 'night',
      'type': 'Shield',
      'img': 'images/13.png'
    }, {
      'name': 'Kapta Namerica Shield',
      'components': [{
        'material': 'bronze',
        'shape': 'plate'
      }, {
        'material': 'silver',
        'shape': 'plate'
      }, {
        'material': 'iron',
        'shape': 'plate'
      }],
      'gems': 3,
      'type': 'Shield',
      'img': 'images/14.png'
    }, {
      'name': 'Cake Server',
      'components': [{
        'material': 'silver',
        'shape': 'plate'
      }, {
        'material': 'silver',
        'shape': 'handle'
      }, {
        'material': 'golden',
        'shape': 'handle'
      }],
      'gems': 2,
      'season': 'spring',
      'type': 'Shovel',
      'img': 'images/15.png'
    }, {
      'name': 'Destiny Shovel',
      'components': [{
        'material': 'golden',
        'shape': 'plate'
      }, {
        'material': 'bronze',
        'shape': 'handle'
      }, {
        'material': 'golden',
        'shape': 'handle'
      }],
      'enchantment': 10,
      'gems': 5,
      'type': 'Shovel',
      'img': 'images/16.png'
    }, {
      'name': 'Forest Shovel',
      'components': [{
        'material': 'crystal',
        'shape': 'plate'
      }, {
        'material': 'bronze',
        'shape': 'handle'
      }, {
        'material': 'bronze',
        'shape': 'handle'
      }],
      'enchantment': 16,
      'type': 'Shovel',
      'img': 'images/17.png'
    }, {
      'name': 'Korean Armor',
      'components': [{
        'material': 'golden',
        'shape': 'plate'
      }, {
        'material': 'golden',
        'shape': 'plate'
      }, {
        'material': 'silver',
        'shape': 'blade'
      }],
      'enchantment': 6,
      'gems': 1,
      'type': 'Armor',
      'img': 'images/18.png'
    }, {
      'name': 'Pegasus Armor',
      'components': [{
        'material': 'bronze',
        'shape': 'plate'
      }, {
        'material': 'bronze',
        'shape': 'plate'
      }, {
        'material': 'bronze',
        'shape': 'blade'
      }],
      'enchantment': 16,
      'gems': 4,
      'type': 'Armor',
      'img': 'images/19.png'
    }, {
      'name': 'Elronmann Armor',
      'components': [{
        'material': 'iron',
        'shape': 'plate'
      }, {
        'material': 'iron',
        'shape': 'plate'
      }, {
        'material': 'golden',
        'shape': 'blade'
      }],
      'gems': 10,
      'daytime': 'day',
      'type': 'Armor',
      'img': 'images/20.png'
    }, {
      'name': 'Thor Hammer',
      'components': [{
        'material': 'silver',
        'shape': 'plate'
      }, {
        'material': 'silver',
        'shape': 'plate'
      }, {
        'material': 'iron',
        'shape': 'handle'
      }],
      'enchantment': 14,
      'season': 'winter',
      'type': 'Mace',
      'img': 'images/21.png'
    }, {
      'name': 'Sulfuras Hammer',
      'components': [{
        'material': 'golden',
        'shape': 'plate'
      }, {
        'material': 'golden',
        'shape': 'plate'
      }, {
        'material': 'golden',
        'shape': 'handle'
      }],
      'enchantment': 8,
      'gems': 6,
      'season': 'summer',
      'type': 'Mace',
      'img': 'images/22.png'
    }, {
      'name': 'Wert Leg',
      'components': [{
        'material': 'bronze',
        'shape': 'plate'
      }, {
        'material': 'bronze',
        'shape': 'plate'
      }, {
        'material': 'iron',
        'shape': 'handle'
      }],
      'enchantment': 2,
      'daytime': 'night',
      'season': 'spring',
      'type': 'Mace',
      'img': 'images/23.png'
    }, {
      'name': 'JumpMan Hammer',
      'components': [{
        'material': 'iron',
        'shape': 'plate'
      }, {
        'material': 'iron',
        'shape': 'plate'
      }, {
        'material': 'bronze',
        'shape': 'handle'
      }],
      'season': 'winter',
      'type': 'Mace',
      'img': 'images/24.png'
    }, {
      'name': 'Longinus Spear',
      'components': [{
        'material': 'iron',
        'shape': 'handle'
      }, {
        'material': 'iron',
        'shape': 'handle'
      }, {
        'material': 'golden',
        'shape': 'blade'
      }],
      'enchantment': 10,
      'type': 'Spear',
      'img': 'images/25.png'
    }, {
      'name': 'Death Scythe',
      'components': [{
        'material': 'iron',
        'shape': 'handle'
      }, {
        'material': 'iron',
        'shape': 'handle'
      }, {
        'material': 'iron',
        'shape': 'blade'
      }],
      'enchantment': 20,
      'daytime': 'night',
      'type': 'Spear',
      'img': 'images/26.png'
    }, {
      'name': 'Chuen Spear',
      'components': [{
        'material': 'iron',
        'shape': 'handle'
      }, {
        'material': 'golden',
        'shape': 'handle'
      }, {
        'material': 'silver',
        'shape': 'blade'
      }],
      'gems': 10,
      'type': 'Spear',
      'img': 'images/27.png'
    }, {
      'name': 'Achilles Spear',
      'components': [{
        'material': 'bronze',
        'shape': 'handle'
      }, {
        'material': 'bronze',
        'shape': 'handle'
      }, {
        'material': 'golden',
        'shape': 'blade'
      }],
      'gems': 4,
      'season': 'summer',
      'type': 'Spear',
      'img': 'images/28.png'
    }, {
      'name': 'Valhalla Axe',
      'components': [{
        'material': 'silver',
        'shape': 'plate'
      }, {
        'material': 'silver',
        'shape': 'blade'
      }, {
        'material': 'iron',
        'shape': 'handle'
      }],
      'enchantment': 8,
      'season': 'winter',
      'type': 'Axe',
      'img': 'images/29.png'
    }, {
      'name': 'Carnagaxe',
      'components': [{
        'material': 'crystal',
        'shape': 'plate'
      }, {
        'material': 'golden',
        'shape': 'blade'
      }, {
        'material': 'iron',
        'shape': 'handle'
      }],
      'gems': 6,
      'type': 'Axe',
      'img': 'images/30.png'
    }, {
      'name': 'Tomahawk',
      'components': [{
        'material': 'iron',
        'shape': 'plate'
      }, {
        'material': 'silver',
        'shape': 'blade'
      }, {
        'material': 'bronze',
        'shape': 'handle'
      }],
      'enchantment': 10,
      'season': 'summer',
      'type': 'Axe',
      'img': 'images/31.png'
    }, {
      'name': 'Eternal Ice Axe',
      'components': [{
        'material': 'crystal',
        'shape': 'plate'
      }, {
        'material': 'crystal',
        'shape': 'blade'
      }, {
        'material': 'silver',
        'shape': 'handle'
      }],
      'gems': 4,
      'season': 'winter',
      'type': 'Axe',
      'img': 'images/32.png'
    }, {
      'name': 'Tortoise Double-blade',
      'components': [{
        'material': 'crystal',
        'shape': 'plate'
      }, {
        'material': 'silver',
        'shape': 'blade'
      }, {
        'material': 'silver',
        'shape': 'blade'
      }],
      'enchantment': 10,
      'gems': 5,
      'type': 'Twin Blades',
      'img': 'images/33.png'
    }, {
      'name': 'Storm Double-blade',
      'components': [{
        'material': 'golden',
        'shape': 'plate'
      }, {
        'material': 'silver',
        'shape': 'blade'
      }, {
        'material': 'silver',
        'shape': 'blade'
      }],
      'enchantment': 16,
      'season': 'fall',
      'type': 'Twin Blades',
      'img': 'images/34.png'
    }, {
      'name': 'Dark Elf Double-blade',
      'components': [{
        'material': 'iron',
        'shape': 'plate'
      }, {
        'material': 'iron',
        'shape': 'blade'
      }, {
        'material': 'iron',
        'shape': 'blade'
      }],
      'enchantment': 20,
      'daytime': 'night',
      'type': 'Twin Blades',
      'img': 'images/35.png'
    }, {
      'name': 'Solar Double-blade',
      'components': [{
        'material': 'golden',
        'shape': 'plate'
      }, {
        'material': 'golden',
        'shape': 'blade'
      }, {
        'material': 'golden',
        'shape': 'blade'
      }],
      'gems': 4,
      'daytime': 'day',
      'season': 'summer',
      'type': 'Twin Blades',
      'img': 'images/36.png'
    }, {
      'name': 'Volf Erin Claws',
      'components': [{
        'material': 'silver',
        'shape': 'blade'
      }, {
        'material': 'silver',
        'shape': 'blade'
      }, {
        'material': 'silver',
        'shape': 'blade'
      }],
      'daytime': 'night',
      'type': 'Claws',
      'img': 'images/37.png'
    }, {
      'name': 'Hungry Cat Claw',
      'components': [{
        'material': 'bronze',
        'shape': 'blade'
      }, {
        'material': 'bronze',
        'shape': 'blade'
      }, {
        'material': 'bronze',
        'shape': 'blade'
      }],
      'enchantment': 6,
      'gems': 3,
      'daytime': 'night',
      'type': 'Claws',
      'img': 'images/38.png'
    }, {
      'name': 'Ice Shurikens',
      'components': [{
        'material': 'crystal',
        'shape': 'blade'
      }, {
        'material': 'crystal',
        'shape': 'blade'
      }, {
        'material': 'crystal',
        'shape': 'blade'
      }],
      'enchantment': 20,
      'season': 'winter',
      'type': 'Claws',
      'img': 'images/39.png'
    }];


    var all = function() {
      return weapons;
    };
    return {
      all: all
    };


  }
);


// .factory('Weapons', ['$http','$q' ,function($http,$q) {
//   // Might use a resource here that returns a JSON array

//   var weapons = {};
//   var getWeapons=function(){
//     var deferred=$q.defer();
//     $http.get('scripts/weapon_data.json').success(function(data){
//       weapons = data;
//       deferred.resolve('success');
//     });
//     return deferred.promise;
//   };


//   var all=function(){
//     var deferred=$q.defer();
//     getWeapons()
//     .then(function(){
//       deferred.resolve(weapons);
//     })
//     return deferred.promise;
//   };
//   return {
//     all:all
//   };


// }]);