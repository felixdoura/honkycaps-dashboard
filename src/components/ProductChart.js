import React from 'react'

const ProductChart = (props) => {
    return (
        <>
            <tr>
                <th scope="row">{props.id}</th>
                <td>{props.name}</td>
                {/* <td>{props.categories}</td> */}
                <td>{props.description}</td>
            </tr>
        </>
    )
}

export default ProductChart