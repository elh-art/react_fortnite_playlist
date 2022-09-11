import '../App.css'

function About() {
  return (
    <div className='about-container'>
      <h1 className='aboutSite'>
        This site is a small single-page <span>React Router</span> v6 application.
        I wrote it to practice this React library. The application fetches data from <a href="https://fortnite-api.com/">Fortnite free API</a> . My root layout is the Navigation bar which is always rendered in the DOM. Otherwise, the app shows the rest of the page based on the URL path changes.
      </h1>
      <img className='fourCharacters' 
          src={require('../assets/fortnite_203516.png')} 
          alt="Fortnite characters" />
    </div>
  )
}

export default About