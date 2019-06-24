export class Article {
  constructor(
    public title: string,
    public link: string,
    public votes: number = 0
  ) {}

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  // extract the domain name from full URL
  extractDomain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      let urn = this.link.split('//')[1];
      return urn.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
