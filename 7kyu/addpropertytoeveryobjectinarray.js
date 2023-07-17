//Add property to every object in array
questions.forEach(x => {
  if (!x.usersAnswer) {
    x.usersAnswer = null
  }
})