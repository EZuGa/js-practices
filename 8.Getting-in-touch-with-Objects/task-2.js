var Books = [ 
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title:  'The Hunger Games', 
        haveRead: false,
        dateOfRead: NaN
    }
 ];

 function readingStatus(Books){

 for( book of Books){
     Object.defineProperty(book,"daysAgo",{
         get(){
            let time1 = this.dateOfRead.getTime();
            let time2 = new Date();
            time2.setMonth(time2.getMonth() + 1);
            time2.getTime();
            
            return Math.floor((time2-time1) / (24*60*60*1000));
         },
     })
     console.log(`${book.author} ${book.haveRead?"have":"haven't"} read ${book.title} book ${book.haveRead?`${book.daysAgo}`:"yet"}`)
    }
}



readingStatus(Books)

