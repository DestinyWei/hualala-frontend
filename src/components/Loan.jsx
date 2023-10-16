import React from 'react'

const Loan = () => {
  return (
    <div>
    <p style={{
        fontSize: '2.25rem', fontWeight: '700', textTransform: 'uppercase',
        letterSpacing: '0.1em',
    }}>You Have Loaned
        <span style={{
            fontSize: '2.25rem', fontWeight: '700', textTransform: 'uppercase',
            letterSpacing: '0.1em', color: 'green'
        }}> $1000 </span>
    </p>
    <p style={{
                            marginLeft:'338px',
                            fontSize: '2.25rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            width: '780px',
                        }}>You Must Pay
                            <span style={{
                                fontSize: '2.25rem', fontWeight: '700', textTransform: 'uppercase',
                                letterSpacing: '0.1em', color: 'red'
                            }}> $990 </span>

                        </p>
                        <button style={{backgroundColor:'#65db79', height:'40px' ,borderRadius:'18px' ,borderWidth:'1px' , marginTop:'80px' ,width:'150px' ,height:'80px' , }} >Loan</button>



                        <button style={{backgroundColor:'#eb3223', height:'40px' ,borderRadius:'18px' ,borderWidth:'1px' , marginTop:'80px' ,width:'150px' ,height:'80px' , }} >Pay</button>
    </div>

  )
}

export default Loan