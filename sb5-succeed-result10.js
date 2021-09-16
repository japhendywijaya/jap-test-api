// JSON.serialize(jsonStringGenerator.toString())
const obj = JSON.parse(
    "[\"\\\"({\\\\n  \\\\\\\"SALUTATION\\\\\\\" : \\\\\\\"Ms.\\\\\\\",\\\\n  \\\\\\\"FIRST_NAME\\\\\\\" : \\\\\\\"Rose\\\\\\\",\\\\n  \\\\\\\"LAST_NAME\\\\\\\" : \\\\\\\"Gonzalez\\\\\\\",\\\\n  \\\\\\\"TITLE\\\\\\\" : \\\\\\\"SVP, Procurement\\\\\\\",\\\\n  \\\\\\\"EMAIL\\\\\\\" : \\\\\\\"rose@edge.com\\\\\\\",\\\\n  \\\\\\\"ACCOUNT.NAME\\\\\\\" : \\\\\\\"Edge Communications\\\\\\\",\\\\n  \\\\\\\"OWNER_FULL_NAME\\\\\\\" : \\\\\\\"Zen Chouu\\\\\\\"\\\\n}, {\\\\n  \\\\\\\"SALUTATION\\\\\\\" : \\\\\\\"Ms.\\\\\\\",\\\\n  \\\\\\\"FIRST_NAME\\\\\\\" : \\\\\\\"Pat\\\\\\\",\\\\n  \\\\\\\"LAST_NAME\\\\\\\" : \\\\\\\"Stumuller\\\\\\\",\\\\n  \\\\\\\"TITLE\\\\\\\" : \\\\\\\"SVP, Administration and Finance\\\\\\\",\\\\n  \\\\\\\"EMAIL\\\\\\\" : \\\\\\\"pat@pyramid.net\\\\\\\",\\\\n  \\\\\\\"ACCOUNT.NAME\\\\\\\" : \\\\\\\"Pyramid Construction Inc.\\\\\\\",\\\\n  \\\\\\\"OWNER_FULL_NAME\\\\\\\" : \\\\\\\"Zen Chouu\\\\\\\"\\\\n}, {\\\\n  \\\\\\\"SALUTATION\\\\\\\" : \\\\\\\"Ms.\\\\\\\",\\\\n  \\\\\\\"FIRST_NAME\\\\\\\" : \\\\\\\"Stella\\\\\\\",\\\\n  \\\\\\\"LAST_NAME\\\\\\\" : \\\\\\\"Pavlova\\\\\\\",\\\\n  \\\\\\\"TITLE\\\\\\\" : \\\\\\\"SVP, Production\\\\\\\",\\\\n  \\\\\\\"EMAIL\\\\\\\" : \\\\\\\"spavlova@uog.com\\\\\\\",\\\\n  \\\\\\\"ACCOUNT.NAME\\\\\\\" : \\\\\\\"United Oil \",\" Gas Corp.\\\\\\\",\\\\n  \\\\\\\"OWNER_FULL_NAME\\\\\\\" : \\\\\\\"Zen Chouu\\\\\\\"\\\\n}, {\\\\n  \\\\\\\"SALUTATION\\\\\\\" : \\\\\\\"Ms.\\\\\\\",\\\\n  \\\\\\\"FIRST_NAME\\\\\\\" : \\\\\\\"Lauren\\\\\\\",\\\\n  \\\\\\\"LAST_NAME\\\\\\\" : \\\\\\\"Boyle\\\\\\\",\\\\n  \\\\\\\"TITLE\\\\\\\" : \\\\\\\"SVP, Technology\\\\\\\",\\\\n  \\\\\\\"EMAIL\\\\\\\" : \\\\\\\"lboyle@uog.com\\\\\\\",\\\\n  \\\\\\\"ACCOUNT.NAME\\\\\\\" : \\\\\\\"United Oil \",\" Gas Corp.\\\\\\\",\\\\n  \\\\\\\"OWNER_FULL_NAME\\\\\\\" : \\\\\\\"Zen Chouu\\\\\\\"\\\\n}, {\\\\n  \\\\\\\"SALUTATION\\\\\\\" : \\\\\\\"Ms.\\\\\\\",\\\\n  \\\\\\\"FIRST_NAME\\\\\\\" : \\\\\\\"Babara\\\\\\\",\\\\n  \\\\\\\"LAST_NAME\\\\\\\" : \\\\\\\"Levy\\\\\\\",\\\\n  \\\\\\\"TITLE\\\\\\\" : \\\\\\\"SVP, Operations\\\\\\\",\\\\n  \\\\\\\"EMAIL\\\\\\\" : \\\\\\\"b.levy@expressl\",\"t.net\\\\\\\",\\\\n  \\\\\\\"ACCOUNT.NAME\\\\\\\" : \\\\\\\"Express Logistics and Transport\\\\\\\",\\\\n  \\\\\\\"OWNER_FULL_NAME\\\\\\\" : \\\\\\\"Zen Chouu\\\\\\\"\\\\n}, {\\\\n  \\\\\\\"SALUTATION\\\\\\\" : \\\\\\\"Ms.\\\\\\\",\\\\n  \\\\\\\"FIRST_NAME\\\\\\\" : \\\\\\\"Jane\\\\\\\",\\\\n  \\\\\\\"LAST_NAME\\\\\\\" : \\\\\\\"Grey\\\\\\\",\\\\n  \\\\\\\"TITLE\\\\\\\" : \\\\\\\"Dean of Administration\\\\\\\",\\\\n  \\\\\\\"EMAIL\\\\\\\" : \\\\\\\"jane_gray@uoa.edu\\\\\\\",\\\\n  \\\\\\\"ACCOUNT.NAME\\\\\\\" : \\\\\\\"University of Arizona\\\\\\\",\\\\n  \\\\\\\"OWNER_FULL_NAME\\\\\\\" : \\\\\\\"Zen Chouu\\\\\\\"\\\\n}, {\\\\n  \\\\\\\"SALUTATION\\\\\\\" : \\\\\\\"Ms.\\\\\\\",\\\\n  \\\\\\\"FIRST_NAME\\\\\\\" : \\\\\\\"Ashley\\\\\\\",\\\\n  \\\\\\\"LAST_NAME\\\\\\\" : \\\\\\\"James\\\\\\\",\\\\n  \\\\\\\"TITLE\\\\\\\" : \\\\\\\"VP, Finance\\\\\\\",\\\\n  \\\\\\\"EMAIL\\\\\\\" : \\\\\\\"ajames@uog.com\\\\\\\",\\\\n  \\\\\\\"ACCOUNT.NAME\\\\\\\" : \\\\\\\"United Oil \",\" Gas, UK\\\\\\\",\\\\n  \\\\\\\"OWNER_FULL_NAME\\\\\\\" : \\\\\\\"Zen Chouu\\\\\\\"\\\\n}, {\\\\n  \\\\\\\"SALUTATION\\\\\\\" : \\\\\\\"Ms.\\\\\\\",\\\\n  \\\\\\\"FIRST_NAME\\\\\\\" : \\\\\\\"Liz\\\\\\\",\\\\n  \\\\\\\"LAST_NAME\\\\\\\" : \\\\\\\"D'Cruz\\\\\\\",\\\\n  \\\\\\\"TITLE\\\\\\\" : \\\\\\\"VP, Production\\\\\\\",\\\\n  \\\\\\\"EMAIL\\\\\\\" : \\\\\\\"ldcruz@uog.com\\\\\\\",\\\\n  \\\\\\\"ACCOUNT.NAME\\\\\\\" : \\\\\\\"United Oil \",\" Gas, Singapore\\\\\\\",\\\\n  \\\\\\\"OWNER_FULL_NAME\\\\\\\" : \\\\\\\"Zen Chouu\\\\\\\"\\\\n}, {\\\\n  \\\\\\\"SALUTATION\\\\\\\" : \\\\\\\"Ms.\\\\\\\",\\\\n  \\\\\\\"FIRST_NAME\\\\\\\" : \\\\\\\"Edna\\\\\\\",\\\\n  \\\\\\\"LAST_NAME\\\\\\\" : \\\\\\\"Frank\\\\\\\",\\\\n  \\\\\\\"TITLE\\\\\\\" : \\\\\\\"VP, Technology\\\\\\\",\\\\n  \\\\\\\"EMAIL\\\\\\\" : \\\\\\\"efrank@genepoint.com\\\\\\\",\\\\n  \\\\\\\"ACCOUNT.NAME\\\\\\\" : \\\\\\\"GenePoint\\\\\\\",\\\\n  \\\\\\\"OWNER_FULL_NAME\\\\\\\" : \\\\\\\"Zen Chouu\\\\\\\"\\\\n}, {\\\\n  \\\\\\\"SALUTATION\\\\\\\" : \\\\\\\"Ms.\\\\\\\",\\\\n  \\\\\\\"FIRST_NAME\\\\\\\" : \\\\\\\"Siddartha\\\\\\\",\\\\n  \\\\\\\"LAST_NAME\\\\\\\" : \\\\\\\"Nedaerk\\\\\\\",\\\\n  \\\\\\\"TITLE\\\\\\\" : \\\\\\\"-\\\\\\\",\\\\n  \\\\\\\"EMAIL\\\\\\\" : \\\\\\\"-\\\\\\\",\\\\n  \\\\\\\"ACCOUNT.NAME\\\\\\\" : \\\\\\\"sForce\\\\\\\",\\\\n  \\\\\\\"OWNER_FULL_NAME\\\\\\\" : \\\\\\\"Zen Chouu\\\\\\\"\\\\n})\\\"\"]"
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
const obj3 = JSON.parse(obj2.replace('(', '[').replace(')', ']')  )
const obj4 = JSON.parse(obj3)
console.log(obj4)
console.log('length ', obj4.length)

