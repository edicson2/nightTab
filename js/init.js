console.log("nightTab v", version.get(), "loaded");
// look for and restore data
data.init();
// render theme
theme.init();
// render links
links.init();
// other init
layout.init();
control.init();
search.init();
clock.init();





menu.open();
menu.render();
