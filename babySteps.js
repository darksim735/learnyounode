var total = 0;

for (var i = 2; i < process.argv.length; i++) // start index at 2 since want third and beyond
{
total += Number(process.argv[i]); // sum and convert to integer
}
console.log(total);
