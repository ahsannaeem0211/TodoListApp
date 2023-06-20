import React from 'react'

function ListItems(props) {
    return (
        <>
            <li>{props.text}</li>
            <div className='box-btn'>
                <button className='dlt-btn' onClick={() => {
                    props.onSelect(props.id);
                }}> - </button>
            </div>

        </>
    )
}

export default ListItems
