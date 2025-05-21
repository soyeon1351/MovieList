import { useEffect } from "react"

export default function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = usestate(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(handler)
    },[value, delay])

    return debouncedValue
}