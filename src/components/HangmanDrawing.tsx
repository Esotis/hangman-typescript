const Head = (
  <div className="absolute top-[50px] -right-[20px] h-[50px] w-[50px] rounded-[100%] border-[10px] border-solid border-black" />
);

const Body = (
  <div className="absolute top-[100px] right-0 h-[100px] w-[10px] bg-black" />
);

const RightArm = (
  <div className="absolute top-[130px] -right-[100px] h-[10px] w-[100px] origin-bottom-left -rotate-[30deg] bg-black " />
);

const LeftArm = (
  <div className="absolute top-[130px] right-[10px] h-[10px] w-[100px] origin-bottom-right rotate-[30deg] bg-black " />
);

const RightLeg = (
  <div className="absolute top-[190px] -right-[90px] h-[10px] w-[100px] origin-bottom-left rotate-[60deg] bg-black " />
);

const LeftLeg = (
  <div className="absolute top-[190px] right-0 h-[10px] w-[100px] origin-bottom-right -rotate-[60deg] bg-black " />
);

const BodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BodyParts.slice(0, numberOfGuesses)}
      <div className="absolute top-0 right-0 h-[50px] w-[10px] bg-black" />
      <div className="ml-[120px] h-[10px] w-[200px] bg-black" />
      <div className="ml-[120px] h-[400px] w-[10px] bg-black" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
}

export default HangmanDrawing;
