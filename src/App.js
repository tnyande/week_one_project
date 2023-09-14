import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import sedanimg from './images/icon-sedans.svg' ;
import suvimg from './images/icon-suv.svg' ;
import luxuryimg from './images/icon-luxury.svg' ;
import 

function App() {
  return (
    <div className="App">
      <Card 
      class = 'sedan'
       src={sedanimg}
       title='sedan'
       heading='SEDAN'
       content='Sedan cars are city master cars aith econmical
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industrys 
              standard dummy text ever since, when an unknown 
              printer took a galley of types and scrambled it to 
              make a types specimen book. It has survived not only 
              five centuries, but also the leap into electronic 
              typesetting, remaining essentially unchanged' 
              

      />

      <Card 
      class = 'suv'
       src={suvimg}
       title='suv'
       heading='SUV'
       content='Suv cars are city master cars aith econmical
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industrys 
              standard dummy text ever since, when an unknown 
              printer took a galley of types and scrambled it to 
              make a types specimen book. It has survived not only 
              five centuries, but also the leap into electronic 
              typesetting, remaining essentially unchanged' 
              

      />
      <Card 
      class = 'luxury'
       src={luxuryimg}
       title='luxury'
       heading='LUXURY'
       content='Luxury cars are city master cars aith econmical
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industrys 
              standard dummy text ever since, when an unknown 
              printer took a galley of types and scrambled it to 
              make a types specimen book. It has survived not only 
              five centuries, but also the leap into electronic 
              typesetting, remaining essentially unchanged' 
              

      />

    </div>
  );
}

export default App;
