let button = document.querySelector('.new-verse');
let verse = document.querySelector('.verse');
let book = document.querySelector('.book');

const verses = [
    { 
  verse:`"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."`,  
  book: `Phillipians 4:6-7`
  }, { 
  verse:`"For if you forgive other people when they sin against you,
   your heavenly Father will also forgive you. 15 But if you do not forgive others their sins, your Father will not forgive your sins."`,  
  book:`Matthew 6:14-15`
  
  }, { 
  verse:`"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."`, 
  book:`John 3:16`
  
  }, { 
  verse:`"Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me."`,  
  book:`Revelation 3:20`
  
  }, { 
  verse:`"It is God who arms me with strength and keeps my way secure."`,      
  book:`Psalm 18:32`
  
  }, { 
  verse:`" If anyone, then, knows the good they ought to do and doesn’t do it, it is sin for them."`,  
  book:`James 4:17`
  
  }, { 
  verse:`"The earth is the Lord’s, and everything in it,the world, and all who live in it."`,  
  book:`Psalm 24:1`
  
  }, { 
  verse:`"Surely your goodness and love will follow me all the days of my life,and I will dwell in the house of the Lord  forever."`,
  book:`Psalm 23:6`
  }, { 
  verse:`"For everything in the world—the lust of the flesh, the lust of the eyes, and the pride of life-comes not from the Father but from the world."`,  
  book:`1 John 2:16`
  
  }, { 
  verse:`" If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness."`,  
  book:`1 John 1:9`
  },
  
  ];
  
  button.addEventListener('click', function (){
    let random = Math.floor(Math.random() * verses.length);
    verse.innerText = verses[random].verse;
    book.innerText = verses[random].book;

  });
  