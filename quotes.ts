export interface Quote {
  author: string;
  text: string;
}

export const quotes: Array<Quote> = [
  {
    author: "?",
    text: "Singleton is just a fancy name for global.",
  },
  {
    author: "Brian W. Kernighan",
    text: "Don’t comment bad code&mdash;rewrite it.",
  },
  {
    author: "Brian W. Kernighan",
    text:
      "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
  },
  {
    author: "Josh Bloch",
    text: "APIs should be easy to use and hard to misuse.",
  },
  {
    author: "Linus Torvalds",
    text: "Given enough eyeballs, all bugs are shallow.",
  },
  {
    author: "Linus Torvalds",
    text:
      "The difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
  },
  {
    author: "Sandi Metz",
    text: "Duplication is far cheaper than the wrong abstraction.",
  },
  {
    author: "Tony Hoare",
    text:
      "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
  },
];
