import './Plans.css'
import React from 'react'

function Plans() {
    const products = [
        {
            name: 'Premium',
            description: '4K + 1080p',
            active: true
        },
        {
            name: 'Standard',
            description: '1080p',
            active: false
        },
        {
            name: 'Basic',
            description: '720p',
            active: false
        },
    ]

    return (
        <div className='plans-screen'>
            {
                products.map(data => {
                    return (
                        <div className={`plans-screen-plan ${data.active && "active"}`}>
                            <div className="plans-screen-info">
                                <h5>{data.name}</h5>
                                <h6>{data.description}</h6>
                            </div>
                            <button>
                                {data.active ? "Current Package" : "Subscribe"}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Plans