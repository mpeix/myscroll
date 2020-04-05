# MyScroll
## My scroll is an easy to use package that helps you to customize the style of your scrollbars


Vist demo website here: [MyScroll](https://myscroll.peixweb.com)

When you want to give custom style to a scrollbar you find that every browser have their css rules. *MyScroll* wants to help you wrinting automatically the css rules for the most used browsers.

Not all browser have scroll bar style support. I have tested the code in **Google Chrome**, **IE 11** and **Firefox**. To ask for more features or if you want to add new ones by yourself vist project repo in [Github](https://github.com/mpeix/myscroll).

### 1 - Installation

To install *MyScroll* pacakge run the following command in your terminal

```
npm install @mpeix/myscroll
```

### 2 - Import

*MyScroll* package exposes the *run* function. Import the function to make it available in your module
```javascript
import {run} from '@mpeix/myscroll';
```

### 3 - Call *run* function and get your scrollbar tunned

Run function receives and options object where you can specify the scrollbar width and color.

```javascript
run({
        selector:'body',
        scrollWidth: 10,
        scrollTrackColor: '#FFF' ,
        scrollThumbColor: '#6aab2e',
        scrollThumbHoverColor: '#000a12' ,
        firefoxWidth: 'thin' 
    });
```
The elments that *MyScroll* can modify are the ones that appear in the below image. The final result can vary depending on the browser, for example webkit browser allow to give a concrete scroll with while Firefox only admit *'thin'* and *'auto'* values.
I know that webkit and Internet Explorer allow modify more scroll style values, I did not include that properties in the plugin to keep it simple.

![Scroll element image]('/images/scroll_elements.jpg')

**Be sure when you call *MyScroll* the window object is defined. If window object is not defined an error will be thrown.**

To understand better the elements of scrollbar that can be personalized y recomment you to check the [DEMO](https://myscroll.peixweb.com) website.


