/**
 * Check if number can be rep as sums of powers of three, logic when converted
 * to base three there should be no '2'
 */

 var checkPowersOfThree = n => n.toString(3).indexOf('2') === -1;