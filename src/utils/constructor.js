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

export class PostCategoryC {
  constructor(item) {
    this.id = item.category.id
    this.name = item.category.name
  }
}

export class PostBodyC {
  constructor(item) {
    this.title = item.title
    this.text = item.text
  }
}