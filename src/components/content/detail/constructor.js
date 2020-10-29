export class NewsCoverC {
  constructor(item) {
    this.cover_url = item.cover_url
    this.title = item.title
  }
}

export class NewsBodyC {
  constructor(item) {
    this.text = item.text
  }
}

export class AuthorinfoC {
  constructor(item) {
    this.nickname = item.author.nickname
    this.portrait = item.author.portrait
  }
}