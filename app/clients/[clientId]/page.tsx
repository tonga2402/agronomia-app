import React from 'react'

const page = ({ params }: { params: { clientId: string } }) => {
    return (
        <div>{params.clientId}</div>
    )
}

export default page