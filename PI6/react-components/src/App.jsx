import Counter from "./components/Counter";
import CounterFunc from "./components/CounterFunc";
import ExpenseItem from "./components/ExpenseItem";
import Main from "./components/Main";
import Statefull from "./components/Statefull";


const data = [
  {
    type:'expense', 
    amount:19.50, 
    title:'Dinner', 
    date: new Date('March 12 2022')
  }, 
  {
    type:'income', 
    amount:1200, 
    title:'Paycheck', 
    date: new Date('March 25 2022')
  }, 
  {
    type:'expense', 
    amount:2.5, 
    title:'Cup of coffee', 
    date: new Date('March 13 2022')
  }, 
]


function App() {
  return (
  
    <main className="container">
      <ExpenseItem expense={data[0]}/>
      <ExpenseItem expense={data[1]}/>
      <ExpenseItem expense={data[2]}/>

      {/* <Counter/> */}
      {/* <CounterFunc/> */}
      {/* <Statefull/> */}
      {/* <Main/> */}

    </main>
  );
}

export default App;
