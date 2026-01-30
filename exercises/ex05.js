/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console.

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/

const shirtWidth = 24;
const shirtLength = 31;
const shirtSleeve = 8.88;

if (shirtWidth >= 18 && shirtWidth < 19 &&
    shirtLength >= 28 && shirtLength < 28.5 &&
    shirtSleeve >= 8.13 && shirtSleeve < 8.25) {
    console.log("S");
} else if (shirtWidth >= 20 && shirtWidth < 21 &&
           shirtLength >= 29 && shirtLength < 29.5 &&
           shirtSleeve >= 8.38 && shirtSleeve < 8.50) {
    console.log("M");
} else if (shirtWidth >= 22 && shirtWidth < 23 &&
           shirtLength >= 30 && shirtLength < 30.5 &&
           shirtSleeve >= 8.63 && shirtSleeve < 8.75) {
    console.log("L");
} else if (shirtWidth >= 24 && shirtWidth < 25 &&
           shirtLength >= 31 && shirtLength < 32 &&
           shirtSleeve >= 8.88 && shirtSleeve < 9.25) {
    console.log("XL");
} else if (shirtWidth >= 26 && shirtWidth < 27 &&
           shirtLength >= 33 && shirtLength < 33.5 &&
           shirtSleeve >= 9.63 && shirtSleeve < 9.88) {
    console.log("2XL");
} else if (shirtWidth >= 28 && shirtWidth < 29 &&
           shirtLength >= 34 && shirtLength < 35 &&
           shirtSleeve >= 10.13 && shirtSleeve < 10.38) {
    console.log("3XL");
} else {
    console.log("N/A");
}