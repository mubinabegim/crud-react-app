
import React, {useState} from 'react';
import './styles.css';

function App() {
    const form = document.getElementById('form1');
    const tbody = document.querySelector('tbody');
    const desc = document.getElementById('desc');
    const amounts = document.getElementById('amount');
    const [spent, setSpent] = useState([
        {description: 'food', amount: 100},
        {description: 'Rent', amount: 200},
    ]);

    const Write = () =>{
     tbody.innerHTML = "";
     spent.map((product, index) =>{
        tbody.innerHTML +=`
            <tr>
            <td>${index+1}</td>
            <td>${product.description}</td>
            <td>${product.amount}</td>
            </tr>
        `
     })
    }
    Write();
    form.onsubmit = (e)=>{
        e.preventDefault()
        let new_obj ={
            description: desc.value,
            amount: amounts.value,
        }
        if(new_obj.description !== "" && new_obj.amount !== 0){
            setSpent([...spent, new_obj])
        }else alert('fill the gaps')
        Write();
        form.reset();
    }
    
   
    
    return(
        <></>
    )
}
export default App;