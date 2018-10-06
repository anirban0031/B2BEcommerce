importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "eshopper",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.faa01f2569cfc4cec0ca.js",
    "revision": "c67214ecebf7d13c859e1baa0a7599d2"
  },
  {
    "url": "/_nuxt/layouts_default.5a296747418078341b2a.js",
    "revision": "36b62f56f8d486d342650f1047fb03e3"
  },
  {
    "url": "/_nuxt/layouts_nosidebar.ef271fa52c9f07e4453e.js",
    "revision": "db589736f99af909cdf14e733919a3f8"
  },
  {
    "url": "/_nuxt/manifest.d1b0a8b7c9c232879f30.js",
    "revision": "ff192fe8696267dbdf642dbe3109e475"
  },
  {
    "url": "/_nuxt/pages_Cart.0a960efafa0ca7d4257a.js",
    "revision": "ebacc7185e1584b992473afeae8acb56"
  },
  {
    "url": "/_nuxt/pages_Carts.05232d70978468f5c13f.js",
    "revision": "8ffed9d7411d02a78cbbd2256ff3c070"
  },
  {
    "url": "/_nuxt/pages_Companies.ac97fc523ed3d198cffd.js",
    "revision": "330fb2259b3b4cfee1b47e315974fd72"
  },
  {
    "url": "/_nuxt/pages_company__id.e460f55f6a30cb0b78cf.js",
    "revision": "e615f99df0ae81369c32e35323e89e8e"
  },
  {
    "url": "/_nuxt/pages_company_emp__id.924afc1ea24ff9e8c7e1.js",
    "revision": "62b433fc6f2ace6a45fc2b60b4107374"
  },
  {
    "url": "/_nuxt/pages_ECEDC.ae8c6663f22a5a6477c9.js",
    "revision": "bcc96ad04e7ccc166a00f735f369be2e"
  },
  {
    "url": "/_nuxt/pages_index.1.d54df05841a98fee4173.js",
    "revision": "616ed8414217118208bc5b07bd30935d"
  },
  {
    "url": "/_nuxt/pages_index.33346469bd9c3fda9414.js",
    "revision": "4aaf61cdf10469b71b1942e997f7b237"
  },
  {
    "url": "/_nuxt/pages_item__slug.a05b7f00a9df4190cdff.js",
    "revision": "9b07d5516efe0157b963c149d0d36a83"
  },
  {
    "url": "/_nuxt/pages_items__category.8c5591ba8fdc3098cc04.js",
    "revision": "81ab0524ac28622c90b75d2aceb5cc83"
  },
  {
    "url": "/_nuxt/pages_Login.0220196dcdcc0dd81d7c.js",
    "revision": "d9d17272ce916811b2a8c418e4e14fde"
  },
  {
    "url": "/_nuxt/pages_Maps.6d31a90b989a46a3ddb5.js",
    "revision": "fba79837bbaf3fbf8a38019bae864efb"
  },
  {
    "url": "/_nuxt/pages_News.2d73845eb5cff637443f.js",
    "revision": "65e4888b98c1620231cf19df7a9d4fde"
  },
  {
    "url": "/_nuxt/pages_Policy.f8e505499fda800c1563.js",
    "revision": "094da290af7051181a215f80790d1a61"
  },
  {
    "url": "/_nuxt/pages_Profile.490074e3a6819222c859.js",
    "revision": "eee79f206bf391e3bd15973e01888d49"
  },
  {
    "url": "/_nuxt/pages_Projects.fe16333ded948e9d97b4.js",
    "revision": "c0e6cb732fd4141b226655c2cfba6c77"
  },
  {
    "url": "/_nuxt/pages_Quote.8405dfb74cfb3427d869.js",
    "revision": "2568a3c7330043074fee1de066f8ce32"
  },
  {
    "url": "/_nuxt/pages_Register.75129956eaeee19beded.js",
    "revision": "857abd0d79ee660a85624fc96dcad08a"
  },
  {
    "url": "/_nuxt/pages_search__pageNo__query.9cb194345b1488a284bb.js",
    "revision": "fc70a8e4008be7da5e0c607d04ea3aa7"
  },
  {
    "url": "/_nuxt/pages_SearchResult.273bead8fd4665855989.js",
    "revision": "ee524e9e44f3f62395537459a6aca3ef"
  },
  {
    "url": "/_nuxt/pages_Stories.6a77af8566701eb1f443.js",
    "revision": "4375ce9ac595fea8f7fc045fda4bb110"
  },
  {
    "url": "/_nuxt/vendor.67dfb3cf17c352bd3c11.js",
    "revision": "94d4f46deed26642bed3e1ecf6d46564"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

