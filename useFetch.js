import { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {
    const isMountedef = useRef(true)
    const [state, setstate] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        return () => {
            isMountedef.current = false;
        }
    }, [])

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMountedef.current) {
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                }

            })
    }, [url])

    return state;
}
