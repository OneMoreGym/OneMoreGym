'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dc9f4661e037b78860596118b41f430c",
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
"assets/fonts/MaterialIcons-Regular.otf": "f8888baddfbd2623295a8ffa1e4a2ecd",
"assets/NOTICES": "c4205d4e3a0fe1863906f8406eef5925",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
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
"flutter_bootstrap.js": "aea5a67b01c13d7f867541a8bdcf45e6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "52ce8fb6f4303882b7f73cdd42d2189b",
"/": "52ce8fb6f4303882b7f73cdd42d2189b",
"main.dart.js": "c54a6de206cc25e2272dfbef362daacc",
"manifest.json": "ff8b1b7b6aa59334c940b184a55071f4",
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
