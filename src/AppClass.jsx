// import React, { Component } from 'react'
// const form = document.getElementById('form1');
//     const tbody = document.querySelector('tbody');
//     const desc = document.getElementById('desc');
//     const amounts = document.getElementById('amount');
// export default class AppClass extends Component {
//     constructor(){
//         super()
//         this.state ={
//             description: 'Food',
//             amount: 200,
//         }
//     }
//   render() {
//     const Write = () =>{
//       tbody.innerHTML="";
//       this.map((state, index)=>{
//         tbody.innerHTML+=`
//         <tr>
//         <td>${index+1}</td>
//         <td>${this.state.description}</td>
//         <td>${this.state.amount}</td>
//         </tr>`
//       })
//     }
//     Write()
//     form.onsubmit = (e)=>{
//       e.preventDefault()
//       let new_obj ={
//           description: desc.value,
//           amount: amounts.value,
//       }
//       if(new_obj.description !== "" && new_obj.amount !== 0){
//           this.setState([...this.state, new_obj])
//       }else alert('fill the gaps')
//       Write();
//       form.reset();
//   }
//     return (
//       <></>
//     )
//   }
// }
