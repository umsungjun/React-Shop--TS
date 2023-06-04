# React-Shop

<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>ReactShop</title><style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
margin: 0;
padding: 0;
}
@media only screen {
body {
margin: 2em auto;
max-width: 900px;
color: rgb(55, 53, 47);
}
}

body {
line-height: 1.5;
white-space: pre-wrap;
}

a,
a.visited {
color: inherit;
text-decoration: underline;
}

.pdf-relative-link-path {
font-size: 80%;
color: #444;
}

h1,
h2,
h3 {
letter-spacing: -0.01em;
line-height: 1.2;
font-weight: 600;
margin-bottom: 0;
}

.page-title {
font-size: 2.5rem;
font-weight: 700;
margin-top: 0;
margin-bottom: 0.75em;
}

h1 {
font-size: 1.875rem;
margin-top: 1.875rem;
}

h2 {
font-size: 1.5rem;
margin-top: 1.5rem;
}

h3 {
font-size: 1.25rem;
margin-top: 1.25rem;
}

.source {
border: 1px solid #ddd;
border-radius: 3px;
padding: 1.5em;
word-break: break-all;
}

.callout {
border-radius: 3px;
padding: 1rem;
}

figure {
margin: 1.25em 0;
page-break-inside: avoid;
}

figcaption {
opacity: 0.5;
font-size: 85%;
margin-top: 0.5em;
}

mark {
background-color: transparent;
}

.indented {
padding-left: 1.5em;
}

hr {
background: transparent;
display: block;
width: 100%;
height: 1px;
visibility: visible;
border: none;
border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
max-width: 100%;
}

@media only print {
img {
max-height: 100vh;
object-fit: contain;
}
}

@page {
margin: 1in;
}

.collection-content {
font-size: 0.875rem;
}

.column-list {
display: flex;
justify-content: space-between;
}

.column {
padding: 0 1em;
}

.column:first-child {
padding-left: 0;
}

.column:last-child {
padding-right: 0;
}

.table_of_contents-item {
display: block;
font-size: 0.875rem;
line-height: 1.3;
padding: 0.125rem;
}

.table_of_contents-indent-1 {
margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
margin-left: 3rem;
}

.table_of_contents-indent-3 {
margin-left: 4.5rem;
}

.table_of_contents-link {
text-decoration: none;
opacity: 0.7;
border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
border: 1px solid rgba(55, 53, 47, 0.09);
border-collapse: collapse;
}

table {
border-left: none;
border-right: none;
}

th,
td {
font-weight: normal;
padding: 0.25em 0.5em;
line-height: 1.5;
min-height: 1.5em;
text-align: left;
}

th {
color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
margin: 0;
margin-block-start: 0.6em;
margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
margin-block-start: 0.6em;
}

ul > li {
list-style: disc;
}

ul.to-do-list {
padding-inline-start: 0;
}

ul.to-do-list > li {
list-style: none;
}

.to-do-children-checked {
text-decoration: line-through;
opacity: 0.375;
}

ul.toggle > li {
list-style: none;
}

ul {
padding-inline-start: 1.7em;
}

ul > li {
padding-left: 0.1em;
}

ol {
padding-inline-start: 1.6em;
}

ol > li {
padding-left: 0.2em;
}

.mono ol {
padding-inline-start: 2em;
}

.mono ol > li {
text-indent: -0.4em;
}

.toggle {
padding-inline-start: 0em;
list-style-type: none;
}

/_ Indent toggle children _/
.toggle > li > details {
padding-left: 1.7em;
}

.toggle > li > details > summary {
margin-left: -1.1em;
}

.selected-value {
display: inline-block;
padding: 0 0.5em;
background: rgba(206, 205, 202, 0.5);
border-radius: 3px;
margin-right: 0.5em;
margin-top: 0.3em;
margin-bottom: 0.3em;
white-space: nowrap;
}

.collection-title {
display: inline-block;
margin-right: 1em;
}

.page-description {
margin-bottom: 2em;
}

.simple-table {
margin-top: 1em;
font-size: 0.875rem;
empty-cells: show;
}
.simple-table td {
height: 29px;
min-width: 120px;
}

.simple-table th {
height: 29px;
min-width: 120px;
}

.simple-table-header-color {
background: rgb(247, 246, 243);
color: black;
}
.simple-table-header {
font-weight: 500;
}

time {
opacity: 0.5;
}

.icon {
display: inline-block;
max-width: 1.2em;
max-height: 1.2em;
text-decoration: none;
vertical-align: text-bottom;
margin-right: 0.5em;
}

img.icon {
border-radius: 3px;
}

.user-icon {
width: 1.5em;
height: 1.5em;
border-radius: 100%;
margin-right: 0.5rem;
}

.user-icon-inner {
font-size: 0.8em;
}

.text-icon {
border: 1px solid #000;
text-align: center;
}

.page-cover-image {
display: block;
object-fit: cover;
width: 100%;
max-height: 30vh;
}

.page-header-icon {
font-size: 3rem;
margin-bottom: 1rem;
}

.page-header-icon-with-cover {
margin-top: -0.72em;
margin-left: 0.07em;
}

.page-header-icon img {
border-radius: 3px;
}

.link-to-page {
margin: 1em 0;
padding: 0;
border: none;
font-weight: 500;
}

p > .user {
opacity: 0.5;
}

td > .user,
td > time {
white-space: nowrap;
}

input[type="checkbox"] {
transform: scale(1.5);
margin-right: 0.6em;
vertical-align: middle;
}

p {
margin-top: 0.5em;
margin-bottom: 0.5em;
}

.image {
border: none;
margin: 1.5em 0;
padding: 0;
border-radius: 0;
text-align: center;
}

.code,
code {
background: rgba(135, 131, 120, 0.15);
border-radius: 3px;
padding: 0.2em 0.4em;
border-radius: 3px;
font-size: 85%;
tab-size: 2;
}

code {
color: #eb5757;
}

.code {
padding: 1.5em 1em;
}

.code-wrap {
white-space: pre-wrap;
word-break: break-all;
}

.code > code {
background: none;
padding: 0;
font-size: 100%;
color: inherit;
}

blockquote {
font-size: 1.25em;
margin: 1em 0;
padding-left: 1em;
border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
text-decoration: none;
max-height: 8em;
padding: 0;
display: flex;
width: 100%;
align-items: stretch;
}

.bookmark-title {
font-size: 0.85em;
overflow: hidden;
text-overflow: ellipsis;
height: 1.75em;
white-space: nowrap;
}

.bookmark-text {
display: flex;
flex-direction: column;
}

.bookmark-info {
flex: 4 1 180px;
padding: 12px 14px 14px;
display: flex;
flex-direction: column;
justify-content: space-between;
}

.bookmark-image {
width: 33%;
flex: 1 1 180px;
display: block;
position: relative;
object-fit: cover;
border-radius: 1px;
}

.bookmark-description {
color: rgba(55, 53, 47, 0.6);
font-size: 0.75em;
overflow: hidden;
max-height: 4.5em;
word-break: break-word;
}

.bookmark-href {
font-size: 0.75em;
margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
color: rgba(55, 53, 47, 1);
}
.highlight-gray {
color: rgba(120, 119, 116, 1);
fill: rgba(120, 119, 116, 1);
}
.highlight-brown {
color: rgba(159, 107, 83, 1);
fill: rgba(159, 107, 83, 1);
}
.highlight-orange {
color: rgba(217, 115, 13, 1);
fill: rgba(217, 115, 13, 1);
}
.highlight-yellow {
color: rgba(203, 145, 47, 1);
fill: rgba(203, 145, 47, 1);
}
.highlight-teal {
color: rgba(68, 131, 97, 1);
fill: rgba(68, 131, 97, 1);
}
.highlight-blue {
color: rgba(51, 126, 169, 1);
fill: rgba(51, 126, 169, 1);
}
.highlight-purple {
color: rgba(144, 101, 176, 1);
fill: rgba(144, 101, 176, 1);
}
.highlight-pink {
color: rgba(193, 76, 138, 1);
fill: rgba(193, 76, 138, 1);
}
.highlight-red {
color: rgba(212, 76, 71, 1);
fill: rgba(212, 76, 71, 1);
}
.highlight-gray_background {
background: rgba(241, 241, 239, 1);
}
.highlight-brown_background {
background: rgba(244, 238, 238, 1);
}
.highlight-orange_background {
background: rgba(251, 236, 221, 1);
}
.highlight-yellow_background {
background: rgba(251, 243, 219, 1);
}
.highlight-teal_background {
background: rgba(237, 243, 236, 1);
}
.highlight-blue_background {
background: rgba(231, 243, 248, 1);
}
.highlight-purple_background {
background: rgba(244, 240, 247, 0.8);
}
.highlight-pink_background {
background: rgba(249, 238, 243, 0.8);
}
.highlight-red_background {
background: rgba(253, 235, 236, 1);
}
.block-color-default {
color: inherit;
fill: inherit;
}
.block-color-gray {
color: rgba(120, 119, 116, 1);
fill: rgba(120, 119, 116, 1);
}
.block-color-brown {
color: rgba(159, 107, 83, 1);
fill: rgba(159, 107, 83, 1);
}
.block-color-orange {
color: rgba(217, 115, 13, 1);
fill: rgba(217, 115, 13, 1);
}
.block-color-yellow {
color: rgba(203, 145, 47, 1);
fill: rgba(203, 145, 47, 1);
}
.block-color-teal {
color: rgba(68, 131, 97, 1);
fill: rgba(68, 131, 97, 1);
}
.block-color-blue {
color: rgba(51, 126, 169, 1);
fill: rgba(51, 126, 169, 1);
}
.block-color-purple {
color: rgba(144, 101, 176, 1);
fill: rgba(144, 101, 176, 1);
}
.block-color-pink {
color: rgba(193, 76, 138, 1);
fill: rgba(193, 76, 138, 1);
}
.block-color-red {
color: rgba(212, 76, 71, 1);
fill: rgba(212, 76, 71, 1);
}
.block-color-gray_background {
background: rgba(241, 241, 239, 1);
}
.block-color-brown_background {
background: rgba(244, 238, 238, 1);
}
.block-color-orange_background {
background: rgba(251, 236, 221, 1);
}
.block-color-yellow_background {
background: rgba(251, 243, 219, 1);
}
.block-color-teal_background {
background: rgba(237, 243, 236, 1);
}
.block-color-blue_background {
background: rgba(231, 243, 248, 1);
}
.block-color-purple_background {
background: rgba(244, 240, 247, 0.8);
}
.block-color-pink_background {
background: rgba(249, 238, 243, 0.8);
}
.block-color-red_background {
background: rgba(253, 235, 236, 1);
}
.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
.select-value-color-green { background-color: rgba(219, 237, 219, 1); }
.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
.select-value-color-translucentGray { background-color: rgba(255, 255, 255, 0.0375); }
.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
.select-value-color-red { background-color: rgba(255, 226, 221, 1); }
.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }

.checkbox {
display: inline-flex;
vertical-align: text-bottom;
width: 16;
height: 16;
background-size: 16px;
margin-left: 2px;
margin-right: 5px;
}

.checkbox-on {
background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
</style></head><body><article id="9cbb95f0-8f4c-4d93-86f3-b2b7a7baa29f" class="page sans"><header><img class="page-cover-image" src="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/aefasef.jpg" style="object-position:center 1.2499999999999956%"/><div class="page-header-icon page-header-icon-with-cover"><span class="icon">🛒</span></div><h1 class="page-title">ReactShop</h1><p class="page-description"></p><table class="properties"><tbody><tr class="property-row property-row-multi_select"><th><span class="icon property-icon"><svg viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesMultipleSelect"><path d="M1.91602 4.83789C2.44238 4.83789 2.87305 4.40723 2.87305 3.87402C2.87305 3.34766 2.44238 2.91699 1.91602 2.91699C1.38281 2.91699 0.952148 3.34766 0.952148 3.87402C0.952148 4.40723 1.38281 4.83789 1.91602 4.83789ZM5.1084 4.52344H14.3984C14.7607 4.52344 15.0479 4.23633 15.0479 3.87402C15.0479 3.51172 14.7607 3.22461 14.3984 3.22461H5.1084C4.74609 3.22461 4.45898 3.51172 4.45898 3.87402C4.45898 4.23633 4.74609 4.52344 5.1084 4.52344ZM1.91602 9.03516C2.44238 9.03516 2.87305 8.60449 2.87305 8.07129C2.87305 7.54492 2.44238 7.11426 1.91602 7.11426C1.38281 7.11426 0.952148 7.54492 0.952148 8.07129C0.952148 8.60449 1.38281 9.03516 1.91602 9.03516ZM5.1084 8.7207H14.3984C14.7607 8.7207 15.0479 8.43359 15.0479 8.07129C15.0479 7.70898 14.7607 7.42188 14.3984 7.42188H5.1084C4.74609 7.42188 4.45898 7.70898 4.45898 8.07129C4.45898 8.43359 4.74609 8.7207 5.1084 8.7207ZM1.91602 13.2324C2.44238 13.2324 2.87305 12.8018 2.87305 12.2686C2.87305 11.7422 2.44238 11.3115 1.91602 11.3115C1.38281 11.3115 0.952148 11.7422 0.952148 12.2686C0.952148 12.8018 1.38281 13.2324 1.91602 13.2324ZM5.1084 12.918H14.3984C14.7607 12.918 15.0479 12.6309 15.0479 12.2686C15.0479 11.9062 14.7607 11.6191 14.3984 11.6191H5.1084C4.74609 11.6191 4.45898 11.9062 4.45898 12.2686C4.45898 12.6309 4.74609 12.918 5.1084 12.918Z"></path></svg></span>프로젝트 종류</th><td><span class="selected-value select-value-color-orange">개인프로젝트</span></td></tr><tr class="property-row property-row-text"><th><span class="icon property-icon"><svg viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesText"><path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"></path></svg></span>주제</th><td>React와 TypeScript를 사용하여 Fake Store API 데이터를 활용하여 만든 쇼핑몰 프로젝트 입니다.</td></tr><tr class="property-row property-row-date"><th><span class="icon property-icon"><svg viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesDate"><path d="M3.29688 14.4561H12.7031C14.1797 14.4561 14.9453 13.6904 14.9453 12.2344V3.91504C14.9453 2.45215 14.1797 1.69336 12.7031 1.69336H3.29688C1.82031 1.69336 1.05469 2.45215 1.05469 3.91504V12.2344C1.05469 13.6973 1.82031 14.4561 3.29688 14.4561ZM3.27637 13.1162C2.70898 13.1162 2.39453 12.8154 2.39453 12.2207V5.9043C2.39453 5.30273 2.70898 5.00879 3.27637 5.00879H12.71C13.2842 5.00879 13.6055 5.30273 13.6055 5.9043V12.2207C13.6055 12.8154 13.2842 13.1162 12.71 13.1162H3.27637ZM6.68066 7.38086H7.08398C7.33008 7.38086 7.41211 7.30566 7.41211 7.05957V6.66309C7.41211 6.41699 7.33008 6.3418 7.08398 6.3418H6.68066C6.44141 6.3418 6.35938 6.41699 6.35938 6.66309V7.05957C6.35938 7.30566 6.44141 7.38086 6.68066 7.38086ZM8.92285 7.38086H9.31934C9.56543 7.38086 9.64746 7.30566 9.64746 7.05957V6.66309C9.64746 6.41699 9.56543 6.3418 9.31934 6.3418H8.92285C8.67676 6.3418 8.59473 6.41699 8.59473 6.66309V7.05957C8.59473 7.30566 8.67676 7.38086 8.92285 7.38086ZM11.1582 7.38086H11.5547C11.8008 7.38086 11.8828 7.30566 11.8828 7.05957V6.66309C11.8828 6.41699 11.8008 6.3418 11.5547 6.3418H11.1582C10.9121 6.3418 10.8301 6.41699 10.8301 6.66309V7.05957C10.8301 7.30566 10.9121 7.38086 11.1582 7.38086ZM4.44531 9.58203H4.84863C5.09473 9.58203 5.17676 9.50684 5.17676 9.26074V8.86426C5.17676 8.61816 5.09473 8.54297 4.84863 8.54297H4.44531C4.20605 8.54297 4.12402 8.61816 4.12402 8.86426V9.26074C4.12402 9.50684 4.20605 9.58203 4.44531 9.58203ZM6.68066 9.58203H7.08398C7.33008 9.58203 7.41211 9.50684 7.41211 9.26074V8.86426C7.41211 8.61816 7.33008 8.54297 7.08398 8.54297H6.68066C6.44141 8.54297 6.35938 8.61816 6.35938 8.86426V9.26074C6.35938 9.50684 6.44141 9.58203 6.68066 9.58203ZM8.92285 9.58203H9.31934C9.56543 9.58203 9.64746 9.50684 9.64746 9.26074V8.86426C9.64746 8.61816 9.56543 8.54297 9.31934 8.54297H8.92285C8.67676 8.54297 8.59473 8.61816 8.59473 8.86426V9.26074C8.59473 9.50684 8.67676 9.58203 8.92285 9.58203ZM11.1582 9.58203H11.5547C11.8008 9.58203 11.8828 9.50684 11.8828 9.26074V8.86426C11.8828 8.61816 11.8008 8.54297 11.5547 8.54297H11.1582C10.9121 8.54297 10.8301 8.61816 10.8301 8.86426V9.26074C10.8301 9.50684 10.9121 9.58203 11.1582 9.58203ZM4.44531 11.7832H4.84863C5.09473 11.7832 5.17676 11.708 5.17676 11.4619V11.0654C5.17676 10.8193 5.09473 10.7441 4.84863 10.7441H4.44531C4.20605 10.7441 4.12402 10.8193 4.12402 11.0654V11.4619C4.12402 11.708 4.20605 11.7832 4.44531 11.7832ZM6.68066 11.7832H7.08398C7.33008 11.7832 7.41211 11.708 7.41211 11.4619V11.0654C7.41211 10.8193 7.33008 10.7441 7.08398 10.7441H6.68066C6.44141 10.7441 6.35938 10.8193 6.35938 11.0654V11.4619C6.35938 11.708 6.44141 11.7832 6.68066 11.7832ZM8.92285 11.7832H9.31934C9.56543 11.7832 9.64746 11.708 9.64746 11.4619V11.0654C9.64746 10.8193 9.56543 10.7441 9.31934 10.7441H8.92285C8.67676 10.7441 8.59473 10.8193 8.59473 11.0654V11.4619C8.59473 11.708 8.67676 11.7832 8.92285 11.7832Z"></path></svg></span>진행 기간</th><td><time>@2023년 3월 2일 → 2023년 3월 12일</time></td></tr><tr class="property-row property-row-text"><th><span class="icon property-icon"><svg viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesText"><path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"></path></svg></span>기술 스택 (Front)</th><td><strong>React.js TypeScript Redux-Toolkit Styled-component</strong></td></tr><tr class="property-row property-row-text"><th><span class="icon property-icon"><svg viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesText"><path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"></path></svg></span>기술 스택 (Back)</th><td></td></tr><tr class="property-row property-row-url"><th><span class="icon property-icon"><svg viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesUrl"><path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path></svg></span>배포 링크</th><td><a href="https://react-shop-ts-hazel.vercel.app/" class="url-value">https://react-shop-ts-hazel.vercel.app/</a></td></tr><tr class="property-row property-row-url"><th><span class="icon property-icon"><svg viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesUrl"><path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path></svg></span>깃허브 링크</th><td><a href="https://github.com/umsungjun/React-Shop--TS" class="url-value">https://github.com/umsungjun/React-Shop--TS</a></td></tr><tr class="property-row property-row-url"><th><span class="icon property-icon"><svg viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesUrl"><path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path></svg></span>작동 영상</th><td></td></tr></tbody></table></header><div class="page-body"><h2 id="59677e02-8beb-4800-8bbf-a7df4fd85f5e" class="block-color-yellow_background">프로젝트 소개</h2><p id="ac6cb9a1-3904-4c79-86d9-39fadad5a292" class="">

</p><p id="06d324e3-a469-4b31-9438-2a43ad5fe0bd" class="">React와 TypeScript를 이용하여 구현한 쇼핑몰 프로젝트 입니다. </p><p id="ccd437a1-39e5-4dbc-8d54-2849d3cc6139" class="">컴포넌트 기반의 개발 방식과 TypeScript의 정적 타입 검사 기능을 활용하여 개발 생산성을 높혔습니다. 또한, Redux Toolkit을 이용하여 전역 상태를 효율적으로 관리하였으며, 이를 통해 상태의 변화를 간편하게 관리하는 법을 습득했습니다.</p><p id="41232d47-e368-436a-9ee4-d2bd062d4d60" class="">
</p><h2 id="fce94968-a6e3-4c5b-8a9c-e475b6cd3361" class="block-color-teal_background"><mark class="highlight-teal_background">기능 구현 </mark></h2><h3 id="afb3aeba-f23e-40ac-8b52-4ee922403294" class="">Light / Dark 테마</h3><ul id="ec6b172b-99bd-4877-97ef-bb447878d163" class="bulleted-list"><li style="list-style-type:disc">기능 소개 : Header의 Theme 버튼(아이콘)을 통해서 Light 또는 Dark 테마를 적용할 수 있습니다.</li></ul><ul id="91726607-b0f3-49da-8b4c-a3861888e36d" class="bulleted-list"><li style="list-style-type:disc">기능 구현 : Redux를 이용하여 테마의 전역 상태를 간결하게 관리하는 방법도 있지만 props를 이용해서 전역 상태를 관리할 때 어떻게 상위 컴포넌트에서 하위 컴포넌트로 props를 통해서 전달하는 과정에 대해서 알고싶어서 props를 이용해서 구현하였습니다.</li></ul><figure id="28389875-e677-4166-afbb-28215b9a42f1" class="image"><a href="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled.png"><img style="width:1209px" src="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled.png"/></a></figure><p id="ab3f1f25-a233-4cd9-8243-352b98250c5c" class="">App.tsx에서 theme의 state를 관리하였습니다. 또한 App component가 랜더링 되었을 때  localStorage에서 “THEME” key 값으로 가져온 값이 없다면 Light모드로 기본값을 주었습니다.</p><h3 id="cccb1026-b7f8-4942-b350-348f3e237d00" class="">장바구니 기능</h3><ul id="00285964-e9b3-4d75-a20f-88a5243f3e3d" class="bulleted-list"><li style="list-style-type:disc">기능 소개 : 상품 상세 페이지에서 장바구니에 담기 버튼을 클릭했을 때 장바구니의 상품이 담김과 동시에 Header에 상품 개수가 올라가는 기능입니다.</li></ul><ul id="2d59fe31-1d3b-4395-a37a-0d1f42c2a162" class="bulleted-list"><li style="list-style-type:disc">기능 구현 : Header에 노출되는 상품 개수는 Redux Toolkit을 이용하였습니다. conterSlice 함수의 reducer를 이용해서 증가, 감소, 리셋 함수를 사용했습니다.</li></ul><figure id="796d93e8-80fd-46be-87bf-1584c11c63c1" class="image"><a href="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%201.png"><img style="width:1182px" src="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%201.png"/></a></figure><p id="d72e551a-5c58-4e13-8842-557df321cb99" class="">
</p><p id="c33d8093-4470-4906-afc3-bb0db7997273" class="">Header에서는 <mark class="highlight-red">const count = useSelector((state: RootState) =&gt; state.counter.value);</mark> useSelector를 이용해서 현재 상태의 value를 받아왔습니다.</p><h3 id="739bcd21-e261-4d1e-906a-654ac707ec30" class="">검색 기능</h3><ul id="e66eee42-62e5-4979-aa2d-5543b3403dc6" class="bulleted-list"><li style="list-style-type:disc">기능 소개 : 사용자가 Header SearchBar에 검색어를 입력하면, 해당 검색어와 일치하는 상품들의 리스트가 자동으로 표시되어, 사용자가 더욱 편리하게 원하는 상품을 찾을 수 있도록 도와주는 기능입니다.</li></ul><ul id="0f8e9845-7ec9-471a-9e13-b29eae95e8fc" class="bulleted-list"><li style="list-style-type:disc">기능 구현 : 사용자가 Header SearchBar에 검색어를 입력하면, 해당 검색어를 filterProduct() 함수에 전달합니다. filterProduct() 함수는 productList라는 배열에서 검색어와 일치하는 상품들만 추출해 새로운 배열을 생성합니다. 이 때, 검색어와 상품명을 비교할 때, 대소문자 구분 없이 일치하는 것을 찾기 위해 검색어와 상품명 모두 소문자로 변환해 줍니다. 그리고 filter 함수를 사용하여 검색어와 일치하는 상품들만 추출합니다. filter 함수를 통해 추출된 상품들의 배열을 이용하여, React의 map 함수를 이용해 각 상품의 정보를 가지고 있는 component를 렌더링합니다. 이를 통해, 사용자가 입력한 검색어와 일치하는 상품들을 리스트 형태로 보여줄 수 있습니다.</li></ul><figure id="8efde3ea-7466-4d84-8f0e-da5c4547180e" class="image"><a href="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%202.png"><img style="width:840px" src="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%202.png"/></a></figure><figure id="0d4c0305-4ccd-4eff-b612-d33805ee2800" class="image"><a href="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%203.png"><img style="width:750px" src="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%203.png"/></a></figure><p id="628020ad-c232-4ddf-819d-d40a193d444b" class="">
</p><h2 id="2d12177c-edc0-4ca2-8f6c-db3b72d0f99d" class="block-color-teal_background">이슈 </h2><h3 id="67e5a2e0-8bd7-4aba-a1c7-997418942163" class="">이슈 1 </h3><ul id="2919d9b2-79a2-4a8f-8a94-83f790b8b669" class="bulleted-list"><li style="list-style-type:disc">이슈 : Header에서 보이는 장바구니에 담긴 상품의 개수를 전역적으로 어떻게 관리해야 할지에 대한 고민이 있었습니다.</li></ul><ul id="5d0558b7-47ea-487a-93f3-cbfbe4ef21ef" class="bulleted-list"><li style="list-style-type:disc">해결 방법 : 페이지 상단의 Header에 보여지는 장바구니에 담긴 상품의 개수를 전역적으로 관리하기 위해 Redux Toolkit을 이용하였습니다. 이를 위해, 카트에 담긴 상품의 개수를 관리하는cartCounterSlice.ts를 생성하였습니다.</li></ul><p id="b2c670ea-b3d9-4cee-b7f6-5bf15f382a4c" class="">
</p><figure id="4ba074b7-6f98-432e-8ac5-fd249eebb917" class="image"><a href="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%204.png"><img style="width:720px" src="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%204.png"/></a><figcaption>                                                                                    App.tsx</figcaption></figure><p id="6a8daba8-a525-4503-adea-005a3db481da" class="">Redux를 사용하기 위해, React 애플리케이션에 Provider라는 컴포넌트를 이용하여 Redux store를 전역적으로 사용할 수 있도록 설정하였습니다.</p><p id="141df83b-96e8-4205-8e68-f5b288daec76" class="">
</p><figure id="e4f6a5a4-5711-44e3-b426-578239461a89" class="image"><a href="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%205.png"><img style="width:1920px" src="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%205.png"/></a></figure><figure id="33205725-3af7-4c42-a550-f2ddc8cab4f3" class="image"><a href="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%206.png"><img style="width:780px" src="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%206.png"/></a></figure><p id="1c0b32d6-3e41-41f9-bba2-a9b230219ba4" class="">로컬스토리지에 저장된 JSON 형태의 데이터를 가져와서 파싱하고, 가져온 값 중에서 &#x27; &#x27; (빈 문자열)이 아닌 값을 변수에 저장합니다. 그리고 for-in 반복문을 이용해서 parsedCartItem 변수의 키 값을 가져오고, 만약 해당 키 값을 가진 아이템이 cartItem 목록에 있다면, parsedCartItem의 해당 키 값을 이용해서 count 값을 가져오고 countSum 변수에 더해줍니다. 이렇게 더해진 값을 초기값으로 지정합니다. </p><p id="e6912aa1-bb8d-4067-994e-5b3287aa2dc7" class="">그 후 counterSlice의 increment, decrement, reset 함수를 dispatch해서 장바구니의 담긴 상품의 개수를 관리합니다.                                                        </p><h3 id="28970d0f-e2f2-4ca4-9c00-b16956ec6175" class="">이슈 2</h3><ul id="256f1bba-1544-4db7-81ff-9957937e0b91" class="bulleted-list"><li style="list-style-type:disc">Vercel 배포 오류 </li></ul><p id="5df4409f-2ae3-4575-a5ea-6e8909e92afe" class="">
</p><figure id="04b64967-b3a6-4a48-aeac-03325289328e" class="image"><a href="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%207.png"><img style="width:703px" src="ReactShop%209cbb95f08f4c4d9386f3b2b7a7baa29f/Untitled%207.png"/></a></figure><p id="bc4e77cb-9ef3-443d-8fef-f134f3032258" class="">
</p><ul id="c491402e-cdc1-4ac8-ae98-39dbca921fae" class="bulleted-list"><li style="list-style-type:disc">해결 방법 : 오류가 난 부분에 react-icons 뒤에 붙은 문자를 소문자로 변경하니 오류가 해결되었습니다.</li></ul><ul id="05d4c05f-23af-4c97-a1c7-81855eb03624" class="bulleted-list"><li style="list-style-type:disc"><mark class="highlight-red">import { BsSunFill } from &#x27;react-icons/bs&#x27;
import { IoMdMoon } from &#x27;react-icons/io&#x27;</mark></li></ul><p id="97a84e5b-3866-47d7-8a7c-711e8c28ac93" class="">
</p><p id="ab1b0136-e4dd-46de-8eab-f498300d3be9" class="">
</p></div></article></body></html>
