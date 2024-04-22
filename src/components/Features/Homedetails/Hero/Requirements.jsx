import './Require.css'

const Requirements = () => {
    const data=[
        {no:1, note:"You're formally employed", id:1},
        {no:2, note:"Your salary is paid into a bank account", id:2},
        {no:3, note:"You have your latest payslip", id:3},
        {no:4, note:"You hav ethe latest month's bank statement", id:4},
        {no:5, note:"You have an original National id", id:5}

    ]
    return ( 
        <>
        <h1>Requirements</h1>
           <div className="requirements-sec">
            
           {data.map((required)=>(
            <div className="requirements" key={required.id}>
            <span>{required.no}</span>
            <p>{required.note}</p>
           </div>
           ))

           }
        </div>
        </>
     
     );
}
 
export default Requirements;