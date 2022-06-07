let game = {

    run() {

    },

    init() {
        console.log('Добро пожаловать на игру "Веселые извилины"!');
        console.log('Давайте узнаем кто играет с нами сегодня?');
        const player = prompt('Введите ваше имя');
        console.log(`Приветствую вас, ${player}. Что бы начать игру пропишите команду game.run() и нажмите Enter.`)
    }
}

game.init();