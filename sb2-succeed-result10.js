// JSON.serialize(reportDetails)
const obj = JSON.parse(
    "[\"[{\\\"OWNER_FULL_NAME\\\":\\\"Zen Chouu\\\",\\\"ACCOUNT.NAME\\\":\\\"Edge Communications\\\",\\\"EMAIL\\\":\\\"rose@edge.com\\\",\\\"TITLE\\\":\\\"SVP, Procurement\\\",\\\"LAST_NAME\\\":\\\"Gonzalez\\\",\\\"FIRST_NAME\\\":\\\"Rose\\\",\\\"SALUTATION\\\":\\\"Ms.\\\"},{\\\"OWNER_FULL_NAME\\\":\\\"Zen Chouu\\\",\\\"ACCOUNT.NAME\\\":\\\"Pyramid Construction Inc.\\\",\\\"EMAIL\\\":\\\"pat@pyramid.net\\\",\\\"TITLE\\\":\\\"SVP, Administration and Finance\\\",\\\"LAST_NAME\\\":\\\"Stumuller\\\",\\\"FIRST_NAME\\\":\\\"Pat\\\",\\\"SALUTATION\\\":\\\"Ms.\\\"},{\\\"OWNER_FULL_NAME\\\":\\\"Zen Chouu\\\",\\\"ACCOUNT.NAME\\\":\\\"United Oil \",\" Gas Corp.\\\",\\\"EMAIL\\\":\\\"spavlova@uog.com\\\",\\\"TITLE\\\":\\\"SVP, Production\\\",\\\"LAST_NAME\\\":\\\"Pavlova\\\",\\\"FIRST_NAME\\\":\\\"Stella\\\",\\\"SALUTATION\\\":\\\"Ms.\\\"},{\\\"OWNER_FULL_NAME\\\":\\\"Zen Chouu\\\",\\\"ACCOUNT.NAME\\\":\\\"United Oil \",\" Gas Corp.\\\",\\\"EMAIL\\\":\\\"lboyle@uog.com\\\",\\\"TITLE\\\":\\\"SVP, Technology\\\",\\\"LAST_NAME\\\":\\\"Boyle\\\",\\\"FIRST_NAME\\\":\\\"Lauren\\\",\\\"SALUTATION\\\":\\\"Ms.\\\"},{\\\"OWNER_FULL_NAME\\\":\\\"Zen Chouu\\\",\\\"ACCOUNT.NAME\\\":\\\"Express Logistics and Transport\\\",\\\"EMAIL\\\":\\\"b.levy@expressl\",\"t.net\\\",\\\"TITLE\\\":\\\"SVP, Operations\\\",\\\"LAST_NAME\\\":\\\"Levy\\\",\\\"FIRST_NAME\\\":\\\"Babara\\\",\\\"SALUTATION\\\":\\\"Ms.\\\"},{\\\"OWNER_FULL_NAME\\\":\\\"Zen Chouu\\\",\\\"ACCOUNT.NAME\\\":\\\"University of Arizona\\\",\\\"EMAIL\\\":\\\"jane_gray@uoa.edu\\\",\\\"TITLE\\\":\\\"Dean of Administration\\\",\\\"LAST_NAME\\\":\\\"Grey\\\",\\\"FIRST_NAME\\\":\\\"Jane\\\",\\\"SALUTATION\\\":\\\"Ms.\\\"},{\\\"OWNER_FULL_NAME\\\":\\\"Zen Chouu\\\",\\\"ACCOUNT.NAME\\\":\\\"United Oil \",\" Gas, UK\\\",\\\"EMAIL\\\":\\\"ajames@uog.com\\\",\\\"TITLE\\\":\\\"VP, Finance\\\",\\\"LAST_NAME\\\":\\\"James\\\",\\\"FIRST_NAME\\\":\\\"Ashley\\\",\\\"SALUTATION\\\":\\\"Ms.\\\"},{\\\"OWNER_FULL_NAME\\\":\\\"Zen Chouu\\\",\\\"ACCOUNT.NAME\\\":\\\"United Oil \",\" Gas, Singapore\\\",\\\"EMAIL\\\":\\\"ldcruz@uog.com\\\",\\\"TITLE\\\":\\\"VP, Production\\\",\\\"LAST_NAME\\\":\\\"D'Cruz\\\",\\\"FIRST_NAME\\\":\\\"Liz\\\",\\\"SALUTATION\\\":\\\"Ms.\\\"},{\\\"OWNER_FULL_NAME\\\":\\\"Zen Chouu\\\",\\\"ACCOUNT.NAME\\\":\\\"GenePoint\\\",\\\"EMAIL\\\":\\\"efrank@genepoint.com\\\",\\\"TITLE\\\":\\\"VP, Technology\\\",\\\"LAST_NAME\\\":\\\"Frank\\\",\\\"FIRST_NAME\\\":\\\"Edna\\\",\\\"SALUTATION\\\":\\\"Ms.\\\"},{\\\"OWNER_FULL_NAME\\\":\\\"Zen Chouu\\\",\\\"ACCOUNT.NAME\\\":\\\"sForce\\\",\\\"EMAIL\\\":\\\"-\\\",\\\"TITLE\\\":\\\"-\\\",\\\"LAST_NAME\\\":\\\"Nedaerk\\\",\\\"FIRST_NAME\\\":\\\"Siddartha\\\",\\\"SALUTATION\\\":\\\"Ms.\\\"}]\"]"
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

