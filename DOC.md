# Steps: 
- install node
- npm install -g @angular/cli@19
- check with: ng version or ng v
- to create component: ng generate component name_of_comp
- ng serve <--to start the prj
- npm i bootstrap

# New concepts: 
- Template Reference Variables (#city used in select to get the value out of options)

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
- There are 2 types of forms in Angular:`Template forms` and `Reactive forms` 
- Many events happen behind the scenes in Angular SAP, 
    - When you shift btw components, they get destroyed and many more, like js we can track them here also
    - Similarly, there is a life cycle event `ngOnIt`-> this happens as soon as Component is initialized

# Routing 
- How to directly render component in the `app.component.ts` and .html--> using export classname
- Setting up route --> 
    - set path in: `app.route.ts` --> `path, component`
    - Add `RouterLink` &  `RouterOutlet` in `app.component.ts` , add tags in .html file `<router-outlet>` 
    - Instead of ahref use--> `routerLink=path_name`;


# Data Binding
- Interpolation
- Property Binding

# Event Binding 
- to get something from the html compo to ts (the opp way)


# Directives--> NgModel (2way data binding)
- Only use `[(ngModel)]` only with elements that get some value ex: input, checkbox, dropdown   
    - not to use with span, label, etc

# Control Flow with Signals 
- @if(){}@else{}--> import signal <-- Came with Angular 17
- *ngIF="" and *ngFor=""  also covered
- ngStyle, ngClass -- imports needed


# API CALLING (httpClient)
- Step1: Go to `app.config.ts` --> add `provideHttpClient()` in providers
- 