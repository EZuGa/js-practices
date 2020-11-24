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
    console.log(`${book.author} ${book.haveRead?"have":"haven't"} read ${book.title} book ${book.haveRead?"":"yet"}`)
 }
}


readingStatus(Books)