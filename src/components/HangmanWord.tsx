type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="flex gap-6 font-mono text-8xl font-bold uppercase">
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          className="border-b-[0.1em] border-solid border-black"
        >
          <span
            className={`${
              guessedLetters.includes(letter) || reveal
                ? "visible"
                : "invisible"
            } ${
              !guessedLetters.includes(letter) && reveal
                ? "text-red-600"
                : "text-black"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
