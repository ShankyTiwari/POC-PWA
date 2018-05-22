# POC for Progressive web application

## What is Progressive web application

Progressive Web Apps are user experiences that have the reach of the web, and are:

1. Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.
2. Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.
3. Engaging - Feel like a natural app on the device, with an immersive user experience.
Also,
4. Be supported by any device and deploy all the features of a device it is used on.
5. Have a look of a typical app and be built using the application shell model.
6. Work in terms of low connectivity or even offline.
7. Be discoverable in search engines, since a PWA is a website.
8. Have a user interface corresponding to the device’s characteristics (screen size, form factor).
9. Use the universal resource identifier to show the current status of application.
10. Provide the features of mobile apps, such as push notifications and others.
11. Provide installation on the home screen of a device.
12. Provide fresh content when connected to the Internet.
13. Be hosted over HTTPS, in order to provide security of network requests.

This new level of quality allows Progressive Web Apps to earn a place on the user's home screen.
Read more about [Progressive web application](https://developers.google.com/web/progressive-web-apps/).

## Pros and Cons of Progressive web application

### Pros

1. The PWAs are the web pages; therefore they do not require installation. Nevertheless, you can install a progressive web app on your home screen for easy access anytime.
2. The same thing is with updates. Being essentially the web pages, the PWAs can only be refreshed using and require no update function.
3. High portability is another benefit of a PWA and it does not change your packaging or deployment model unlike the strategies for native apps.
4. Service Worker technology provides quick loading of your app regardless of the network connection quality.
5. The PWAs are always available on your home screen for easy run and return.
6. Due to the Service Worker technology, the PWAs sends push notifications to the device providing refreshed content even at the closed browser.
7. Security of the PWAs is ensured via HTTPS hosting.
8. No matter what device you use, the PWAs will fit all kinds of tablets, laptops or smartphones due to the use of responsive web design techniques.
9. Compared to the native apps, the PWAs do not use much space and resources, which extends the battery life of a device and requires less data usage due to the Service Worker, which provides functioning even in offline mode.
10. The use of application shell model for building the PWAs provides an interface of native apps with scrolling, navigation and other features.
11. Once more to recall that the PWAs are the web pages, so they offer sharing function for their users unlike native apps.
12. Unlike the usual apps, the PWAs can be discovered through search engines due to the W3C manifests and registration of Service Worker.
13. Forget about app store, since you have no need to install or update the PWAs.

### Cons

1. The PWAs support not all browsers. Of course, the newer versions of such popular browsers as Opera, Samsung’s Android browser and Chrome do support PWA, however, Internet Explorer, Safari, Edge and many other custom browsers do not. This point is quite essential, since the Safari browser alone covers 50% of browser market for mobile devices.
2. Unfortunately, not all devices support the entire software functionality. For example, a progressive app for Android devices has some support issues, and a progressive app for iOS devices does not support notifications and shortcut prompting on the home screen. Herewith, the iOS devices cover about 50% of the mobile device market in the USA.
3. Hardware functionality is also not supported on all devices. The hardware components, which are supported by the native apps (fingerprint scanners, GPS, and camera) are not supported by the PWAs.
4. There is no download store. This point may be deemed as both advantage and disadvantage. Since the PWAs are the web pages, they do not require any installation from any app store. The app stores are very convenient repositories, which help users search applications. For this reason, some difficulties might occur with the search of the PWAs and proving their legitimacy.
5. The PWAs do not support cross application logins. Unlike many applications, requiring an individual login, the PWAs can not collect this data independently.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
