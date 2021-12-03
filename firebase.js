import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAcLIk1ChzYm7oQFHdFo2SemDewTAynh1k",
    authDomain: "manodictionary.firebaseapp.com",
    projectId: "manodictionary",
    storageBucket: "manodictionary.appspot.com",
    messagingSenderId: "214296154724",
    appId: "1:214296154724:web:61f9ec20619c140011c571",
    measurementId: "G-JQ5GQ74PH8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
   //important  some methods
    import {
      getDatabase,
      ref,
      set,
      get,
      child,
      onValue,
      push,
      query,
      orderByValue
    }
    from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

    // access  database
    const db = getDatabase();


    // access all input data
    const EnglishWord = document.getElementById('engWordInput');

    const HindiWord = document.getElementById('hindiWordInput');
 
    // ready data
    function ReadyData() {
      push(ref(db, "WordMeaning/"), {
        EnglishWord: EnglishWord.value,
        HindiWord: HindiWord.value
      });
      alert('Word Meaning Added');
    }
    //send data
    document.getElementById("InputForm").addEventListener("submit", ReadyData);

    // Read data
    const starCountRef =query( ref(db, 'WordMeaning/'),orderByValue('A'));
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const ObjKey = Object.keys(data);

      for (let i = 0; i < ObjKey.length; i++) {
        let DK = ObjKey[i];
        let WordEnglish  = data[DK].EnglishWord;
        let HindiWord = data[DK].HindiWord;
        
  const showData = document.getElementById('words_container');

        showData.insertAdjacentHTML('afterbegin', `
    <li class="Wordbox">
    <a id="word"><h2>${WordEnglish}</h2></a>
    <h2>${HindiWord}</h2>
    </li>`);
      }
      
    });
    
  