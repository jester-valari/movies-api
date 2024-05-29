interface IAwards {
    wins: number;
    nominations: number;
    text: string;
  }

interface IImdb {
    rating:number,
    votes:number,
    id:number
}

interface ITomatoes {
    viewer: { rating: number, numReviews: number, meter: number },
    production: string,
    lastUpdated: string
}

export {IAwards,IImdb,ITomatoes}