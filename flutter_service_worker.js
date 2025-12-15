'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "bb0de1f4b2f03bbbb6ef4a303f75930f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "899a36b3ca70be1bfb28f63c87b4c9b1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e19e4657872ab4b7d44cc043205e96b",
".git/logs/refs/heads/main": "c6e63cf9f404e4f502ad8751912210bc",
".git/objects/00/da3dc243c1651682ef05b03a963214a1efd618": "3907ad81b4e591952c8eed7cca59041f",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/c7c859f412541aff1f3382ec193e91d2da7f34": "002e2a87bc7cb9def03bebe5f414432f",
".git/objects/06/e0cabd5246aaa0d222d35c2bc0093757cab1a0": "ed3363869b0c9ab210e81d9da9887671",
".git/objects/08/f820b14464623f429c9e007bf2cdf987ca6388": "a93451fb5979b3a3b91652b8cf52b793",
".git/objects/09/1b7e9930d22528cf1ea41e6196154798dee9de": "d417f1d1be1a50d7af5327c2c98fa73a",
".git/objects/0f/2d2c94d8a39eb59930af002bd739bf257c9914": "f49b16f9ac4ab55d8ea4c376032f1b91",
".git/objects/10/84760ffc8eeb528e16d7a420bcff3094008ffb": "8be9a5a12ce6ac2d585d44a9a9f981d5",
".git/objects/10/875081851d5edd16b8cb6c491566152f1afc92": "8f395b51d5a771f14cb8fab9cf14fc1c",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/13/5983bef3aaec06890a1ba45981d9c9fa9bd8af": "fdb5ee3b8ff3a5ac09801481ab575278",
".git/objects/19/d2d42e5818aa5b28640d6f059169dff874a4ab": "9b6531d61ca9f323b4dde9a7c5975f6e",
".git/objects/1a/5519e6bf417ba7d2dc3405a79d4112b6624780": "e1b56e932d3201463e2b71c50ebcf140",
".git/objects/1d/2b9d08b531376512971d415412fc171d16911d": "75259f13384ee02cc7f464b580e283e2",
".git/objects/1f/9e248b34f6c0dd62528e45f38938948d9ac76b": "23e74cee313b94fb6b8ecf924f64c652",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/23/a54995c3353be856178b2e38856ae21e76e167": "e2bf093045b16a3c4c50d8419b26fa85",
".git/objects/25/3e8403059b1c7d802ebb9818c6ce8a6d24a9f0": "062a4d5a1c80477a9c37a5d6001b095a",
".git/objects/29/95d4711761b4e879a41ed602b96b7205232552": "4f5e0adddbe20dcd85c42a02dae6ab8d",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2d/e9326160add2226c4abd22600ba31aea47448b": "e4493eb60bda129449355c8284dc816d",
".git/objects/2f/548f24e9f2332ccf56a799b07131245358a9ac": "f75e736d4daee5c69c9100a08f1837e6",
".git/objects/32/a79eebe3ae4ce3d9cbb871bf58922f846ffd0d": "1a1a3b49670fe6267b1eb349d1b86d50",
".git/objects/34/648521ba89bd08200c9b0a44434210e7fc0cd1": "d2e6b072bcb5138c1c4de0272efef75f",
".git/objects/38/f331019cc28c31afe237cc6c001196df417ff8": "4ec0a071d1db49b449c9c5cdcd91c679",
".git/objects/3a/ff5e2885554de7d1ddfaa403f1394bfa685080": "4af5ea6001a1438009f7a5f4062878a4",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3c/a735f0db7a1f8b9e2b3363d47e7fee15f6d5d1": "e73d873ab23100cd9cb4b79f8e386cbd",
".git/objects/41/7cb3785dc4b7d63b1d43059ee14de153c9c6cb": "a8e9cfd1ac3d4b636eddd90fec15ec7d",
".git/objects/42/bbc44581454bcf4164a193d423426c5aab7886": "fce1eb27d85d9e8ecdc2b1bb39d608c1",
".git/objects/43/021d1621ac668deb4a3be2a93597a8045e366c": "e2fda8c069f60edbf14a9cc84ddd6826",
".git/objects/43/0aaa7ad0b117d9ea3c1f52bcbd73e7c8a76908": "5e4d7c6c861dfa5abb4950bc7a55ba1a",
".git/objects/44/b5750100c226be0b964f8f89f8d7b44a59af7b": "c56ff3b4df1058ac1f39fd78086e3ca3",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/6ac6481b01fb0f4cbcf9590958a8199b474fc3": "68600248db9ad0c79188c75dc4df55cf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/7d2a258d812373e5f75ea171455e3a9f8ea563": "90aaef797d787e0f3fd1b280297fd587",
".git/objects/48/924459e97b8376f3726f51d760213fec93d129": "ef7418c71ff25c6d807abee745e758d7",
".git/objects/49/73db47036adef8ef8ba654ef86ac4a7d5989b9": "c742eb70c751d300bdeeee068593984b",
".git/objects/4c/af219c4302d0767c468cdcfc35a880c5fef758": "4a5e0c0330359ff9d54b2555c63c05e1",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/849e14ddb100eff88edf843e72357214fe620f": "d2ec1dde962f42a399438fe913772539",
".git/objects/5a/98ba30fabcdffe7bad9ffaa57251f0251ec0dd": "6c6b76f3644f142e3d6958713308f6a0",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/ba64f79c5d07f423e766529eb939b4a231e28c": "a6328ba780bf9d8149c954df0dc96f63",
".git/objects/5f/558fabb549a45f05a2500e577adc447eb359df": "fe55291b28f100c1f6bcf2c88943e38f",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/43e165ad9d1a9e81e1abcd43fc2784cdad8b51": "b4dd906d6d163aba400bb7452257997e",
".git/objects/6a/b8a106004a58a626ed4c8edc08d48053645763": "307b92e5b3d04fb10d688afcb6a51aa2",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/c8248341437522abf86ead423d59168030017c": "fc58ff4e2d292da91386b66a7a515684",
".git/objects/6c/d952b42899fa16ddec15e6ac0c2bd62f3dec75": "a8492b3700d49bff48fbf51cf0287909",
".git/objects/6f/6151ba401a7db431435bac1410eda573bfe862": "e7e2695c764d7ace53b1dc6e041a8f18",
".git/objects/70/3fa28ac0fb35bc4e8cb56b298cb5fc94a42087": "15a4c196673aa0c7e9dcd36989f87f94",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/4853158e225ec28947efa33ddc785d77c887e0": "b428b3e51842de4ed98a05c7a57f02d9",
".git/objects/73/c595737d78f66870dd2693f5e8a27ac8ce93df": "6f7f9a912776f5016a65bb0542b4e442",
".git/objects/74/b7ada8e99636c0704feb73f6d0ccb248c350ef": "56c9666db8449695bb5e3908c42827fa",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/75/f1c04cb713b6a7be374184cd0981f0efc6bc73": "35a68d036645095c3a2a438df5ce5fd3",
".git/objects/78/d39e71917c8bb8ec5f1f6dfc6c8a1d3cb0ba5a": "6bdb12863f3d398cff338abec1781533",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7e/02b532d0e470829fb9ea959e5eda43402c6d3a": "4fa045feb3c0e062cbe41f87b413c8df",
".git/objects/7f/bda28025b40b3e63f101431d541e679fa5becd": "3689da77b6504a78c01db14bbff5beaf",
".git/objects/7f/ca912f52c0090391b076f81f9084275335cc7c": "f3c7c8bf006a058c7742c3cd972890ad",
".git/objects/85/ff093de94f3aa82592e3320bfe8b0d16bbc553": "bf5defe531bc58ea52da0d5617d58365",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/c62665e5367ff147f6c02fbfdf4e60d18e321f": "3f643f3cd22af70caa785976e242cc21",
".git/objects/8f/f369410a0d55918692a186da3764a65747a5a1": "9e6edbcd4ef833b2ecb0521c2a907a49",
".git/objects/94/3e4b7016830c38b0fd52e0b955e7013184fda2": "39b30387ba0756f9aa988067500722d6",
".git/objects/96/cc8c7e27894c4dbbfc7a546d16090923adddf1": "de3ce0dfcb4321f0bf9192edc7fb7448",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/76665eab4efe13ec48f3252a8668a8b04f5c8a": "4e702cb81eff32d52385561af5364775",
".git/objects/9d/83aafa806a8d71ac035f060e202daed9e3be1c": "43990fc90a973f4bfaaa7d296d19227b",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/a6/ea804f60fdada485674309e29b5c1bbdd22330": "204df4568044bb6e2c4217de5b7a32cf",
".git/objects/a7/299f40f648cccc5a3c60d62d1c270eccf9318a": "67ebdb832d66cd69d3529ea565f61ea6",
".git/objects/ad/c59e1f1b25d32ec80732b2feca3f9c56d5f733": "b79a911e237e2a5ba9f7eee50e286207",
".git/objects/ae/38ee6d839160f8911fe17e8839f38303386fdb": "25a06c799e84cb1191efa752c18a3b56",
".git/objects/b0/4b26a0f18ace6320603c272c1c4c15403dc962": "15789c377cea75304a1b116ae2a5cd66",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/c0ad99bdb934a402dbe147105ffd4aaf33a1d5": "1fab37b9cdca9a4e9db255ae8127318a",
".git/objects/b7/2bc8e8bdca7075f27ed9f8e5a72efab407a06f": "586c4f28c7d8dd773ae58e7ef205995d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/a018f5f5db8abbbd4655f121cebec5054ecbb8": "3b188ae7f196566e3e723d6d0f6377e8",
".git/objects/be/310d1fac4f50f69a19d10ee772900581506f2a": "ee856c7fec1a8dc41fc50238fa3f4e44",
".git/objects/be/81c0e47e0091c5f62d3ab5f36d3c2e3279c4b3": "0653631f3ce420d180f6075e3586798f",
".git/objects/be/a390188480291d2d91f06d67eee4f4151f73a9": "53729a1f04e32377d066960df3da632e",
".git/objects/c0/21e947c345ccb7482c0bc19dc87a9714b9172e": "d2f51a369a127033a75029099366ff5e",
".git/objects/c1/ebd6aa021ecdd9e532321d69f1493d52d3a0c5": "5d1b7a8db4163c19e11803841c16499c",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c3/dd7f5517a507f0b022b1b4a3363e93c016fa54": "7cf30de33a3183362d89da5d6c73361a",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c9/4363e0246957856d6e26129ccfc4cd8166f4eb": "798c12a5eec7ac6f3c41ad6d15767ed5",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d2/0eb172b00e1290acdf5d003778b600e3401451": "6dda3ecbdc18f4b5c8e9f30eb331b309",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b36da9e4ca270b90e176cce0ca4ef89550c57a": "9cb66710aac5f83f394fb1d4a6510e99",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ce9e04949a1516e131a6e32b820f1df2a7bb96": "f3304164f6291285ca4960ed94004c2c",
".git/objects/d7/da9164a604fc5873cff867fa8712ff67980b01": "1f0675bd2bb34bcfea2a83d792865456",
".git/objects/d8/c009406ff6f871362a607bdab82b78fcf9200a": "04de472deefbb21c1429ccc001f0f587",
".git/objects/db/57ff0ef96d3754276ca88cf6d4fcef63c9c33e": "73af1fdac552572b65791dd050f1572d",
".git/objects/e0/5c40e98bbcfd62e8f0a89a1f05737c536aa1ff": "46f8c2bbf52bd9fdbc9acc81a6179131",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/aca2e44d20ae6a9b93fccf0186e8cd51208ba3": "1b334720be7aaec503483fcb26ca4860",
".git/objects/e6/127ccec47c0f42a65d85e35d7784f514cbecaa": "5d0800276955e217312cb58ade575d65",
".git/objects/e7/9125b1cfef9fd936cf0155554bc5ff1c5477fe": "87b188f520821ab9dcb4bcbc11d3fd58",
".git/objects/e7/c495baa6c1600f4679b306f30613339be223b0": "d04bef1585b8f09c08e493465f7baa37",
".git/objects/e9/922bf9b75a8bd7792ed7dd2f6bd5de9d0a9eaf": "60c46c0e4f18d90bffa83a8bacaaeefa",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b3b5c10fcfe5662f6b9e652ceee616c3fdd4ea": "8d13387269d59e5db46a6d9921342a97",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/d72f5f7659c06a17be816904fa90c6d3f80591": "03bed1adae2a762f49eb99b38cacaaae",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "8dc4fed66f78a789221e0e436d7393f4",
".idea/caches/deviceStreaming.xml": "7ec4c7c46ee06dde6705da6ad030f76b",
".idea/material_theme_project_new.xml": "7a870bab3e4b98ceef614759ca51ff7b",
".idea/misc.xml": "f46b3cae22635f78d804b2e47c21394c",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "1a16809a3a296b65911ab7b1b4ce2459",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "07802f8217277db116e1cabdccd8cdad",
"assets/AssetManifest.bin": "dc9f4661e037b78860596118b41f430c",
"assets/AssetManifest.bin.json": "b1f576157af6683cadcdb2f48482f4cf",
"assets/AssetManifest.json": "9ed7a358c937bd0568a01ef7d9e7f72b",
"assets/assets/app_icon.png": "4e2f0ce794b2f79a65ce6782dd9dab02",
"assets/assets/images/b.jpg": "5601b5a761e26ae31f90aa284770a909",
"assets/assets/images/defaults/level_default_0.jpg": "3e74a99104d39884aa3f7c281aeead1f",
"assets/assets/images/defaults/level_default_0.png": "4a1a6ab6eb77f6bb7fef9214bbfef38e",
"assets/assets/images/defaults/level_default_1.jpg": "ab79aef80a77d0e7e61f1be4d8b811d6",
"assets/assets/images/defaults/level_default_1.png": "a1407a13a1731dd089f99a1e3f3aeb7a",
"assets/assets/images/defaults/level_default_10.jpg": "79af3adf71561dfd85f5faa70734a47f",
"assets/assets/images/defaults/level_default_10.png": "6e403bc3c05386e359f97a8594f577a0",
"assets/assets/images/defaults/level_default_11.jpg": "dcb09f7b9356955309fe33a0d5b34e71",
"assets/assets/images/defaults/level_default_11.png": "d71f69b95c5e3b9c24f10a2274b3a507",
"assets/assets/images/defaults/level_default_2.jpg": "5de6c6e4e8a0ad9352e325f32178b064",
"assets/assets/images/defaults/level_default_2.png": "c10c0d645d1d158a8937a29b32c57c52",
"assets/assets/images/defaults/level_default_3.jpg": "b88e71403ef244517466f6c106c10398",
"assets/assets/images/defaults/level_default_3.png": "9062fd71c4dee7adb1235b3f1117472c",
"assets/assets/images/defaults/level_default_4.jpg": "aa53603943c31a5da4198300d0bc395a",
"assets/assets/images/defaults/level_default_4.png": "30f4e076ca3a3cd1bf53e5bc1db0fee7",
"assets/assets/images/defaults/level_default_5.jpg": "23d392dcaea4a53b6cbf79d8da268747",
"assets/assets/images/defaults/level_default_5.png": "817ab5b63acb63cbc9d93bd234a228c3",
"assets/assets/images/defaults/level_default_6.jpg": "e6453ffd4ac86ef2078a648eacf24e87",
"assets/assets/images/defaults/level_default_6.png": "4637ebe81f70dda93a76727996b141f3",
"assets/assets/images/defaults/level_default_7.jpg": "d5e6a88a1f17c6b3e568ede9cd2682c7",
"assets/assets/images/defaults/level_default_7.png": "48434d8bad20f38770969bd65a601b2c",
"assets/assets/images/defaults/level_default_8.jpg": "66607d024f9611ee2f225d810b79af01",
"assets/assets/images/defaults/level_default_8.png": "00e17dea3cc9adf48e458b786d5c0867",
"assets/assets/images/defaults/level_default_9.jpg": "7d435ca3de079a66ca02ee6454b6a8b6",
"assets/assets/images/defaults/level_default_9.png": "eadd5f2039586c7892410a8191d6e3c7",
"assets/assets/images/onboardingFour.png": "522ec812d6bbbf5d7d75ed23d0e43114",
"assets/assets/images/onboardingOne.png": "103310b2cd50278e0eb8dab232079787",
"assets/assets/images/onboardingThree.png": "bb1ae1a861d4544db21e855916ca26a9",
"assets/assets/images/onboardingTwo.png": "804eedfd0e5e3061435d845170adfdd0",
"assets/assets/images/photo_2024-11-12_23-15-24.jpg": "387a073adfdf571efd15665f4f60f43b",
"assets/assets/images/workouts/1.jpg": "542236ecc04d6db3257cb25e7295bc1c",
"assets/assets/images/workouts/1.png": "54eed8d5f809e66a40ec629e738b0f50",
"assets/assets/images/workouts/10.jpg": "4bbc813e23f58a35230704ba7b596e0d",
"assets/assets/images/workouts/10.png": "a35e3cce1d854f8b92128d29ea878e9c",
"assets/assets/images/workouts/11.jpg": "8c9704db1febc4bd4528355c1d302c4e",
"assets/assets/images/workouts/11.png": "b292937fb9d3c9a6f103906f2a4ff84d",
"assets/assets/images/workouts/12.jpg": "e98b294c50ea396ca7a3e90ed4b3ab0f",
"assets/assets/images/workouts/12.png": "591b82cfb28b0170e66ecedfd20ad6fc",
"assets/assets/images/workouts/2.jpg": "ea9524ecef54ef620d5a3df6927db067",
"assets/assets/images/workouts/2.png": "8ca6899202bcec29082c13dd76d983ec",
"assets/assets/images/workouts/3.jpg": "3c1f2b3b56af02b0317606c1d21a3b50",
"assets/assets/images/workouts/3.png": "999d5a58def11a2d15e9e3fb452f1d3b",
"assets/assets/images/workouts/4.jpg": "820a85824c1516863625f18429f24bbe",
"assets/assets/images/workouts/4.png": "60e6860db730e4c02985e447b3d71389",
"assets/assets/images/workouts/5.jpg": "423d17963600f355e95fbd56eb530ba6",
"assets/assets/images/workouts/5.png": "5ea037162a273b7a57675fe0b9796f12",
"assets/assets/images/workouts/6.jpg": "59798c71a27646f3b4f047851389c1a4",
"assets/assets/images/workouts/6.png": "a1706ef02e08a8231d28ad08a0a13f76",
"assets/assets/images/workouts/7.jpg": "88d7f1a195e4a0a0ea3491057a57cf8c",
"assets/assets/images/workouts/7.png": "a0e977ee372f2898bc6db5fbfc89c1d4",
"assets/assets/images/workouts/8.jpg": "41497134cc7e05a0a1741da20dee0fb2",
"assets/assets/images/workouts/8.png": "7c567c748c78cdd9a72d2a42c36fb495",
"assets/assets/images/workouts/9.jpg": "a0a1071d099ea28e83dbd868741a4e90",
"assets/assets/images/workouts/9.png": "08192f1e58ec09063f897f3c7e784bc5",
"assets/assets/mobile_splash_screen.png": "7976a376ecd17a74e598dc3e1f318447",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c22b73ab2c3c616b6424387c631bfaa0",
"assets/NOTICES": "c4205d4e3a0fe1863906f8406eef5925",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/7a0f7336": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "4e2f0ce794b2f79a65ce6782dd9dab02",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "ce024732a82a1a49157129e2c27f3a9b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "52ce8fb6f4303882b7f73cdd42d2189b",
"/": "52ce8fb6f4303882b7f73cdd42d2189b",
"main.dart.js": "91e10ba6f591d8063ba18229872b1c83",
"manifest.json": "ff8b1b7b6aa59334c940b184a55071f4",
"README.md": "94699703580b0acd9e2083130a54c569",
"splash/img/dark-1x.png": "b8e4f47215d483e8b98efb7c706d39ba",
"splash/img/dark-2x.png": "d60f1ac7dca19b90ab97509267e705ed",
"splash/img/dark-3x.png": "228a3f3dc3da860b5f92a1ed1ccd9054",
"splash/img/dark-4x.png": "2783984d4b41304354c299d6e6716e2f",
"splash/img/light-1x.png": "b8e4f47215d483e8b98efb7c706d39ba",
"splash/img/light-2x.png": "d60f1ac7dca19b90ab97509267e705ed",
"splash/img/light-3x.png": "228a3f3dc3da860b5f92a1ed1ccd9054",
"splash/img/light-4x.png": "2783984d4b41304354c299d6e6716e2f",
"version.json": "f5c1e31cbfee7b8f75cf801214fbafdd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
