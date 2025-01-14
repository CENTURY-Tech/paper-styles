/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
The `<paper-styles>` component provides simple ways to use Material Design CSS
styles in your application. The following imports are available:

1.
[color.js](https://github.com/PolymerElements/paper-styles/blob/master/color.html):
a complete list of the colors defined in the Material Design
[palette](https://www.google.com/design/spec/style/color.html)

2.
[default-theme.js](https://github.com/PolymerElements/paper-styles/blob/master/default-theme.html):
text, background and accent colors that match the default Material Design theme

3.
[shadow.js](https://material.io/design/environment/light-shadows.html#shadows):
Material Design
[elevation](https://material.io/design/environment/light-shadows.html#shadows)
and shadow styles

4.
[typography.js](https://github.com/PolymerElements/paper-styles/blob/master/typography.html):
Material Design
[font](http://www.google.com/design/spec/style/typography.html#typography-styles)
styles and sizes

5.
[demo-pages.js](https://github.com/PolymerElements/paper-styles/blob/master/demo-pages.html):
generic styles used in the PolymerElements demo pages

We recommend importing each of these individual files, and using the style
mixins available in each ones, rather than the aggregated `paper-styles.html` as
a whole.

@group Paper Elements
@pseudoElement paper-styles
@demo demo/index.html
*/

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './color.js';
import './default-theme.js';
import './shadow.js';
