import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

//props 사용, 단방향 flow
const TableBody = (props) => {
    const rows = props.childsData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                
                <td>
                    <button className="btn btn-primary" onClick={() => props.removeChild(index)}>Delete</button> {/* state 사용시 삭제 버튼 */}
                </td>
            </tr>
        )
    })
 
    return <tbody>{rows}</tbody> 
}

// state 사용, 좀더 유연한 방향
const Table = (props) => {
    const {childsData, removeChild} = props
    return (
        <table className='table table-striped'>
            <TableHeader />
            <TableBody childsData={childsData} removeChild={removeChild}/>
        </table>
    )
}


//props 단방향 리스트
/* class Table extends Component {
    render(){
        const {childsData} = this.props

        return(
            <table>
                <TableHeader />
                <TableBody childsData={childsData}/>
            </table>
        )
    }
} */

export default Table;