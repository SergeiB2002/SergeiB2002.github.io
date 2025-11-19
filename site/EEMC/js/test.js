(function () {
        const correctAnswers = {
            1: 'B',
            2: 'A',
            3: 'C',
            4: 'A',
            5: 'B',
            6: 'C',
            7: 'C',
            8: 'A',
            9: 'A',
            10: 'D',
            11: 'C',
            12: 'B',
            13: 'C',
            14: 'B',
            15: 'A',
            16: 'C',
            17: 'B',
            18: 'B',
            19: 'C',
            20: 'B'
        };

        const totalQuestions = Object.keys(correctAnswers).length;
        let testChecked = false; // флаг, чтобы нельзя было пересчитать и менять ответы

        document.getElementById('check-test').addEventListener('click', function () {
            // Если уже проверяли — ничего не делаем
            if (testChecked) {
                return;
            }

            let correctCount = 0;

            for (let i = 1; i <= totalQuestions; i++) {
                const qName = 'q' + i;
                const questionBlock = document.getElementById('question-' + i);

                // Сбрасываем предыдущую подсветку
                questionBlock.classList.remove('correct', 'incorrect');

                const checked = document.querySelector('input[name="' + qName + '"]:checked');
                const userAnswer = checked ? checked.value : null;

                if (userAnswer === correctAnswers[i]) {
                    correctCount++;
                    questionBlock.classList.add('correct');
                } else {
                    questionBlock.classList.add('incorrect');
                }
            }

            const percent = Math.round((correctCount / totalQuestions) * 100);
            const resultText = document.getElementById('result-text');
            const resultBox = document.getElementById('test-result');

            resultText.textContent = correctCount + ' из ' + totalQuestions +
                ' правильных ответов (' + percent + '%).';
            resultBox.style.display = 'block';

            // После проверки блокируем все радио-кнопки,
            // чтобы больше нельзя было менять ответы
            const allInputs = document.querySelectorAll(
                '.questions-container input[type="radio"]'
            );
            allInputs.forEach(function (input) {
                input.disabled = true;
            });

            testChecked = true;
        });
    })();
