export interface Quote {
  title?: string;
  text: string;
  author: string;
}

export const quotes: Array<Quote> = [
  {
    text: "Singleton is just a fancy name for global.",
    author: "?",
  },
  {
    text:
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "Bill Gates",
  },
  {
    text: "Don’t comment bad code&mdash;rewrite it.",
    author: "Brian W. Kernighan",
  },
  {
    text:
      "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
    author: "Brian W. Kernighan",
  },
  {
    text: "One bad programmer can easily create two new jobs a year.",
    author: "David Parnas",
  },
  {
    text:
      "Walking on water and developing software from a specification are easy if both are frozen.",
    author: "Edward V. Berard",
  },
  {
    text: "APIs should be easy to use and hard to misuse.",
    author: "Josh Bloch",
  },
  {
    title: "Linus' law",
    text: "Given enough eyeballs, all bugs are shallow.",
    author: "Linus Torvalds",
  },
  {
    text:
      "The difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
    author: "Linus Torvalds",
  },
  {
    title: "Conway's Law",
    text:
      "Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.",
    author: "Melvin Conway",
  },
  {
    text: "Duplication is far cheaper than the wrong abstraction.",
    author: "Sandi Metz",
  },
  {
    text: "Make interfaces easy to use correctly and hard to use incorrectly.",
    author: "Scott Meyers",
  },
  {
    text:
      "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
    author: "Tony Hoare",
  },
];
