const firstName = prompt('Напишите первое имя')
secondName = prompt('Напишите второе имя')

console.log(firstName)
console.log(secondName)

const randomName = Math.floor(Math.random() * 100)

if (firstName === null || secondName === null) {
  alert(
    `К сожалению вы не ввели  данные, у одного из пользователей,попробуйте еще раз `
  )
} else if (firstName === '' || secondName === '') {
  alert(
    `К сожалению вы не ввели  данные, у одного из пользователей,попробуйте еще раз `
  )
} else if (randomName < 33) {
  alert(
    `Результат  совместимости имен ${firstName} и ${secondName}
     будет равна ${randomName}...
     Ну что же,вам придется поискать человека с другим именем :( `
  )
} else if (33 <= randomName && randomName <= 66) {
  alert(
    `Результат  совместимости имен ${firstName} и ${secondName}
     будет равна ${randomName}.
      Вы очень хорошо подходите друг другу `
  )
} else if (66 < randomName && randomName <= 100) {
  alert(
    `Результат  совместимости имен ${firstName} и ${secondName}
     будет равна ${randomName}.Отлично!!!
      Вы максимально совместимы и ваши имена 
      идеально дополняют друг друга! <3 `
  )
} else {
  alert(
    `Видимо программа устала или совместимость ваших имен на столько велика,что вам придется начать все с начала!) `
  )
}
