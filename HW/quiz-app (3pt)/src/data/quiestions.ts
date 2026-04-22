export interface Questions {
  question: string;
  options: string[];
  correct: string;
}

export const questions: Questions[] = [
  {
    question: "Who is the strongest among them?",
    options: [
      "Tralalelo Tralala",
      "Tun Tun Tun Sahur",
      "Trippi Troppi",
      "Brrr Brrr Patapim",
    ],
    correct: "Tun Tun Tun Sahur",
  },
  {
    question: "Who killed John Pork?",
    options: ["Tim Cheese", "Marwin Beak", "Pengu", "Justin Cheddar"],
    correct: "Tim Cheese",
  },
];
