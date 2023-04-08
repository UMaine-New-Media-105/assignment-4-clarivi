class Book{
  constructor(bookLength,bookHeight,coverColor,pageType){
    this.bookLength = bookLength
    this.bookHeight = bookHeight
    this.coverColor = coverColor
    this.pageType = pageType
  }
}
function setup() {
  noStroke();
  odds = 0.995
  rows = 10
  columns = 10
  booksDrawn = 0
  createCanvas(600, 600);
  bookLengths = ["magazine","novel","dictionary","encyclopedia"]
  bookHeights = ["pocket bible","standard","large"]
  coverColors = ["maroon","green","rgb(116,64,120)","darkblue","crimson"]
  pageTypes = ["new","old","ancient","burnt"]
  frameRate(1)
  
  
}

function draw() {
  booksDrawn = 0;
  background("rgb(146,89,44)");
  for(let rowsdrawn = 0; rowsdrawn < rows; rowsdrawn++){
      push();
    for(let columnsdrawn = 0; columnsdrawn < columns; columnsdrawn++){
      drawBook(new Book(
        bookLengths[booksDrawn % bookLengths.length],
        bookHeights[booksDrawn % bookHeights.length],
        coverColors[booksDrawn % coverColors.length],
        pageTypes[booksDrawn % pageTypes.length]
      ))
      translate(0, height/columns)
      booksDrawn++;
    }
    pop();
    translate(width/rows, 0)
  }
}

function drawBook(book){
  push();
  let  length = book.bookLength
  let size = book.bookHeight
  let cover = book.coverColor
  let pages = book.pageType
  
  //Book Length
  if(length === "magazine")
    length = 4;
  if(length === "novel")
    length = 12;
  if(length === "dictionary")
    length = 18;
  if(length ==="encyclopedia")
    length = 24;
    
  //Book Size
  if(size === "pocket bible")
    size = 20;
  if(size === "standard")
    size = 40;
  if(size === "large")
    size = 50
  
  //Book Page Type
  if(pages === "new")
    pages = "white"
  if(pages === "old")
    pages = "rgb(137,134,134)"
  if(pages === "ancient")
    pages = "rgb(178,177,177)"
  if(pages === "burnt")
    pages = "rgb(37,37,37)"
    
  //book covers
  fill(cover)
  rect(10,50 - size,length*0.3,size)
  rect(10 + length*0.3 + length,50 - size ,length*0.3,size)
  
  fill(pages)
  rect(10 + length*0.3,50 - size + 2,length,size*0.9)
  pop();
}
