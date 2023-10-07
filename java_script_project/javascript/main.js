var quote=[
    { quote:`“Don’t walk in front of me… I may not follow
        Don’t walk behind me… I may not lead
        Walk beside me… just be my friend”`
    ,author:`― Albert Camus`
    },
    { quote:`“Two things are infinite: the universe and human stupidity;
     and I'm not sure about the universe.”`
    ,author:`― Albert Einstein`
    },
    { quote:`“In three words I can sum up everything I've learned about life: it goes on.”`
    
    ,author: `― Robert Frost`
    },

    { quote:`“Be the change that you wish to see in the world.”`
        
    ,author:`― Mahatma Gandhi`
    },
    { quote:`“So many books, so little time.”`
       
    ,author: `― Frank Zappa`
    },

    { quote:`“You only live once, but if you do it right, once is enough.”`
        
    ,author:`― Mae West`
    },
    
    { quote:`“You know you're in love when you can't fall asleep
     because reality is finally better than your dreams.”`
    
    ,author:`― Dr. Seuss`
    },

    { quote:
        `“If you want to know what a man's like,
         take a good look at how he treats his inferiors, not his equals.”`
        
    ,author :` ― J.K. Rowling, Harry Potter and the Goblet of Fire`
    },
    
    { quote:` “ Don’t walk in front of me… I may not follow
        Don’t walk behind me… I may not lead
        Walk beside me… just be my friend.“  `
            
    ,author: ` ― Albert Camus` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    ];
    
    function printQuote()
    {var num=Math.floor(Math.random()*quote.length);
    console.log(num);
    document.getElementById("Quote").innerHTML=quote[num].quote;
    document.getElementById("Author").innerHTML=quote[num].author;
    }
    
    
    
    
    
    
    
    
    