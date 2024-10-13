function wordwrap(word, length) {
    for (let i = 0; i < ((word.length - (word.length % length) / length)); i++) {
        for (let j = 0; j < length; j++) {
            if ((length * i + j + 1) <= word.length) {
                process.stdout.write(word[length * i + j]);
            }
        }
        process.stdout.write("\n");
    }
}
wordwrap("Hello", 2);
