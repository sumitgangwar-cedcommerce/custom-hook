import useFetch from "./useFetch";

function App() {
  const {state , extractDataFromApi} = useFetch()

  var url= "https://jsonplaceholder.typicode.com/todos/";
  var method="GET";
  var payload = 1;
 
  console.log('Fetch Data =>' , state)
  return (
    <div className="App">
      <button
        style={{margin:'5vw 45vw'}}
        onClick={()=>extractDataFromApi(url , method , payload)}
      >
        Fetch Data
      </button>
      <br />
      {JSON.stringify(state)}
    </div>
  );
}

export default App;
