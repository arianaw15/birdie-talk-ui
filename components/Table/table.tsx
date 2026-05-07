'use client'
import styles from './table.module.css';
import { FaEllipsis } from "react-icons/fa6";
import Button from '../Button/button';
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect } from 'react';

interface TableProps {
columns?: any[];
data?: any[];
handleClick: (bird: any, event: React.MouseEvent<HTMLButtonElement>) => void
}
export default function Table({ columns, data, handleClick }: TableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const defaultPerPage = [5,10,25,50]
  const totalCount = data?.length
  const pages = totalCount && Math.ceil(totalCount/itemsPerPage)

  const [lastIndex, setLastIndex] = useState(currentPage * itemsPerPage)
  const [firstIndex, setFirstIndex] = useState(lastIndex - itemsPerPage)

  const currentItems = data?.slice(firstIndex, lastIndex);

  const onPageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedNumber = parseInt(event.target.value, 10)
  setItemsPerPage(selectedNumber)
  setCurrentPage(1) // optional: reset to first page
}

useEffect(() => {
  const newLastIndex = currentPage * itemsPerPage
  setLastIndex(currentPage * itemsPerPage)
  setFirstIndex(newLastIndex - itemsPerPage)
}, [currentPage, itemsPerPage])
  

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableSort}><div>
        <select onChange={onPageSelect} className={styles.pageSize} defaultValue={itemsPerPage}>
          {defaultPerPage.map((number) => {
            return (
              <option value={number} key={number}>{number}</option>
            )
          })}
        </select>
        </div></div>
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          {columns && columns.map((col, index) => {
            return <th key={`${col}-${index}`} className={styles.tableHeaderCell}>{col.value}</th>
          })}
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {currentItems && currentItems.map((row, index) => {
          return (
            <tr className={styles.tableRow} key={`${row.id}-${index}`}>
            <td className={styles.tableCellNumber}>{firstIndex + index + 1}</td>
            {columns?.map((col) => {
              if (col.key !== "") {
                  return <td>{row[col.key]}</td>
              }
              
            })}
            <td key={`${row.id}`}><Button variant="icon" onClick={(event) => handleClick(row, event)} id={row.id}><FaEllipsis /></Button></td>
          </tr>
          )
        })}
          
      </tbody>
    </table>
    <div className={styles.tableFooter}>
      <div className={styles.pagination} id="pagination"> 
		<a href="#" id="prev" onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}><FaAngleLeft/></a> 
    {[...Array(pages)].map((_, page) => {
      return (
        <a href="#" onClick={()=> setCurrentPage(page+1)}>{page+1}</a>
      )
    })}
		<a href="#" id="next" onClick={() => setCurrentPage(currentPage + 1)}><FaAngleRight/></a> 
		<p id="page-numbers"> </p> 
	</div> 
    </div>
    </div>
  );
}