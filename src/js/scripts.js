// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.

  let fname = await input("Please enter your first name: ");
  let lname = await input("Please enter your last name: ");
  let fullName = fname + " " + lname;
  noOs = fullName.replaceAll("o", "a");
  output(noOs);

  let largeNum = await input("Please enter a number larger than 10: ");
  let smolNum = await input("Please enter a number smaller than 10: ");
  output(largeNum % smolNum);
}

