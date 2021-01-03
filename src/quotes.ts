export interface Quote {
  title?: string;
  text: string;
  author: string;
}

export const quotes: Array<Quote> = [
  {
    title: "Gall's Law",
    text:
      "A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system.",
    author: "John Gall",
  },
  {
    title: "Brooks's law",
    text: "Adding manpower to a late software project makes it later.",
    author: "Fred Brooks",
  },
  {
    text:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    author: "John F. Woods",
  },
  {
    title: "YAGNI (You Ain't Gonna Need It)",
    text:
      "Always implement things when you actually need them, never when you just foresee that you need them.",
    author: "Ron Jeffries",
  },
  {
    text:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    author: "Brian W. Kernighan",
  },
  {
    text:
      "Decision time grows logarithmically with the number of options you can choose from.",
    author: "William Edmund Hick and Ray Hyman",
  },
  {
    text: "Don’t comment bad code&mdash;rewrite it.",
    author: "Brian W. Kernighan",
  },
  {
    text: "Duplication is far cheaper than the wrong abstraction.",
    author: "Sandi Metz",
  },
  {
    title: "Linus' law",
    text: "Given enough eyeballs, all bugs are shallow.",
    author: "Linus Torvalds",
  },
  {
    text: "How does a project get to be a year late?… One day at a time.",
    author: "Fred Brooks",
  },
  {
    text:
      "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
    author: "Bjarne Stroustrup",
  },
  {
    text:
      "If you cannot grok the overall structure of a program while taking a shower, you are not ready to code it.",
    author: "Richard Pattis",
  },
  {
    title: "Hofstadter's Law",
    text:
      "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
    author: "Douglas Hofstadter",
  },
  {
    text:
      "It’s OK to figure out murder mysteries, but you shouldn’t need to figure out code. You should be able to read it.",
    author: "Steve McConnell",
  },
  {
    text: "Make interfaces easy to use correctly and hard to use incorrectly.",
    author: "Scott Meyers",
  },
  {
    text:
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "Bill Gates",
  },
  {
    text:
      "Nobody loves what Prettier does to their syntax. Everyone loves what Prettier does to their coworkers' syntax.",
    author: "u/grensley",
  },
  {
    text: "One bad programmer can easily create two new jobs a year.",
    author: "David Parnas",
  },
  {
    title: "Conway's Law",
    text:
      "Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.",
    author: "Melvin Conway",
  },
  {
    text: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
  },
  {
    text:
      "Prolific developers don’t always write a lot of code, instead they solve a lot of problems. The two things are not the same.",
    author: "John Chambers",
  },
  {
    text:
      "Programming is like sex. One mistake and you have to support it for the rest of your life.",
    author: "Michael Sinz",
  },
  {
    text:
      "Real programmers don't comment their code. If it was hard to write it should be hard to read",
    author: "?",
  },
  {
    text: "Singleton is just a fancy name for global.",
    author: "?",
  },
  {
    text:
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    author: "Christopher Thompson",
  },
  {
    text: "The best way to get a project done faster is to start sooner.",
    author: "Jim Highsmith",
  },
  {
    text:
      "The difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
    author: "Linus Torvalds",
  },
  {
    text:
      "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
    author: "Tony Hoare",
  },
  {
    text:
      "Walking on water and developing software from a specification are easy if both are frozen.",
    author: "Edward V. Berard",
  },
  {
    text: "When a measure becomes a target, it ceases to be a good measure.",
    author: "Marilyn Strathern",
  },
  {
    text:
      "When I’m working on a problem, I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong.",
    author: "Freeman Dyson",
  },
];
