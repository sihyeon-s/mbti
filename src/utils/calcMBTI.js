export function calcMBTI(answers) {
  const count = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  answers.forEach((a) => {
    count[a]++;
  });

  return (
    (count.E >= count.I ? "E" : "I") +
    (count.S >= count.N ? "S" : "N") +
    (count.T >= count.F ? "T" : "F") +
    (count.J >= count.P ? "J" : "P")
  );
}