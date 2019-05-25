export function BigWord(S, words: string[]) {
    words.forEach((word) => {
        if (word == S) {
            console.log(S);
            return;
        }
        else if (word.length < S.length) {
            let contains = true;
            for (let i = 0; i < word.length; i++) {
                let charContains = false;
                let j = 0;
                for (; j < S.length;) {
                    if (word[i] == S[j]) {
                        charContains = true;
                        break;
                    }
                    else{
                        j++;
                    }
                }
                if (!charContains) {
                    contains = false;
                    i = word.length;
                }

            }
            if (contains) {
                console.log(word);
            }
            contains = false;

        }
    })
}
