import React,{useState} from 'react'
import "bootstrap/js/src/collapse.js";
import Data from './Data';
import './Table.css'


function Table(props) {
    const { excelData=[],setExcelData } = props;
    const [order,setOrder]= useState('ASC')
    const [search ,setSearch] = useState('')

    const sorting = (col) => {
      console.log(col)
      if(order === 'ASC'){
        const sorted = [...excelData].sort((a,b)=>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
        setExcelData(sorted)
        setOrder('DSC')
      }
      if(order === 'DSC'){
        const sorted = [...excelData].sort((a,b)=> 
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
        setExcelData(sorted)
        setOrder('ASC')
      }
    }

  return (
    <div className='viewer'>
        {excelData.length!==0 &&(
          <div className='table-responsive'>
            <form>
              <div>
                <input type="text" className="search" placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
              </div>
              { <table className='table table-dark'>
                <thead>
                <tr>
                  {excelData[0] &&
                    Object.keys(excelData[0]).map((header, index) => (
                      <th key={index} onClick={()=> sorting(header)} >{header}</th>
                    ))}
                    <th>Delete</th>
                </tr>          
                </thead>
                <tbody>
                  <Data  excelData={excelData} search={search} setExcelData={setExcelData}/>
                </tbody>
              </table>
              }
            </form>            
          </div>
        )}       
      </div>
  )
}

export default Table