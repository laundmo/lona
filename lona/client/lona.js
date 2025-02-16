/* MIT License

Copyright (c) 2020 Florian Scherf

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

var Lona = Object();

Lona.protocol = JSON.parse('{{ protocol }}');
Lona.settings = JSON.parse('{{ settings }}');
Lona.widget_classes = {};

Lona.register_widget_class = function(widget_name, javascript_class) {
    this.widget_classes[widget_name] = javascript_class;
};

// job-queue.js
{% include 'job-queue.js' %}

// window-shim.js
{% include 'window-shim.js' %}

// dom-renderer.js
{% include 'dom-renderer.js' %}

// dom-updater.js
{% include 'dom-updater.js' %}

// widget-data-updater.js
{% include 'widget-data-updater.js' %}

// input-events.js
{% include 'input-events.js' %}

// window.js
{% include 'window.js' %}

// context.js
{% include 'context.js' %}
