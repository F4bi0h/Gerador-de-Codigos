class GeneratorCode {
    constructor() {
        this.words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.characters = ['!', '@', '#', '$', '%', '¨', '&', '*', '(', ')', '-', '_', '+', '=', '/', '?', ',', '.'];
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        // methods
        this.getOptions();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    getOptions() {
        let btn = document.querySelector('.btn-success');

        btn.addEventListener('click', () => {
            let optionWord = document.querySelector('#letras');
            let optionNumber = document.querySelector('#numeros');
            let optionCharacter = document.querySelector('#caracter');

            this.shuffleArray(this.words);
            this.shuffleArray(this.characters);
            this.shuffleArray(this.numbers);

            if (optionWord.checked === true && optionCharacter.checked === false && optionNumber.checked === false) {

                document.querySelector('#my-password').value = this.words.slice(0, 8).join('');

            }

            if (optionWord.checked === false && optionCharacter.checked === true && optionNumber.checked === false) {

                document.querySelector('#my-password').value = this.characters.slice(0, 8).join('');

            }

            if (optionWord.checked === false && optionCharacter.checked === false && optionNumber.checked === true) {

                document.querySelector('#my-password').value = this.numbers.slice(0, 8).join('');

            }

            if (optionWord.checked === true && optionCharacter.checked === true && optionNumber.checked === false) {

                let wordsAndCharacter = this.words.concat(this.characters);
                this.shuffleArray(wordsAndCharacter);

                document.querySelector('#my-password').value = wordsAndCharacter.slice(0, 8).join('');

            }

            if (optionWord.checked === true && optionCharacter.checked === false && optionNumber.checked === true) {

                let wordsAndNumbers = this.words.concat(this.numbers);
                this.shuffleArray(wordsAndNumbers);

                document.querySelector('#my-password').value = wordsAndNumbers.slice(0, 8).join('');

            }

            if (optionWord.checked === false && optionCharacter.checked === true && optionNumber.checked === true) {

                let characterAndNumber = this.characters.concat(this.numbers);
                this.shuffleArray(characterAndNumber);

                document.querySelector('#my-password').value = characterAndNumber.slice(0, 8).join('');

            }

            if (optionWord.checked === true && optionCharacter.checked === true && optionNumber.checked === true) {

                let all = this.words.concat(this.numbers, this.characters);
                this.shuffleArray(all);

                document.querySelector('#my-password').value = all.slice(0, 8).join('');

            }

            if (optionWord.checked === false && optionCharacter.checked === false && optionNumber.checked === false) {

                return alert('Preencha alguns dos campos.');

            }
        });
    }

}

let generatorCode = new GeneratorCode();

