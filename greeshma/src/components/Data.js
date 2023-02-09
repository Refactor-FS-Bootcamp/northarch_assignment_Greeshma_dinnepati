import React from 'react'
import IndividualData from './IndividualExcelData'

function Data(props) {
    const { excelData, search ,setExcelData} =props;

    const handleDelete =(e,id) => {
        e.preventDefault()
        const newExcelData = [...excelData]
        const index = excelData.findIndex((item)=> item.Id === id);

        newExcelData.splice(index,1);
        setExcelData(newExcelData)
    }

    return excelData.filter((item)=>{
        if(search === ''){
            return item
        }
        else if(item.LastName.toLowerCase().includes(search.toLowerCase())|| item.FirstName.toLowerCase().includes(search.toLowerCase()) ){
            return item;
        }
        console.log(excelData)
    }).map((individualExcelData)=>(
        <tr key={individualExcelData.Id}>
            <IndividualData handleDelete={handleDelete} individualExcelData={individualExcelData}/>
        </tr>        
    ))
}

export default Data