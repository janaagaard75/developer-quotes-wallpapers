import { QuoteData } from "./QuoteData";

export const quotes: { [fileName: string]: QuoteData } = {
  "any-fool": {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  "bad-programmers": {
    text: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
    author: "Linus Torvalds",
  },
  "beautiful-solution": {
    text: "When I'm working on a problem, I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong.",
    author: "Freeman Dyson",
  },
  "brooks-law": {
    title: "Brooks's law",
    text: "Adding manpower to a late software project makes it later.",
    author: "Fred Brooks",
  },
  "comment-and-code-disagree": {
    text: "If the comment and code disagree, both are probably wrong.",
    author: "Norm Schryer",
  },
  "comments-are-a-failure": {
    text: "A comment is a failure to express yourself in code. If you fail, then write a comment; but try not to fail.",
    author: "Uncle Bob Martin",
  },
  "conways-law": {
    title: "Conway's Law",
    text: "Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.",
    author: "Melvin Conway",
  },
  "debugging-is-twice-as-hard": {
    text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    author: "Brian W. Kernighan",
  },
  "duplication-is-cheaper": {
    text: "Duplication is far cheaper than the wrong abstraction.",
    author: "Sandi Metz",
  },
  "too-clever": {
    text: "Don't be (too) clever.",
    author: "Bjarne Stroustrup",
  },
  "everybody-loves-hates-prettier": {
    text: "Nobody loves what Prettier does to their syntax. Everyone loves what Prettier does to their coworkers' syntax.",
    author: "u/grensley",
  },
  "express-clearly-in-comments": {
    text: "A common fallacy is to assume that authors of incomprehensible code will somehow be able to express themselves lucidly and clearly in comments.",
    author: "Kevlin Henney",
  },
  "first-rule-of-usability": {
    text: "First Rule of Usability? Don't Listen to Users",
    author: "Jakob Nielsen",
  },
  "harder-to-read-than-write": {
    text: "It's harder to read code than to write it.",
    author: "Joel Spolsky",
  },
  "hofstadters-law": {
    title: "Hofstadter's Law",
    text: "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
    author: "Douglas Hofstadter",
  },
  "late-one-day-at-a-time": {
    text: "How does a project get to be a year late?&hellip; One day at a time.",
    author: "Fred Brooks",
  },
  "hanlons-razor": {
    title: "Hanlon's Razor",
    text: "never attribute to malice that which is adequately explained by stupidity.",
    author: "Robert J. Hanlon",
  },
  "hyrums-law": {
    title: "Hyrum's law",
    text: "With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviors of your system will be depended on by somebody.",
    author: "Hyrum Wright",
    url: "https://www.hyrumslaw.com/",
  },
  "integrating-poorly-documented-apis": {
    text: "90% of the software engineering being done today is integrating poorly documented API A with poorly documented API B.",
    author: "Austen Allred",
  },
  "linus-law": {
    title: "Linus' law",
    text: "Given enough eyeballs, all bugs are shallow.",
    author: "Linus Torvalds",
  },
  "make-interfaces-easy": {
    text: "Make interfaces easy to use correctly and hard to use incorrectly.",
    author: "Scott Meyers",
  },
  "measuring-by-lines-of-code": {
    text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "Bill Gates",
  },
  "measure-becomes-target": {
    text: "When a measure becomes a target, it ceases to be a good measure.",
    author: "Marilyn Strathern",
  },
  "no-obvious-deficiencies": {
    text: "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
    author: "Tony Hoare",
  },
  "not-ready-to-code-it": {
    text: "If you cannot grok the overall structure of a program while taking a shower, you are not ready to code it.",
    author: "Richard Pattis",
  },
  "nothing-left-to-take-away": {
    text: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupery",
  },
  "one-bad-programmer": {
    text: "One bad programmer can easily create two new jobs a year.",
    author: "David Parnas",
  },
  "parse-dont-validate": {
    text: "Parse, don't validate",
    author: "Alexis King",
  },
  "premature-optimization": {
    text: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
  },
  "programming-is-like-sex": {
    text: "Programming is like sex. One mistake and you have to support it for the rest of your life.",
    author: "Michael Sinz",
  },
  "real-programmers-dont-comment": {
    text: "Real programmers don't comment their code. If it was hard to write it should be hard to read",
    author: "?",
  },
  "rewrite-bad-code": {
    text: "Don't comment bad code&mdash;rewrite it.",
    author: "Brian W. Kernighan",
  },
  "should-be-able-to-read-code": {
    text: "It's OK to figure out murder mysteries, but you shouldn't need to figure out code. You should be able to read it.",
    author: "Steve McConnell",
  },
  "singleton-is-just-global": {
    text: "Singleton is just a fancy name for global.",
    author: "?",
  },
  "short-cuts": {
    text: "Short cuts make long delays.",
    author: "Pippin (in The Lord of the Rings by J. R. R. Tolkien)",
  },
  "simplify": {
    text: "<s>Simplify</s> <s>Simplify</s> Simplify",
    author: "?",
  },
  "solve-a-lot-of-problems": {
    text: "Prolific developers don't always write a lot of code, instead they solve a lot of problems. The two things are not the same.",
    author: "John Chambers",
  },
  "start-sooner": {
    text: "The best way to get a project done faster is to start sooner.",
    author: "Jim Highsmith",
  },
  "stay-in-bed-on-monday": {
    text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    author: "Christopher Thompson",
  },
  "suck-at-the-average": {
    text: "I suspect devs are actually decent at estimating the *median* time to complete a task. Planning is hard because they suck at the *average*.",
    author: "Erik Bernhardsson",
  },
  "swim-with-the-current-stand-like-a-rock": {
    text: "In matters of style, swim with the current; in matters of principle, stand like a rock.",
    author: "Unknown",
  },
  "the-s-in-iot": {
    text: "The S in IoT is for Security.",
    author: "Todd Weaver",
  },
  "two-kinds-of-languages": {
    text: "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
    author: "Bjarne Stroustrup",
  },
  "user-exploitation": {
    text: "UX is now &lsquo;user exploitation&rsquo;.",
    author: "Mark Hurst",
  },
  "violent-psychopath": {
    text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    author: "John F. Woods",
  },
  "walking-on-water": {
    text: "Walking on water and developing software from a specification are easy if both are frozen.",
    author: "Edward V. Berard",
  },
  "wtfs-per-minute": {
    text: "The only valid measurement of code quality: WTFs/minute.",
    author: "Thom Holwerda",
  },
  "yagni": {
    title: "YAGNI (You Ain't Gonna Need It)",
    text: "Always implement things when you actually need them, never when you just foresee that you need them.",
    author: "Ron Jeffries",
  },
};
