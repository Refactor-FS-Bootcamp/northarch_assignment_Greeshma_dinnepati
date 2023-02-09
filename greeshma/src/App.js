import React ,{useState}from 'react'
import ExcelUpload from './components/ExcelUpload';
import Table from './components/Table';

function App() {
  const [ excelData,setExcelData ] = useState([])

  return (
    <div className="App">
      <ExcelUpload setExcelData={setExcelData} />
      <Table excelData={excelData}  setExcelData={setExcelData}/> 
    </div>
  )
}

export default App