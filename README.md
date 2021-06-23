<h1>WebBootCamp</h1>
<h2>HTML</h2>

perhaps create list of what I 
html elements
https://developer.mozilla.org/en-US/docs/Web/HTML/Element
! tab to make boilerplate
ul for bullets
ol for numbered list
li is for lists inside
a is for hyperlinks
img is for photos
links can be from local files or form the web
comment is control c & k
html standard
https://html.spec.whatwg.org/
div grouping elements for css
span grouping for inline elements
br to break elements into seperate lines
hr to add horizonal line
sup superscript
sub subscript
html entity code
https://entitycode.com/
nav, footer, main, article these are div but with better semantics
this will help with searching the markup
section - standalone section (heading, paragraph)
article - self-contained composition (heading to say what its about)
nav - div for navigation links
main - the main content of the page
header
footer
aside - not part of the document, not essential
summery
details
figure
time
link to emmet
https://docs.emmet.io/cheat-sheet/ > (child) < siblng + mult *
table - create table
td - cell in table
tr - row that has nested cells
th - header for cells
thead
tbody
tfoot
colgroup
caption
form - groups all the forms in one elements
    action attribute send data to
    method attribute what http method is used
label is linked to inputs
id attribute should be unique to one tag
label name attribute adds to the path of the form
name is important when sending the data
these names will be concatenated
name attribute groups similar elements like radio buttons
value attribute passes a value into the get request
select/option bar will 

<h2>css</h2>
selector{
    property : value;
}
list of all propeties
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
go with mdn rather then w3schools
look at various sites to get an understand how this stuff will look like
color property just works with text
140 named colors, 16 million colors a screen can capture
RGB 0-255  rgb(255,0,0) is red, green and blue you can get this from color picker
https://htmlcolorcodes.com/color-names/
text align only aligns with the block of the tag not the whole page.
try not to use pixels for responsive websites (absolute units)
picking the right font family will depend on what the browser supports
https://www.cssfontstack.com/
https://coolors.co/palettes/trending for color palettes
for selectors
    body - all body tags
    #clown - the one tag with id = "clown"
    .complete - all tags with class = "complete"
    li a - all a tags with decendent of li
    h1 + p - p that is after h1
    div > li - only the li that are the direct child of div
    input[type = "text"] - input with attribute type = text
hold alt to get multiple cursors
pseudo classes are keywords added to the end of a selector to show a specific state
  hover, active (when it gets activated)
cascade is the idea that the order of css matters  
specificity which rules to apply under what condition
the more specific the selector the more it win out over other selectors
id > class > element
https://specificity.keegan.st/
chrome tools can help with knowing which css is being applied and why
inline styles takes precedence over everything...don't use them
!important is the most specific property you can assign.
inheritance with be invoke from parent elements, inherit can be assigned to properties
CSS box
width property sets the content size
margin - border - padding - content
border-width, border-color, border-style
border-radius should be set to percentage
padding is in between content and border
margin is the space between the border and another element
display property
    inline - width and height ignored
            margin and padding push elements away horizontally but not vertically
    block - break flow of document width, height and padding respected
    inline-block - like inline but width, height margin and padding are respected
relative measurements
    % - sized based on size of element or its parent
    em - for font size 1em is 1x the font size of parent
    rem - for font size 1em is 1x the fonts size of the root html element
rgba = red, green, blue, alpha: alpha refers to how tranparent the color is
transitions - easing functions https://easings.net/
single out your transitions
great resources for images you can use https://unsplash.com/
fonts https://fonts.google.com/
<span></span> no white space
<span> white space
</span>
to reduce inconsistances between browsers use this default CSS
https://meyerweb.com/eric/tools/css/reset/
Bootstrap
https://getbootstrap.com/docs/4.5/getting-started/introduction/
.container <tab> will make a div with container class
Keep pressing . to continue the classname

Bootstrap
container - doesn't go the whole width
container-fluid - goes the whole width
container-sm..xl - will be full size until a certain breakpoint
every row has 12 units to divide up
font awesome for getting icons

<h2>Javascript</h2>

chrome console

press up to get to the previous commands
NaN is a numeric value that is not a number
PEMDAS  parentesis-exponent-mult-div-add-sub
const cannot be changed
variables can change type (dynammically typed)
variables cannot start with a number but can have a variable
usally they want you to have variables in camelcase => camelCase
use meaningful names
adding "is" to the beginning of a boolean variables
Strings
can use " or ' to encase string
strings are indexed like arrays
strings are immutable
typeof (variable) will give you the type of the variable
slice will give you a substing of string
on MZN when they have the [] in the arguments it means its optional
