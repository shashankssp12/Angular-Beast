# Steps: 
- install node
- npm install -g @angular/cli@19
- check with: ng version or ng v
- to create component: ng generate component name_of_comp
- ng serve <--to start the prj
- npm i bootstrap



## learnings: 
- package.json-->listing of all packages/libs
- angular.json -> proj architecture/ all settings here
- public folder for all the images and stuff
- main.ts is the first file that executes when an angular application starts
-🌟 src/app/app.config.ts --> this is just a replacement of app.modules.ts
- app.config.ts -> it's a SPA, but the look and feel of navigating to diff pages is possible with this file

- component = page, like we used to creates multiple pages in html, here we create components 
- every component will contain 3 files -> .html,.css,.ts (one more .specs.ts)
- all the code will be in src/app folder, nothing outside it



# Routing 
- How to directly render component in the `app.component.ts` and .html--> using export classname
- Setting up route --> 
    - set path in: `app.route.ts` --> `path, component`
    - Add `RouterLink` &  `RouterOutlet` in `app.component.ts` , add tags in .html file `<router-outlet>` 
    - Instead of ahref use--> `routerLink=path_name`;


# Data Binding