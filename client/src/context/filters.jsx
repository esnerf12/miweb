import { createContext, useState } from 'react'

// Crear contexto // Consumir
export const FiltersContext = createContext()

//Crear el provider // Acceso al contexto
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
