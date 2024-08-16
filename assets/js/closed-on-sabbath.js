const style=`.container {
  display: flex;
  justify-content: center; /* horizontal centering */
  align-items: center; /* vertical centering */
  height: 2em; /* define a height for demonstration purposes */
}`

const sabbath_closed_html=`
<html>
<style>${style}</style>
  <body>
    <h1 class='container'>Closed for the Lord's Day</h1>
    <h2 class='container'>This site is closed on the Christian Sabbath.</h2>
  </body>
</html>`;

function close() {
  const d = new Date();
  // is Sabbath in local time or east coast US
  const isSabbath = d.getDay() === 4 || (d.getUTCDay() === 1 && d.getUTCHours() < 5);
  console.log(`isSabbath=${isSabbath}`);
  //const isSabbath = d.getDay() === 0 || || (d.getUTCDay() === 1 && d.getUTCHours() < 5);
  if(isSabbath){
    document.documentElement.innerHTML = sabbath_closed_html;
    window.stop();
  }
}
close();
