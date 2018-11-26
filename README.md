# QuickKudos - Ionic PWA Version

![QuickKudos](src/assets/icons/qk-2-tiny.png)
> **Because there's more to life than cash**

QuickKudos is a fast, easy way to send electronic "brownie points" to anyone anywhere.

Use QuickKudos for IOUs, service gifts, barter, or just a simple "thank you." You decide. QuickKudos makes it fast, simple, and fun!

Why settle for cash when you can have kudos?

## But Seriously

QuickKudos is primarily personal tech and a sample (payments-related) application concept I use for exploring new technologies.

This particular implementation is a **Progressive Web Application (PWA)
built with Ionic 4**.

For some of my other implementions, see [old school web](http://www.quickkudos.com), 
[Native Android](https://bitbucket.org/derekwlms/kudosandroid/src/master/), [Native iOS](https://bitbucket.org/derekwlms/kudosios/src/master), and [Java 8 REST services](https://bitbucket.org/derekwlms/kudosservice/src/master).

---

## Running Locally

Pre-requisites: [git](https://git-scm.com/),  [node.js](https://nodejs.org), and [ionic 4](https://ionicframework.com/).

1. `git clone https://github.com/derekwlms/kudos-ionic-pwa.git`
2. `cd kudos-ionic-pwa && npm install && ionic serve`
3. [Open in your browser](http://localhost:8100)

Recommended `ionic info`:

- ionic (Ionic CLI)             : 4.2.1 
- Ionic Framework               : @ionic/angular 4.0.0-beta.13
- @angular-devkit/build-angular : 0.8.6
- @angular-devkit/schematics    : 0.8.6
- @angular/cli                  : 6.2.6
- @ionic/angular-toolkit        : 1.0.0


## Notes

- This project is licensed under [ISC](https://opensource.org/licenses/ISC) terms. See LICENSE.txt.
- See additional notes on the [wiki](https://github.com/derekwlms/kudos-ionic-pwa/wiki) and [gists](https://gist.github.com/derekwlms/7266309adeccb301461b5a299af3694e)
- Lighthouse PWA report: `firebase deploy && lighthouse https://kudos-ionic-pwa.firebaseapp.com --view`
 