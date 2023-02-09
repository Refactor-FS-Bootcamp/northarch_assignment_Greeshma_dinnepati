import React from 'react'

const IndividualData = ({individualExcelData,handleDelete}) => {
  return (
      <>
          <td>{individualExcelData.Id}</td>
          <td>{individualExcelData.FirstName}</td>
          <td>{individualExcelData.LastName}</td>
          <td>{individualExcelData.gender}</td>
          <td>{individualExcelData.country}</td>
          <td>{individualExcelData.age}</td>
          <td>
            <button className='delete' onClick={handleDelete}>Delete</button>
          </td>
      </>
  )
}

export default IndividualData