import React from 'react'
import TheamContext from './context'

export default function ThemeLink() {
    return (
        <TheamContext.Consumer>
            {value => <p>{value}</p>}
        </TheamContext.Consumer>
    )
}
