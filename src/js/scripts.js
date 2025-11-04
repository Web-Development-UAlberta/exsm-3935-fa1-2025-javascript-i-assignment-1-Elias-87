// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.

  let fname = await input("Please enter your first name: ");
  let lname = await input("Please enter your last name: ");
  let fullName = fname + " " + lname;
  let noOs = fullName.replaceAll("o", "a");
  output(noOs);

  let largeNum = await input("Please enter a number larger than 10: ");

  while (largeNum <= 10){
    if (largeNum <= 10){
      largeNum = await input("That number was too small, please enter a number larger than 10: ");
    }
  }
  
  let smolNum = await input("Please enter a number larger than 0 and smaller than 10: ");

  while (smolNum >= 10 || smolNum <=0){
    if (smolNum >= 10){
      smolNum = await input("That number was too large, please enter a number smaller than 10: ");
    }
    try{
     if (smolNum <= 0) throw smolNum = await input("You cannot divide by 0, please enter a number larger than 0 and smaller than 10: ");
    } catch (error){

    }

  output(largeNum % smolNum);
}
}
