import React,{useEffect,useState} from 'react';
import DEFAULT_LANG from './config/language'
import LanguageService from './services/language.service'
import './App.css';
  
function App() {
  const [lang,setLang]=useState({data:''});

  useEffect(()=>{
   let langData=LanguageService(DEFAULT_LANG);
    setLang({data:langData})
  });
  
  function languageEventHandler(e) {
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <select>
        <option onChange={languageEventHandler} defaultValue disabled>Select Language</option>
         <option value='aze'>Azerbaijan</option>
         <option  value='en'>English</option>
        </select>
        <p>
          {lang.data.hello}
        </p>
      </header>
    </div>
  );
}

export default App;