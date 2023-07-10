import React, { useEffect, useState, FC } from 'react'
// import { getCardData } from '../../services/gatcg-api'
import './CardSearch.css'

interface CardSearchProps {
    name: string,
    dataArr: Record<string, string | number>[],
}

const CardSearch: FC<CardSearchProps> = ({name, dataArr}) => {
    // const handleChange = (e) => {
    //     this.setState({[e.target.name]: e.target.value})
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     let name = this.state.name
    //     const getData = await getCardData(name)
    //     let dataArr
    //     for (i = 0; i < getData.data.length; i++) {
    //         dataArr.push(getData.data[i])
    //     }
    //     this.setState({dataArr: dataArr, name: ""})
    // }

    // const displayCard(card) {
    //     if (data) {
    //         return (
    //             <div>
    //                 { this.state.data.map(card => (
    //                     <div className="text-row">
    //                         <p className="flex">{card.name}</p>
    //                         <br/>
    //                     </div>
    //                 )) }
    //             </div>
    //         )
    //     } else if (data.code) {
    //         return (
    //             <p>No card with that name has been found.</p>
    //         )
    //     } else {
    //         return (
    //             <p>Please search for a card.</p>
    //         )
    //     }
    // }

    return <>
    
    </>
}

export default CardSearch;