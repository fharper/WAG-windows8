(function () {"use strict";
ideaPress.importModulesAndSetOptions( 
['/modules/wordpress/js/wp.module.js', '/modules/wordpressCom/js/wpcom.module.js'],
function() {
    ideaPress.options = {
appTitleImage: null,                      // App title image
appTitle: "We are Geek",                  // App title text 
cacheTime: 3600000,                       // Global cache time to try fetch
appId:4130,mainUrl: 'http://wearegeek.org',         // Main promoting site
useSnapEffect: false,fetchOnPostInit:false,privacyUrl: 'http://wearegeek.org/windows-8-app-privacy-policy/',      // Privacy URL 
modules: [                
                { name: wordpressModule, options: { apiUrl: 'http://wearegeek.org', title: 'bookmark', typeId: wordpressModule.BOOKMARKS } },
                { name: wordpressModule, options: { apiUrl: 'http://wearegeek.org', title: "Épisodes", typeId: wordpressModule.CATEGORY, categoryId: 3, hubItemsCount: 100 } }],
searchModule: { name: wordpressModule, options: { apiUrl: 'http://wearegeek.org', title: 'Search' } }, 
liveTileModule: { name: wordpressModule, options: { apiUrl: 'http://wearegeek.org', title: 'Live',  squareTileType: Windows.UI.Notifications.TileTemplateType.tileSquarePeekImageAndText04, wideTileType : Windows.UI.Notifications.TileTemplateType.tileWideImageAndText01 } } 
};
});
})();

