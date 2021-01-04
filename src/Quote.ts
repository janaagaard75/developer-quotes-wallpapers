interface IQuote {
  title?: string;
  text: string;
  author: string;
}

export class Quote {
  constructor(private quote: IQuote) {}

  public get title(): string {
    return this.quote.title ?? "";
  }

  public get text(): string {
    return this.quote.text;
    /*
    // Do not break close to commas and full stops. See https://regexr.com/5jjs5.
    const noBreakBeforePunctuation = this.quote.text.replace(
      / ([^ ,\.]+[,\.])/g,
      "&nbsp;$1"
    );
    // Do not put single words on the line after commas and full stops. https://regexr.com/5jjt0
    const noSingleWordsAfterPunctuation = noBreakBeforePunctuation.replace(
      /([,\.] [^ ,\.]+) /,
      "$1&nbsp;"
    );
    return noSingleWordsAfterPunctuation;
    */
  }

  public get author(): string {
    return this.quote.author;
  }
}
