// jsonStringGenerator.toString().replace('\r\n', '').replace('\n', '').replace('\r','')
const obj = JSON.parse(
    "[\"({  \\\"SALUTATION\\\" : \\\"Ms.\\\",  \\\"FIRST_NAME\\\" : \\\"Rose\\\",  \\\"LAST_NAME\\\" : \\\"Gonzalez\\\",  \\\"TITLE\\\" : \\\"SVP, Procurement\\\",  \\\"EMAIL\\\" : \\\"rose@edge.com\\\",  \\\"ACCOUNT.NAME\\\" : \\\"Edge Communications\\\",  \\\"OWNER_FULL_NAME\\\" : \\\"Zen Chouu\\\"}, {  \\\"SALUTATION\\\" : \\\"Ms.\\\",  \\\"FIRST_NAME\\\" : \\\"Pat\\\",  \\\"LAST_NAME\\\" : \\\"Stumuller\\\",  \\\"TITLE\\\" : \\\"SVP, Administration and Finance\\\",  \\\"EMAIL\\\" : \\\"pat@pyramid.net\\\",  \\\"ACCOUNT.NAME\\\" : \\\"Pyramid Construction Inc.\\\",  \\\"OWNER_FULL_NAME\\\" : \\\"Zen Chouu\\\"}, {  \\\"SALUTATION\\\" : \\\"Ms.\\\",  \\\"FIRST_NAME\\\" : \\\"Stella\\\",  \\\"LAST_NAME\\\" : \\\"Pavlova\\\",  \\\"TITLE\\\" : \\\"SVP, Production\\\",  \\\"EMAIL\\\" : \\\"spavlova@uog.com\\\",  \\\"ACCOUNT.NAME\\\" : \\\"United Oil \",\" Gas Corp.\\\",  \\\"OWNER_FULL_NAME\\\" : \\\"Zen Chouu\\\"}, {  \\\"SALUTATION\\\" : \\\"Ms.\\\",  \\\"FIRST_NAME\\\" : \\\"Lauren\\\",  \\\"LAST_NAME\\\" : \\\"Boyle\\\",  \\\"TITLE\\\" : \\\"SVP, Technology\\\",  \\\"EMAIL\\\" : \\\"lboyle@uog.com\\\",  \\\"ACCOUNT.NAME\\\" : \\\"United Oil \",\" Gas Corp.\\\",  \\\"OWNER_FULL_NAME\\\" : \\\"Zen Chouu\\\"}, {  \\\"SALUTATION\\\" : \\\"Ms.\\\",  \\\"FIRST_NAME\\\" : \\\"Babara\\\",  \\\"LAST_NAME\\\" : \\\"Levy\\\",  \\\"TITLE\\\" : \\\"SVP, Operations\\\",  \\\"EMAIL\\\" : \\\"b.levy@expressl\",\"t.net\\\",  \\\"ACCOUNT.NAME\\\" : \\\"Express Logistics and Transport\\\",  \\\"OWNER_FULL_NAME\\\" : \\\"Zen Chouu\\\"}, {  \\\"SALUTATION\\\" : \\\"Ms.\\\",  \\\"FIRST_NAME\\\" : \\\"Jane\\\",  \\\"LAST_NAME\\\" : \\\"Grey\\\",  \\\"TITLE\\\" : \\\"Dean of Administration\\\",  \\\"EMAIL\\\" : \\\"jane_gray@uoa.edu\\\",  \\\"ACCOUNT.NAME\\\" : \\\"University of Arizona\\\",  \\\"OWNER_FULL_NAME\\\" : \\\"Zen Chouu\\\"}, {  \\\"SALUTATION\\\" : \\\"Ms.\\\",  \\\"FIRST_NAME\\\" : \\\"Ashley\\\",  \\\"LAST_NAME\\\" : \\\"James\\\",  \\\"TITLE\\\" : \\\"VP, Finance\\\",  \\\"EMAIL\\\" : \\\"ajames@uog.com\\\",  \\\"ACCOUNT.NAME\\\" : \\\"United Oil \",\" Gas, UK\\\",  \\\"OWNER_FULL_NAME\\\" : \\\"Zen Chouu\\\"}, {  \\\"SALUTATION\\\" : \\\"Ms.\\\",  \\\"FIRST_NAME\\\" : \\\"Liz\\\",  \\\"LAST_NAME\\\" : \\\"D'Cruz\\\",  \\\"TITLE\\\" : \\\"VP, Production\\\",  \\\"EMAIL\\\" : \\\"ldcruz@uog.com\\\",  \\\"ACCOUNT.NAME\\\" : \\\"United Oil \",\" Gas, Singapore\\\",  \\\"OWNER_FULL_NAME\\\" : \\\"Zen Chouu\\\"}, {  \\\"SALUTATION\\\" : \\\"Ms.\\\",  \\\"FIRST_NAME\\\" : \\\"Edna\\\",  \\\"LAST_NAME\\\" : \\\"Frank\\\",  \\\"TITLE\\\" : \\\"VP, Technology\\\",  \\\"EMAIL\\\" : \\\"efrank@genepoint.com\\\",  \\\"ACCOUNT.NAME\\\" : \\\"GenePoint\\\",  \\\"OWNER_FULL_NAME\\\" : \\\"Zen Chouu\\\"}, {  \\\"SALUTATION\\\" : \\\"Ms.\\\",  \\\"FIRST_NAME\\\" : \\\"Siddartha\\\",  \\\"LAST_NAME\\\" : \\\"Nedaerk\\\",  \\\"TITLE\\\" : \\\"-\\\",  \\\"EMAIL\\\" : \\\"-\\\",  \\\"ACCOUNT.NAME\\\" : \\\"sForce\\\",  \\\"OWNER_FULL_NAME\\\" : \\\"Zen Chouu\\\"})\"]"
)

console.log(obj);
console.log('obj length: ', obj.length)
obj.forEach((el, index) => {
    console.log(`
    ===============================================
    ${index}
    ===============================================`)
    console.log(el);
});

console.log(`
===============================================

===============================================`)

const obj2 = obj.join('')
const obj3 = obj2.replace('(', '[').replace(')', ']')  
const obj4 = JSON.parse(obj3)
console.log(obj4)
console.log('length ', obj4.length)

